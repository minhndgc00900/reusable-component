import { IFilter } from "../../interfaces";
export declare const getData: (url: string, body: IFilter) => Promise<any>;
export declare const getHeaderColumn: (url: string) => Promise<import("axios").AxiosResponse<string[], any>>;
