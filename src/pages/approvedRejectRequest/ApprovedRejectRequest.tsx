import ActionButton from "../../components/ActionButton";
import React, {useEffect, useMemo, useState} from "react";
import {IRequestApproval} from "../../interfaces/IRequestApproval";
import {FaFileExcel, FaRegCheckCircle} from "react-icons/fa";
import ApprovalRequestRow from "./RequestApprovalRow";
import {FaRegCircleXmark} from "react-icons/fa6";
import Pagination from "../../components/Pagination";

const requestApprovalData = [
    {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    },
    {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    }
    ,{
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    },
    {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    },
    {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    }
    ,{
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    }, {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    },
    {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    }
    ,{
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    },
    {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    },
    {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    }
    ,{
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    },
    {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    },
    {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    }
    ,{
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    },
    {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    }
    ,
    {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    }
    ,{
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    },
    {
        id : 1,
        name : "test",
        requestType : "New blocking request",
        approvalState : "Pending",
        creationDate : "2023-0621",
        createUser : "chemand"
    }
]

let PageSize = 8;
const ApprovedRejectRequest = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [currentTotalRows, setCurrentTotalRows] = useState(0);


    const currentTableData = useMemo(() => {

        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        const dataSlice = requestApprovalData.slice(firstPageIndex, lastPageIndex);

        let total = 0;
        total = currentTotalRows + dataSlice.length;
        setCurrentTotalRows(total);
        return requestApprovalData.slice(firstPageIndex, lastPageIndex);

    }, [currentPage]);


    return (<>

        <div className="divide-y divide-gray-300 p-8">

            <div className="mt-2 mb-4">
                <h1 className="text-2xl font-normal">
                    Approve/Reject request
                </h1>
            </div>

            <div className={"p-5"}>

                <div className={"flex flex-row mb-5 "}>
                    <h2 className=" my-3 font-normal">
                        Filter by request type:
                    </h2>

                    <div className="mt-2 mx-3">
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option>New blocking request</option>
                            <option>Store clone request</option>
                            <option>Store refresh request</option>
                            <option>Mass delete request</option>
                        </select>
                    </div>

                </div>


                <div className="grid " >
                    <table className="">
                        <thead className="bg-gray-100 border-b-1 border-gray-200">
                        <tr >
                            <th className="w-15 p-2 text-sm font-semibold tracking-wide text-left">Name</th>
                            <th className="w-15 p-2 text-sm font-semibold tracking-wide text-left">Request type</th>
                            <th className="w-15 p-2 text-sm font-semibold tracking-wide text-left">Approval state</th>
                            <th className="w-15 p-2 text-sm font-semibold tracking-wide text-left">Creation Date</th>
                            <th className="w-15 p-2 text-sm font-semibold tracking-wide text-left">Create user</th>
                        </tr>
                        </thead>

                        <tbody>

                        {currentTableData.map(( approvalRequest: IRequestApproval, index) => {
                            return (
                                <ApprovalRequestRow approvalRequest={approvalRequest} key={index}/>
                            );
                        })}

                        </tbody>
                    </table>

                    <Pagination
                        currentPage={currentPage}
                        totalCount={currentTableData.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                        totalRows={requestApprovalData.length}
                        currentTotalRows={currentTotalRows}
                    />
                </div>

                <div className={"flex flex-row gap-3 justify-end"}>

                    <ActionButton  title={"Export to Excel"} icon={<FaFileExcel strokeWidth={2} className="h-5 w-5" />} color={"bg-blue-500"} colorHover={"hover:bg-blue-400"} size={"w-44 h-9"} />
                    <ActionButton  title={"Reject"} icon={<FaRegCircleXmark strokeWidth={2} className="h-5 w-5" />} color={"bg-red-500"} colorHover={"hover:bg-red-400"} />
                    <ActionButton  title={"Approve"} icon={<FaRegCheckCircle strokeWidth={2} className="h-5 w-5" />} color={"bg-green-500"} colorHover={"hover:bg-green-400"} />

                </div>
            </div>
        </div>
    </>);
}


export default  ApprovedRejectRequest;
