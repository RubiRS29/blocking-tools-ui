import ActionButton from "../../components/ActionButton";
import React from "react";
import {FaPlus, FaRegCheckCircle} from "react-icons/fa";
import NewCloneStoreRow from "./NewCloneStoreRow";

const requestApproval = [
    {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    }
]

const RulesToEnterStores = () => {
    return (
        <div className=" mx-auto ">
            <div className="flex flex-col gap-1  text-xs">
                <div className="flex justify-start text-gray-700  rounded-md ">
                    <span className="bg-blue-400 h-2 w-2 m-2 rounded-full"></span>
                    <div className="flex-grow font-medium ">You must enter at least one store number</div>
                </div>
                <div className="flex justify-start text-gray-700  rounded-md ">
                    <span className="bg-blue-400 h-2 w-2 m-2 rounded-full"></span>
                    <div className="flex-grow font-medium ">You can enter up to 20 stores per day</div>
                </div>
                <div className="flex justify-start text-gray-700  rounded-md ">
                    <span className="bg-blue-400 h-2 w-2 m-2 rounded-full"></span>
                    <div className="flex-grow font-medium ">If you don't want to enter all stores you can leave some rows empty</div>
                </div>
                <div className="flex justify-start text-gray-700  rounded-md ">
                    <span className="bg-blue-400 h-2 w-2 m-2 rounded-full"></span>
                    <div className="flex-grow font-medium ">Store numbers cannot be repeated</div>
                </div>
            </div>
        </div>)
}

const NewCloneStore = () => {
    return (<>

        <div className="divide-y divide-gray-300 p-8">

            <div className="mt-2 mb-4">
                <h1 className="text-2xl font-normal">
                    Refresh Store
                </h1>
            </div>

            <div className={"p-5 flex flex-col gap-10"}>

                <div className={"grid grid-cols-5 gap-5 "}>

                    <div>

                    </div>

                    <div className="flex flex-col gap-5 justify-items-center col-span-2 w-full">
                        <div>
                            <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                                Name*:
                            </div>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block h-9 w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline outline-0 focus:ring-white-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div>
                            <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                                Model Store*:
                            </div>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block h-9 w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline outline-0 focus:ring-white-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className=" gap-5 w-full col-span-2 ">
                        <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                            Description:
                        </div>
                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block h-16 w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6 outline outline-0"
                            defaultValue={''}
                        />
                    </div>

                </div>

                <div className={"grid grid-cols-2 gap-4"}>

                    <div className=" ">
                        <p className=" font-medium">
                            Enter stores to refresh:
                        </p>
                        <RulesToEnterStores />
                    </div>

                    <div className=" overflow-auto h-72" >
                        <table className=" overflow-auto w-full h-80">
                            <thead className="bg-gray-100 border-b-1 border-gray-200 ">
                            <tr >
                                <th className="w-15 p-2 text-sm font-semibold tracking-wide text-left">Row #</th>
                                <th className="w-15 p-2 text-sm font-semibold tracking-wide text-left">Store Number</th>
                            </tr>
                            </thead>

                            <tbody>

                            {Array.from({ length: 20 }, (_, index) => (
                                <NewCloneStoreRow row={index + 1} />
                            ))}

                            </tbody>
                        </table>

                    </div>

                </div>


                <div className={"flex flex-row gap-3 justify-end"}>

                    <ActionButton  title={"Create Request"} icon={<FaPlus strokeWidth={2} className="h-5 w-5" />} color={"bg-green-500"} colorHover={"hover:bg-green-400"} size={"w-50 h-9"} />

                </div>
            </div>
        </div>
    </>);
}


export default  NewCloneStore;
