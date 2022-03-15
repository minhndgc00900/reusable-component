import { Dispatch, SetStateAction } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export interface AppContextInterface {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

export interface IColumn {
  Header: string;
  accessor: string;
  type?: string;
}

export interface ITable {
  columns?: Array<IColumn>;
  data?: Array<object>;
  sortConfig?: ISortField | null;
  totalCount?: number;
  pageSize?: number
  api?: string;
  allowFilter?: boolean;
  allowPagination?: boolean;
  onHandleSort?: Function;
  onHandleFilter?: Function;
  onChangePage?: Function;
}

export interface IModalForm {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onHandleSubmit: SubmitHandler<FieldValues>;
  tag: IFilterField;
  columns: Array<IColumn>;
}

export interface IPagination {
  currentPageIndex?: number,
  pageCount: number,
  onChangePage: Function,
}

export interface IInfo {
  id: number;
  age: string;
  visits: string;
  status: string;
  progress: string;
}
export interface IFilterField {
  id?: string;
  field: string;
  operator: string;
  value: string;
  logic: "and" | "or";
}

export interface ISortField {
  field: string;
  dir: string;
}

export interface IFilter {
  page?: number;
  pageSize?: number;
  filter?: IFilterField[];
  sorts?: ISortField[];
}

export interface IFilterContext{
  condition: IFilter,
  setCondition: Dispatch<SetStateAction<IFilter>>;
}

export interface IFieldList{
  label: string,
  value: string,
  type?: string,
}