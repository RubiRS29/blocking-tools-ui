import React, {useMemo, useState} from "react";
import { FaFilter } from "react-icons/fa";
import ActionButton from "../../components/ActionButton";
import { Radio } from "@material-tailwind/react";
import Pagination from "../../components/Pagination";





const FilterBySystemCode = () => {

    return (
        <div className={"grid grid-cols-6 gap-4"}>

            <div className="flex flex-col  justify-items-center w-full">
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

            <div className="flex flex-col  justify-items-center w-full">
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

            <div className="flex flex-col justify-items-center w-full">
                <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                    Select part type*:
                </div>
                <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline outline-0 focus:ring-white-600 sm:text-sm sm:leading-6"
                >
                    <option>0030 - Ignition Col</option>
                    <option>0020 - Ignition A</option>
                    <option>0005 - Ignition B</option>
                    <option>0100 - Ignition C</option>
                </select>
            </div>

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
                    <option>Battery </option>
                    <option>Duralax</option>
                </select>
            </div>


            <div className="flex flex-col justify-items-center w-full">
                <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                    State:
                </div>
                <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline outline-0 focus:ring-white-600 sm:text-sm sm:leading-6"
                >
                    <option>Current</option>
                    <option>Future</option>
                </select>
            </div>

            <div className="flex justify-center w-full flex-wrap content-center">
                <ActionButton  title={"Filter"} icon={<FaFilter strokeWidth={2} className="h-3 w-3" />} color={"bg-red-500"} colorHover={"hover:bg-red-400"} size={"w-24 h-7"} />
            </div>

        </div>
    )
}


const FilterByStored = () => {

    return (
        <div className={"grid grid-cols-6 gap-4"}>

            <div className="flex flex-col  justify-items-center w-full">
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

            <div className="flex flex-col justify-items-center w-full">
                <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                    State:
                </div>
                <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline outline-0 focus:ring-white-600 sm:text-sm sm:leading-6"
                >
                    <option>Current</option>
                    <option>Future</option>
                </select>
            </div>

            <div className="flex justify-center w-full flex-wrap content-center">
                <ActionButton  title={"Filter"} icon={<FaFilter strokeWidth={2} className="h-3 w-3" />} color={"bg-red-500"} colorHover={"hover:bg-red-400"} size={"w-24 h-7"} />
            </div>

        </div>
    )

}



const qaStateDate = [
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

let PageSize = 8;

const QAState = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [currentTotalRows, setCurrentTotalRows] = useState(0);
    const [filterValue, setFilterValue] = useState(true);


    const currentTableData = useMemo(() => {

        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        const dataSlice = qaStateDate.slice(firstPageIndex, lastPageIndex);

        let total = 0;
        total = currentTotalRows + dataSlice.length;
        setCurrentTotalRows(total);
        return qaStateDate.slice(firstPageIndex, lastPageIndex);

    }, [currentPage]);


    return (
        <>
            <div className=" flex flex-col gap-4">
                <div className="">
                    <h1 className="text-2xl font-normal">
                        QA State
                    </h1>
                </div>

                <div className={"flex flex-row gap-5 "}>
                    <div className="flex flex-col justify-items-center ">
                        <div  className="block text-sm font-medium leading-6 text-gray-900 ">
                            Filter By:
                        </div>
                        <div className="flex flex-col gap-2 sm:text-sm sm:leading-6">
                            <Radio id="systemCode" name="filterSystem" label="SystemCode, PartType, Catalog and Status"  className={"h-3 w-3"} onChange={ () => setFilterValue(true) } checked={filterValue}/>
                            <Radio id="store" name="filterStore" label="Store, State"  className={"h-3 w-3"} onChange={() => setFilterValue(false) } checked={!filterValue}/>
                        </div>
                    </div>
                </div>

                {filterValue ? (
                    <FilterBySystemCode />
                ) : (
                    <FilterByStored />
                )}

                <div className={"mt-6 h-60"}>
                    <table className="w-full ">
                        <thead className="bg-gray-100 border-b-1 border-gray-200">
                        <tr >
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">System Code</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Part Type Code</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Catalog Code</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Channel</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Store Number</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">DC</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">CustomerId</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Blocking Status</th>
                            <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">Action Code</th>
                        </tr>
                        </thead>

                        <tbody>
                        {/*{importBlockingRequest.map( ( approvalRequest: IImportBlockingRequest) =>*/}
                        {/*    <ImportBlockingRequestRow importRequest ={approvalRequest} key={approvalRequest.id} />*/}
                        {/*)}*/}
                        </tbody>

                    </table>
                </div>

                <div className={"flex w-full justify-end"}>

                    <Pagination
                        currentPage={currentPage}
                        totalCount={currentTableData.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                        totalRows={qaStateDate.length}
                        currentTotalRows={currentTotalRows}
                    />

                </div>

            </div>
        </>
    );
}

export default QAState;
