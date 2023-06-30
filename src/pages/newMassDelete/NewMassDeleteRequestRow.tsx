import React from "react";
import {INewMassDeleteRequest} from "../../interfaces/INewMassDeleteRequest";

interface ImportBlockingRequestProps {
    request: INewMassDeleteRequest;
}

const NewMassDeleteRequestRow : React.FC<ImportBlockingRequestProps> = ({request} ) => {

    return (
        <>
            <tr  className="focus:outline-none h-10 border border-gray-200 rounded">
                <td>
                    <div className="ml-5">
                        <div className="">
                            {request.systemCode}
                        </div>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-5">
                        <p className="text-base leading-none text-gray-700 mr-1">{request.partTypeCode} </p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{request.partTypeDescription}</p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{request.catalogCode}</p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{request.catalogDescription}</p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{request.channel}</p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{request.country}</p>
                    </div>
                </td>

            </tr>
            <tr className="h-3"></tr>
        </>
    );
}
export default  NewMassDeleteRequestRow;
