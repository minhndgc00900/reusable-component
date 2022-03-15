import { IFilter } from "../../interfaces";
import { requestService } from "../requests";

export const getData = (url: string, body: IFilter) =>
    requestService.postRequest(
        url,
        body
    );

export const getHeaderColumn = (url: string) =>
    requestService.getRequest(
        url,
        {}
    )