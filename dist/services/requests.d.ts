export declare const requestService: {
    getRequest: (path?: string, param?: Object, instanceObj?: import("axios").AxiosInstance) => Promise<import("axios").AxiosResponse<string[], any>>;
    postRequest: (path?: string, body?: {}, instanceObj?: import("axios").AxiosInstance) => Promise<any>;
};
