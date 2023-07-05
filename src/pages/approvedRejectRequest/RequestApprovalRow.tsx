import React from "react";
import {IStoreClone} from "../../interfaces/IStoreClone";
import {IRequestApproval} from "../../interfaces/IRequestApproval";

interface RequestApprovalProps {
    approvalRequest: IRequestApproval;
}

const ApprovalRequestRow : React.FC<RequestApprovalProps> = ({approvalRequest} ) => {

    return (
        <>
            <tr  className="focus:outline-none max-h-7  border border-gray-200 rounded">
                <td>
                    <div className="flex items-center text-sm pl-2">
                        {approvalRequest.name}
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-2">
                        <p className="text-sm  text-gray-700 ">{approvalRequest.requestType} </p>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-2">
                        <p className="text-sm  text-gray-600 ">{approvalRequest.approvalState}</p>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-2">
                        <p className="text-sm  text-gray-600 ">{approvalRequest.creationDate}</p>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-2">

                        <p className="text-sm  text-gray-600 ">{approvalRequest.createUser}</p>
                    </div>
                </td>
            </tr>
            <tr className="h-3"></tr>
        </>
    );
}
export default  ApprovalRequestRow;
