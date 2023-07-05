import {BaseResponse} from "../BaseResponse";
import {PartsType} from "./PartsType";

export class GetPartTypesBySearchTextResponse extends BaseResponse{
    partTypes?: PartsType[];
}
