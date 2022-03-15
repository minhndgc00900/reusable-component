import { createContext } from "react";
import { IFilterContext } from "../interfaces";

export const DEFAULT_FILTER_CONTEXT: IFilterContext = {
  condition: {
    page: 1,
    pageSize: 10,
  },
  setCondition: () => {}
};
const FilterContext = createContext<IFilterContext>(DEFAULT_FILTER_CONTEXT);

export default FilterContext;
