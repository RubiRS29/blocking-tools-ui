import {BaseResponse} from "../BaseResponse";
import {StoreCloneSummary} from "./StoreCloneSummary";

export class GetStoreCloneSummaryResponse extends BaseResponse{
    storeCloneSummaryList: StoreCloneSummary[] = [];
}
