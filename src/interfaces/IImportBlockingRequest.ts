
export interface IImportBlockingRequest {
    id?: number,
    systemCode?: number,
    partTypeCode?: number,
    partTypeDescription?: string,
    catalogCode?: number,
    catalogDescription?: string,
    channel?: string,
    storeNumber?: number,
    customerId?: number,
    blockingStatus?: string,
}

