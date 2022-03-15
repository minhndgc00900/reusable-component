import { createContext, useContext } from "react";
import { AppContextInterface } from "../interfaces";
import FilterContext from "./filter";

const defaultAppContext = {
  isExpanded: false,
  setIsExpanded: () => {},
  setFilter: () => {},
};

const AppContext = createContext<AppContextInterface>(defaultAppContext);

const useAppContext = () => useContext(AppContext);
const useFilterContext = () => useContext(FilterContext);

export { AppContext, useAppContext, useFilterContext };
