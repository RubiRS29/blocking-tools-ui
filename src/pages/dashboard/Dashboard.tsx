import React from "react";
import StoreClone from "./StoreClone";
import {IStoreClone} from "../../interfaces/IStoreClone";
import StoreRefresh from "./StoreRefresh";
import {IStoreRefresh} from "../../interfaces/IStoreRefresh";
import ActionButton from "../../components/ActionButton";
import {FaFileExcel} from "react-icons/fa";

const stores = [
    {
        id : 1,
        modelStore : 12345,
        modelStoreRecord : 1234,
        newStore : 123,
        newStoreDeleted : 12,
        newStoreAdded : 1,
        channel : "DYI"
    },
    {
        id : 1,
        modelStore : 12345,
        modelStoreRecord : 1234,
        newStore : 123,
        newStoreDeleted : 12,
        newStoreAdded : 1,
        channel : "Commercial"
    },
]

const storeRefresh = [
    {
        id : 1,
        store : 12345,
        storeRecords : 1234
    },
    {
        id : 1,
        store : 12345,
        storeRecords : 1234
    }
]

const Dashboard = () => {
    return (
        <>
            <div className="divide-y divide-gray-300 p-8">
                <div className="mt-2 mb-4">
                    <h1 className="text-2xl font-normal">
                        Dashboard
                    </h1>
                </div>

                <div className={"p-5"}>
                    <h2 className=" my-3 font-normal">
                        Store clone summary:
                    </h2>

                    <div className="grid grid-cols-4 gap-5" >
                        <table className="col-span-3">
                            <thead className="bg-gray-100 border-b-1 border-gray-200">
                            <tr >
                                <th className="w-15 p-2 text-sm font-semibold tracking-wide text-left">Model Store</th>
                                <th className="w-15 p-2 text-sm font-semibold tracking-wide text-left">Model Store Record</th>
                                <th className="w-15 p-2 text-sm font-semibold tracking-wide text-left">New Store</th>
                                <th className="w-15 p-2 text-sm font-semibold tracking-wide text-left">New Store Deleted</th>
                                <th className="w-17 p-2 text-sm font-semibold tracking-wide text-left">New Store Added</th>
                                <th className="w-10 p-2 text-sm font-semibold tracking-wide text-left">Channel</th>
                            </tr>
                            </thead>

                            <tbody>
                            {stores.map( ( storeClone: IStoreClone) =>
                                <StoreClone store ={storeClone} />
                            )}
                            </tbody>
                        </table>
                        <ActionButton  title={"Export to Excel"} icon={<FaFileExcel strokeWidth={2} className="h-5 w-5" />} color={"bg-blue-500"} colorHover={"hover:bg-blue-400"} size={"w-44 h-9"} />

                    </div>
                </div>


                <div className={"p-5"}>
                    <h2 className=" my-3 font-normal">
                        Store refresh summary:
                    </h2>

                    <div className="grid grid-cols-2 gap-5" >
                        <table className="">
                            <thead className="bg-gray-100 border-b-1 border-gray-200">
                            <tr >
                                <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">Store</th>
                                <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">Store Records</th>
                            </tr>
                            </thead>

                            <tbody>

                            {storeRefresh.map( ( storeClone: IStoreRefresh) =>
                                <StoreRefresh store ={storeClone} />
                            )}
                            </tbody>

                        </table>

                        <ActionButton  title={"Export to Excel"} icon={<FaFileExcel strokeWidth={2} className="h-5 w-5" />} color={"bg-blue-500"} colorHover={"hover:bg-blue-400"} size={"w-44 h-9"} />

                    </div>
                </div>


            </div>
        </>
    );
}

export default Dashboard;
