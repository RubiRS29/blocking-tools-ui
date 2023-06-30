import React from "react";
import ActionButton from "../../components/ActionButton";
import {FaFileDownload, FaFileExcel, FaPlus} from "react-icons/fa";
import {Checkbox, IconButton, Radio} from "@material-tailwind/react";
import {FaRegCircleXmark} from "react-icons/fa6";
import {FiDelete} from "react-icons/fi";

const blockingRequestBuilder = [
    {
        id : '1',
        systemCode : '00',
        partTypeCode : '00207',
        partTypeDescription : "Ignition Col",
        catalogCode : "2023",
        catalogDescription : "battery big",
        catBlocking : "H",
        channel : "DYI",
        domain : "C - MEX"
    }
]

const NewMassDeleteBuilder = () => {

    return (
        <>
            <div className=" flex flex-col gap-4">
                <div className="">
                    <h1 className="text-2xl font-normal">
                        Mass Delete
                    </h1>
                </div>

                <div className={"flex flex-row gap-5 justify-end"}>
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
                                className="block h-7 rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline outline-0 focus:ring-white-600 sm:text-sm sm:leading-6"
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

                <div className={"flex flex-row gap-x-14 gap-y-4 flex-wrap"}>
                    <div className="flex flex-col  justify-items-center">
                        <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                            System Code*:
                        </div>

                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 py-1.5 px-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 sm:max-w-xs sm:text-sm sm:leading-6 outline outline-0"
                        >
                            <option>00</option>
                            <option>01</option>
                            <option>02</option>
                            <option>00003</option>
                        </select>
                    </div>

                    <div className="flex flex-col  justify-items-center">
                        <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                            Part Type code*:
                        </div>
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline outline-0 focus:ring-white-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <IconButton
                        variant="text"
                        color="green"
                    className={"flex justify-center"}>
                        <FaPlus className="w-5 h-5 " color={"green"}/>
                    </IconButton>

                </div>

                {/*                         TABLE                  */}
                <div className={"grid grid-cols-3 gap-4"}>

                    <div className={"mt-6"}>
                        <table className="w-full">
                            <thead className="bg-gray-100 border-b-1 border-gray-200">
                            <tr >
                                <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">System Code</th>
                                <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">Part Type Code</th>
                                <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/*{blockingRequestBuilder.map( ( request: IBlockingRequestBuilder) =>*/}
                            {/*    <BlockingRequestBuilderRow blockingRequestBuilder={request} key={request.id} />*/}
                            {/*)}*/}
                            </tbody>
                        </table>
                    </div>

                    <div className={"mt-6"}>
                        <table className="w-full">
                            <thead className="bg-gray-100 border-b-1 border-gray-200">
                            <tr >
                                <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Catalog</th>
                                <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Name/Vendor</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/*{blockingRequestBuilder.map( ( request: IBlockingRequestBuilder) =>*/}
                            {/*    <BlockingRequestBuilderRow blockingRequestBuilder={request} key={request.id} />*/}
                            {/*)}*/}
                            </tbody>
                        </table>
                    </div>

                    <div className={"mt-6 flex gap-5 justify-around "}>
                        <div className="flex flex-col justify-items-center ">
                            <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                                Channel*:
                            </div>
                            <div className="flex flex-col gap-3 sm:text-sm sm:leading-6">
                                <Checkbox color="blue" label="  DYI"  className={"h-3 w-3"} />
                                <Checkbox color="blue" label="  Commercial"  className={"h-3 w-3"} />
                                <Checkbox color="blue"  label="  autozone.com"  className={"h-3 w-3"} />
                            </div>
                        </div>

                        <div className="flex flex-col justify-items-center ">
                            <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                                Domain*:
                            </div>

                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline outline-0 focus:ring-white-600 sm:text-sm sm:leading-6"
                            >
                                <option>MEX</option>
                                <option>US</option>
                                <option>ALL</option>
                            </select>
                        </div>
                    </div>


                </div>

                <div className={"flex flex-row gap-3 "}>
                    <ActionButton  title={"Remove"} icon={<FaRegCircleXmark strokeWidth={2} className="h-4 w-4" />} color={"bg-red-500"} colorHover={"hover:bg-red-400"} size={"w-28 h-7"} />
                </div>


                <div className={"mt-6"}>
                    <table className="w-full">
                        <thead className="bg-gray-100 border-b-1 border-gray-200">
                        <tr >
                            <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">System Code</th>
                            <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">Part Type Code</th>
                            <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">Description</th>
                            <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">Catalog Code</th>
                            <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">Catalog Description</th>
                            <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">Channel</th>
                            <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">Country</th>
                            <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/*{blockingRequestBuilder.map( ( request: IBlockingRequestBuilder) =>*/}
                        {/*    <BlockingRequestBuilderRow blockingRequestBuilder={request} key={request.id} />*/}
                        {/*)}*/}
                        </tbody>
                    </table>
                </div>

                <div className={"flex flex-row gap-3 justify-end"}>
                    <ActionButton  title={"Clean"} icon={<FiDelete strokeWidth={2} className="h-5 w-5" />} color={"bg-red-500"} colorHover={"hover:bg-red-400"}  size={"w-50 h-9"} />
                    <ActionButton  title={"Create request"} icon={<FaPlus strokeWidth={2} className="h-5 w-5" />} color={"bg-green-500"} colorHover={"hover:bg-green-400"}  size={"w-50 h-9"}  />
                </div>
            </div>
        </>
    );
}

export default NewMassDeleteBuilder;
