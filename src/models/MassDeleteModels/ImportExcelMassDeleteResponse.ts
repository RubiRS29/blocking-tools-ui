import {BaseResponse} from "../BaseResponse";
import {MassDelete} from "./MassDelete";

export class ImportExcelMassDeleteResponse extends BaseResponse{
    massDeleteList?: MassDelete[];
}
