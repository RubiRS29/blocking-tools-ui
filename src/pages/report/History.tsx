import React, {useEffect, useMemo, useState} from "react";
import {FaFileExcel, FaFilter} from "react-icons/fa";
import ActionButton from "../../components/ActionButton";
import Pagination from "../../components/Pagination";


const importBlockingRequest = [
    {
        id : 1,
        name : 2,
        requestType : "Store refresh request",
        approvalState : "Pending",
        rejectionUser : "chemand",
        rejectionDate : "2023-06-21",
        productionUser : "chemand",
        productionDate : "2023-06-21",
    }
]

let PageSize = 8;

const History = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [currentTotalRows, setCurrentTotalRows] = useState(0);
    const [filterBy, setFilterBy] = useState('');
    const [data, setData] = useState(importBlockingRequest);

    const currentTableData = useMemo(() => {

        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        const dataSlice = importBlockingRequest.slice(firstPageIndex, lastPageIndex);

        let total = 0;
        total = currentTotalRows + dataSlice.length;
        setCurrentTotalRows(total);
        return importBlockingRequest.slice(firstPageIndex, lastPageIndex);

    }, [currentPage]);


    useEffect(() => {

        const dataFilter = importBlockingRequest.filter(ra => ra.requestType === filterBy);
        setData(dataFilter);

    }, [filterBy]);


    //handles
    const handleFilterRequest = (e:any) => {
        setFilterBy(e.target.value);
    }



    return (
        <>
            <div className=" flex flex-col gap-4">
                <div className="">
                    <h1 className="text-2xl font-normal">
                        History
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
                            onChange={handleFilterRequest}
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

                <div className={"flex w-full justify-end"}>

                    <Pagination
                        currentPage={currentPage}
                        totalCount={currentTableData.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                        totalRows={importBlockingRequest.length}
                        currentTotalRows={currentTotalRows}
                    />

                </div>


                <div className="flex justify-end w-full flex-wrap  ">
                    <ActionButton  title={"Export Excel"} icon={<FaFileExcel strokeWidth={2} className="h-5 w-5" />} color={"bg-blue-500"} colorHover={"hover:bg-blue-400"}  size={"w-52 h-9"} />
                </div>

            </div>
        </>
    );
}

export default History;
