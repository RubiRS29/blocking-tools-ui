import React from "react";
import ActionButton from "../../components/ActionButton";
import {FaFileDownload, FaFileExcel, FaPlus} from "react-icons/fa";
import NewMassDeleteRequestRow from "./NewMassDeleteRequestRow";
import {INewMassDeleteRequest} from "../../interfaces/INewMassDeleteRequest";

const newMassDeleteRequest = [
    {
        id : 1,
        systemCode : 2,
        partTypeCode : 123,
        partTypeDescription : "battery",
        catalogCode : 2023,
        catalogDescription : "battery big",
        channel : "DYI",
        country : "US"
    }
]

const NewMassDeleteRequest = () => {

    return (
        <>
            <div className=" flex flex-col gap-4">
                <div className="">
                    <h1 className="text-2xl font-normal">
                        Import Mass Delete Request
                    </h1>
                </div>

                <div className={"flex flex-row gap-5 justify-end "}>
                    <div className="flex flex-row gap-5 justify-items-center ">
                        <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                            Name*:
                        </div>
                        <div className="">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline outline-0 focus:ring-white-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row gap-5">

                        <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                            Description:
                        </div>
                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block h-9 rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6 outline outline-0"
                            defaultValue={''}
                        />
                    </div>

                </div>

                <div className={"mt-6 h-60"}>
                    <table className="w-full ">
                        <thead className="bg-gray-100 border-b-1 border-gray-200">
                        <tr >
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">System Code</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Part Type Code</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Part Type Description</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Catalog Code</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Catalog Description</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Channel</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Country</th>
                        </tr>
                        </thead>

                        <tbody>

                        {newMassDeleteRequest.map( ( request: INewMassDeleteRequest) =>
                            <NewMassDeleteRequestRow request={request} key={request.id} />
                        )}

                        </tbody>
                    </table>
                </div>

                <div className={"flex flex-row gap-3 justify-end"}>
                    <ActionButton  title={"Download sample file"} icon={<FaFileDownload strokeWidth={2} className="h-5 w-5" />} color={"bg-blue-500"} colorHover={"hover:bg-blue-400"} size={"w-50 h-9"}  />
                    <ActionButton  title={"Import Excel"} icon={<FaFileExcel strokeWidth={2} className="h-5 w-5" />}  size={"w-50 h-9"} />
                    <ActionButton  title={"Create request"} icon={<FaPlus strokeWidth={2} className="h-5 w-5" />} color={"bg-green-500"} colorHover={"hover:bg-green-400"} size={"w-50 h-9"} />
                </div>

            </div>
        </>
    );
}

export default NewMassDeleteRequest;
