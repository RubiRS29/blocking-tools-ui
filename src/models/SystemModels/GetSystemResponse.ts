import {BaseResponse} from "../BaseResponse";
import {System} from "./System";

export class GetSystemResponse extends BaseResponse{
    systems: System[] = [];
}
