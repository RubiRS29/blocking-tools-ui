import {ReactNode} from "react";

export interface IBlockingRequestBuilder {
    id?:  string,
    systemCode?:  string,
    partTypeCode?: string,
    partTypeDescription?: string,
    catalogCode?:  string,
    catalogDescription?: string,
    catBlocking?: string,
    channel?: string,
    domain?: string
}

