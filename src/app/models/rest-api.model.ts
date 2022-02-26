import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export enum RestApiMethod {
    GET = "get",
    POST = "post",
    PUT = "put",
    PATCH = "patch",
    DELETE = "delete"
}

export class RestApiRequestOptions {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    context?: HttpContext;
    observe?: any = "body";
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: any = "json";
    withCredentials?: boolean;
}

export interface RestApiOptions {
    urlParameters?: Record<string, string>;
    request?: RestApiRequestOptions;
    encodeUri?: "encodeURI" | "encodeURIComponent";
}

export interface RestApiData<T = unknown> {
    method: RestApiMethod;
    route: string;
    options?: RestApiOptions;
    body?: T
}

export interface RestApiRoutes {
    gateways?: {
        identityProvider?: string;
        publicGateWay?: string
    },
    urls?: {
        login?: string;
        logout?: string;
        [key: string]: string;
    }
}
