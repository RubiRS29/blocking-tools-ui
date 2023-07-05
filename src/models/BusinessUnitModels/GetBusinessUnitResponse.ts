import {BusinessUnit} from "./BusinessUnit";
import {BaseResponse} from "../BaseResponse";

export class GetBusinessUnitResponse extends  BaseResponse{
    businessUnits?: BusinessUnit[];
}
