import {BaseResponse} from "../BaseResponse";
import {StoreClone} from "./StoreClone";

export class GetStoreCloneResponse extends BaseResponse{
    storeCloneList: StoreClone[] = []
}
