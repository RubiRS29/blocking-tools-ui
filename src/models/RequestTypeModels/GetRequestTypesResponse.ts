import {BaseResponse} from "../BaseResponse";
import {RequestType} from "./RequestType";

export class GetRequestTypesResponse extends BaseResponse{
    requestTypes?: RequestType[]
}
