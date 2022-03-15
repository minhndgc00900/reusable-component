/// <reference types="react" />
import { AppContextInterface } from "../interfaces";
declare const AppContext: import("react").Context<AppContextInterface>;
declare const useAppContext: () => AppContextInterface;
declare const useFilterContext: () => import("../interfaces").IFilterContext;
export { AppContext, useAppContext, useFilterContext };
