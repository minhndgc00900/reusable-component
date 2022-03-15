import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { IColumn, IFilter, IFilterField } from "../../../interfaces";
import { convertSignalToName } from "../../../utils/getRandomId";
import ModalForm from "./modal-form";

const DEFAULT_FILTER_FIELD: IFilterField = {
  field: "",
  operator: "eq",
  value: "",
  logic: "and",
};

interface ITable {
  condition: IFilter;
  onHandleFilter: Function;
  columns: Array<IColumn>;
}

const Filter: React.FC<ITable> = ({ condition, onHandleFilter, columns }) => {
  const [listFilter, setListFilter] = useState<IFilterField[]>(
    condition.filter || []
  );
  const [isOpen, setIsOpen] = useState(false);

  const [currentFilter, setCurrentFilter] =
    useState<IFilterField>(DEFAULT_FILTER_FIELD);

  // handle remove filter
  const removeFilter = (indexToRemove: string | undefined) => {
    if (listFilter) {
      const newList = listFilter.filter(
        (item: IFilterField) => item.id !== indexToRemove
      );
      setListFilter(newList);
      onHandleFilter(newList);
    }
  };

  // handle add new tag
  const addFilter = (newFilter = DEFAULT_FILTER_FIELD) => {
    // const newList = [...listFilter, { ...newFilter, id: uuidv4() }];
    onHandleOpenModal(newFilter);
    // setListFilter(newList);
    // condition.filter = newList;
  };

  // handle open modal
  const onHandleOpenModal = (tag: IFilterField) => {
    setCurrentFilter(tag);
    setIsOpen(true);
  };

  // fill value to field after opening modal
  useEffect(() => {
    if (isOpen && !currentFilter.field) {
      setCurrentFilter((prev) => ({
        ...prev,
        field: columns[0].accessor,
      }));
    }
  }, [columns, isOpen]);

  // handle submit form
  const onHandleSubmit = (data: any) => {
    console.log(66, data);

    if (data.id) {
      setIsOpen(false);
      const newList = [
        ...listFilter.map((it) => {
          if (it.id === data.id) {
            return (it = {
              ...data,
              id: it.id,
            });
          }
          return it;
        }),
      ];
      setListFilter(newList);
      onHandleFilter(newList);
    } else {
      const newList = [...listFilter, { ...data, id: uuidv4() }];
      setListFilter(newList);
      onHandleFilter(newList);
      setIsOpen(false);
    }
    // getList();
  };

  return (
    <>
      <div className="container mx-auto pt-4 px-4 sm:px-8 max-w-10xl">
        <ul className="flex flex-wrap mx-0 mb-0 mt-2 p-0">
          <li>
            <FaFilter
              className="cursor-pointer mt-1 mr-4"
              onClick={() => addFilter()}
            />
          </li>
          {listFilter &&
            listFilter.map((tag: IFilterField, index: number) => (
              <>
                <li key={tag.id} className="tag cursor-pointer">
                  <span
                    onClick={() => {
                      onHandleOpenModal(tag);
                    }}
                  >
                    <span>{tag?.field}</span>&nbsp;
                    <span style={{ color: "burlywood" }}>
                      {convertSignalToName(tag?.operator)}
                    </span>
                    &nbsp;
                    <span>{tag?.value}</span>
                  </span>
                  <span
                    className="tag-close-icon"
                    onClick={() => removeFilter(tag.id)}
                  >
                    x
                  </span>
                </li>
                <li
                  className={`uppercase mt-1 mr-1 ${
                    listFilter.length - 1 === index && "hidden"
                  }`}
                >
                  {tag.logic}
                </li>
              </>
            ))}
        </ul>
      </div>
      <ModalForm
        isOpen={isOpen}
        onHandleSubmit={onHandleSubmit}
        setIsOpen={setIsOpen}
        columns={columns}
        tag={currentFilter}
      />
    </>
  );
};

export default Filter;
