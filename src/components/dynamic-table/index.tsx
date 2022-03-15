import React, { useEffect, useState } from "react";
import { Column, HeaderProps, Renderer, useTable } from "react-table";
import { usePrevious } from "../../custom-hook/usePrevious";
import {
  IColumn,
  IFilter,
  IFilterField,
  ISortField,
  ITable,
} from "../../interfaces";
import { PaginationUI } from "./pagination";
import * as services from "../../services/table-data/index";
import { mappingColumn } from "../../utils/transform-data";
import Filter from "./filter";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const TableUI: React.FC<ITable> = ({
  columns,
  data,
  sortConfig,
  onHandleSort,
  totalCount = 0,
  pageSize = 0,
  api,
  allowFilter = true,
  allowPagination = true,
  onChangePage,
  onHandleFilter,
}) => {
  const [columnsResponse, setColumnsResponse] = useState<Array<IColumn>>([]);

  const [dataResponse, setDataResponse] = useState<object[]>([]);

  const [pageCount, setPageCount] = useState<number>(0);

  const [sort, setSort] = useState<ISortField | null>(null);

  const [condition, setCondition] = useState<IFilter>({
    page: 1,
    pageSize: 10,
  });

  const prevCondition = usePrevious(condition);

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: columnsResponse as Array<Column>,
      data: dataResponse,
    });

  const requestSort = (field: any) => {
    let dir = "asc";
    if (sort && sort.field === field && sort.dir === "asc") {
      dir = "desc";
    }

    if (onHandleSort) {
      onHandleSort({ field, dir });
    } else {
      onHandleSortFunc({ field, dir });
    }
  };

  const getIconArrow = (
    sort: ISortField | null,
    key: Renderer<HeaderProps<object>> | undefined
  ) => {
    if (sort?.field === key) {
      return sort?.dir === "asc" ? <FiArrowUp /> : <FiArrowDown />;
    }
  };

  const onHandleIconArrow = (
    key: Renderer<HeaderProps<object>> | undefined
  ) => {
    if (sortConfig) {
      return getIconArrow(sortConfig, key);
    } else {
      return getIconArrow(sort, key);
    }
  };

  // handle sort table
  const onHandleSortFunc = (param: ISortField) => {
    setSort(param);
  };

  const onChangePageFunc = (selectedPage: number) => {
    if (onChangePage) {
      onChangePage(selectedPage);
    } else {
      setCondition((prev) => ({
        ...prev,
        page: selectedPage,
      }));
    }
  };

  const onHandleFilterFunc = (param: IFilterField[]) => {
    if (onHandleFilter) {
      onHandleFilter(param);
    } else {
      setCondition((prev) => ({
        ...prev,
        filter: param.map((item) => ({
          field: item.field,
          logic: item.logic,
          operator: item.operator,
          value: item.value,
        })),
      }));
    }
  };

  // prepare to call api
  useEffect(() => {
    if (sort) {
      const sortArr = [sort];
      setCondition((prev) => ({
        ...prev,
        sorts: sortArr,
      }));
    }
  }, [sort]);

  // prepare to call api
  useEffect(() => {
    if (JSON.stringify(prevCondition) !== JSON.stringify(condition)) {
      if (api) {
        services
          .getData(api, condition)
          .then((res: any) => {
            if (condition.pageSize && condition.pageSize !== 0) {
              setDataResponse(res.items);
              setPageCount(Math.ceil(res.totalCount / condition.pageSize));
              if (!columns) {
                const cols = mappingColumn(Object.keys(res.items[0]));
                setColumnsResponse(cols);
              }
            }
          })
          .catch(() => {
            setDataResponse([]);
            setPageCount(1);
          });
      } else if (data) {
        setDataResponse(data);
        setPageCount(Math.ceil(totalCount / pageSize));
        if (!columns) {
          const cols = mappingColumn(Object.keys(data[0]));
          setColumnsResponse(cols);
        }
      }
    }
  }, [api, condition]);

  useEffect(() => {
    if (columns) {
      setColumnsResponse(columns);
    }
  }, [columns]);

  return (
    <div>
      {allowFilter && (
        <Filter
          condition={condition}
          onHandleFilter={onHandleFilterFunc!}
          columns={columns ? columns : columnsResponse}
        />
      )}
      <div className="container mx-auto pt-4 px-4 sm:px-8 max-w-10xl">
        <div className="overflow-x-auto">
          <table className="table w-full" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  <th></th>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="cursor-pointer"
                      onClick={() => requestSort(column.Header)}
                    >
                      <div className="flex gap-2">
                        {column.render("Header")}
                        {onHandleIconArrow(column.Header)}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, key) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    <th>{key + 1}</th>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {allowPagination && (
          <PaginationUI
            currentPageIndex={condition.page! - 1}
            pageCount={pageCount!}
            onChangePage={(param: number) => onChangePageFunc(param + 1)}
          />
        )}
      </div>
    </div>
  );
};

export default TableUI;
