import React from "react";
import { IColumn, IFilter } from "../../../interfaces";
interface ITable {
    condition: IFilter;
    onHandleFilter: Function;
    columns: Array<IColumn>;
}
declare const Filter: React.FC<ITable>;
export default Filter;
