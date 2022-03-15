import React from "react";
import TableUI from "../../components/dynamic-table";

const WebFrameworkList = () => {
  // const [sortConfig, setSortConfig] = useState<ISortField | null>(null);
  // const [condition, setCondition] = useState<IFilter>({
  //   page: 1,
  //   pageSize: 10,
  // });

  // const [columns, setColumns] = useState<Column<object>[]>([]);

  // const [data, setData] = useState<Array<object>>([]);

  // const [pageCount, setPageCount] = useState<number>(0);

  // get previous condition state
  // const prevCondition = usePrevious(condition);

  // prepare to call api
  // useEffect(() => {
  //   if (JSON.stringify(prevCondition) !== JSON.stringify(condition)) {
  //     services
  //       .getData(condition)
  //       .then((res) => {
  //         if (condition.pageSize && condition.pageSize !== 0) {
  //           setData(res.items);
  //           setPageCount(Math.ceil(res.totalCount / condition.pageSize));
  //         }
  //       })
  //       .catch(() => {
  //         setData([]);
  //         setPageCount(1);
  //       });
  //   }
  // }, [condition]);

  // useEffect(() => {
  //   services.getHeaderColumn().then((res) => {
  //     const cols = mappingColumn(res.data);
  //     setColumns(cols);
  //   });
  // }, []);

  // // handle sort table
  // const onHandleSort = (param: ISortField) => {
  //   setSortConfig(param);
  // };

  // const onChangePage = (selectedPage: number) => {
  //   setCondition((prev) => ({
  //     ...prev,
  //     page: selectedPage,
  //   }));
  // };

  // const onHandleFilter = (param: IFilterField[]) => {
  //   setCondition((prev) => ({
  //     ...prev,
  //     filter: param.map((item) => ({
  //       field: item.field,
  //       logic: item.logic,
  //       operator: item.operator,
  //       value: item.value,
  //     })),
  //   }));
  // };

  // // prepare to call api
  // useEffect(() => {
  //   if (sortConfig) {
  //     const sortArr = [sortConfig];
  //     setCondition((prev) => ({
  //       ...prev,
  //       sorts: sortArr,
  //     }));
  //   }
  // }, [sortConfig]);

  return (
    <div className="content-list">
      <TableUI
        // sortConfig={sortConfig}
        api={"https://dynamic-demo-api.azurewebsites.net/api/SiteMap/paging"}
        // onHandleSort={onHandleSort}
        // columns={[
        //   {
        //     Header: "fullName",
        //     accessor: "fullName",
        //     type: "input"
        //   },
        //   {
        //     Header: "dateOfBirth",
        //     accessor: "dateOfBirth",
        //     type: "date"
        //   },
        //   {
        //     Header: "description",
        //     accessor: "description",
        //     type: "input"
        //   }
        // ]}
        // data={[
        //     { description: "acaca", fullName: "aaaaaaaa", dateOfBirth: "22-1-2012" },
        //     { description: "acaca", fullName: "minh", dateOfBirth: "22-1-2012" },
        //     { description: "acaca", fullName: "quoc", dateOfBirth: "22-1-2012" },
        //     { description: "acaca", fullName: "duc", dateOfBirth: "22-1-2012" },
        //     { description: "acaca", fullName: "bbbb", dateOfBirth: "22-1-2012" },
        //     { description: "acaca", fullName: "hung", dateOfBirth: "22-1-2012" },
        //     {
        //       description: "acaca",
        //       fullName: "davdescription",
        //       dateOfBirth: "22-1-2012"
        //     },
        //     { description: "acaca", fullName: "henry", dateOfBirth: "22-1-2012" },
        //     { description: "acaca", fullName: "frank", dateOfBirth: "22-1-2012" },
        //     { description: "acaca", fullName: "ronda", dateOfBirth: "22-1-2012" }
        //   ]}
        // totalCount={pageCount}
        // pageSize={pageSize}
      />
    </div>
  );
};

export default WebFrameworkList;
