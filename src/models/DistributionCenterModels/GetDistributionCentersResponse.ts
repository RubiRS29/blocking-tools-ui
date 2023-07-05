import {BaseResponse} from "../BaseResponse";
import {DistributionCenter} from "./DistributionCenter";

export class GetDistributionCentersResponse extends BaseResponse{

    distributionCenters?: DistributionCenter[];

}
