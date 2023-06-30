import React from "react";
import {FaFileExcel, FaFilter} from "react-icons/fa";
import ActionButton from "../../components/ActionButton";


const importBlockingRequest = [
    {
        id : 1,
        systemCode : 2,
        partTypeCode : 123,
        partTypeDescription : "battery",
        catalogCode : 2023,
        catalogDescription : "battery big",
        channel : "DYI",
        storeNumber : 1020,
        customerId : 123454,
        blockingStatus : "pending"
    }
]

const History = () => {

    return (
        <>
            <div className=" flex flex-col gap-4">
                <div className="">
                    <h1 className="text-2xl font-normal">
                        QA State
                    </h1>
                </div>

                <div className={"grid grid-cols-6 gap-4"}>

                    <div className="flex flex-col justify-items-center w-full">
                        <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                            Catalog*:
                        </div>
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline outline-0 focus:ring-white-600 sm:text-sm sm:leading-6"
                        >
                            <option>All </option>
                            <option>New blocking request </option>
                            <option>Store clone request </option>
                            <option>Store refresh request </option>
                            <option>Mass delete request</option>
                        </select>
                    </div>

                    <div className="flex justify-center w-full flex-wrap content-center">
                        <ActionButton  title={"Filter"} icon={<FaFilter strokeWidth={2} className="h-3 w-3" />} color={"bg-red-500"} colorHover={"hover:bg-red-400"} size={"w-24 h-7"}/>
                    </div>

                </div>


                <div className={"mt-6 h-60"}>
                    <table className="w-full ">
                        <thead className="bg-gray-100 border-b-1 border-gray-200">
                        <tr >
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Name</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Request type</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Approval state</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Rejection user</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Rejection date</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Production user</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Production date</th>
                        </tr>
                        </thead>

                        <tbody>
                        {/*{importBlockingRequest.map( ( approvalRequest: IImportBlockingRequest) =>*/}
                        {/*    <ImportBlockingRequestRow importRequest ={approvalRequest} key={approvalRequest.id} />*/}
                        {/*)}*/}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end w-full flex-wrap  ">
                    <ActionButton  title={"Export Excel"} icon={<FaFileExcel strokeWidth={2} className="h-5 w-5" />} color={"bg-blue-500"} colorHover={"hover:bg-blue-400"}  size={"w-52 h-9"} />
                </div>

            </div>
        </>
    );
}

export default History;
