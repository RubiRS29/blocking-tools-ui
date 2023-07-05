import {BaseResponse} from "../BaseResponse";
import {StoreRefreshSummary} from "./StoreRefreshSummary";

export class GetStoreRefreshSummaryResponse extends BaseResponse{
    storeRefreshSummaryList: StoreRefreshSummary[] = [];
}
