import React from "react";
import {IImportBlockingRequest} from "../../interfaces/IImportBlockingRequest";

interface ImportBlockingRequestProps {
    importRequest: IImportBlockingRequest;
}

const ImportBlockingRequestRow : React.FC<ImportBlockingRequestProps> = ({importRequest} ) => {



    return (
        <>
            <tr  className="focus:outline-none h-10 border border-gray-200 rounded">
                <td>
                    <div className="ml-5">
                        <div className="">
                            {importRequest.systemCode}
                        </div>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-5">
                        <p className="text-base leading-none text-gray-700 mr-1">{importRequest.partTypeCode} </p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{importRequest.partTypeDescription}</p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{importRequest.catalogCode}</p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{importRequest.catalogDescription}</p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{importRequest.channel}</p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{importRequest.storeNumber}</p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{importRequest.customerId}</p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{importRequest.blockingStatus}</p>
                    </div>
                </td>
            </tr>
            <tr className="h-3"></tr>
        </>
    );
}
export default  ImportBlockingRequestRow;
