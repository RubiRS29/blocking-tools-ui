import React from "react";
import {IStoreClone} from "../../interfaces/IStoreClone";

interface StoreCloneProps {
    store: IStoreClone;
}

const StoreClone : React.FC<StoreCloneProps> = ({store} ) => {

        return (
            <>
                <tr  className="focus:outline-none h-10 border border-gray-200 rounded">
                    <td>
                        <div className="ml-5">
                            <div className="">
                                {store.modelStore}
                            </div>
                        </div>
                    </td>
                    <td className="">
                        <div className="flex items-center pl-5">
                            <p className="text-base leading-none text-gray-700 mr-1">{store.modelStoreRecord} </p>
                        </div>
                    </td>
                    <td className="pl-5">
                        <div className="flex items-center">
                            <p className="text-sm leading-none text-gray-600 ml-1">{store.newStore}</p>
                        </div>
                    </td>
                    <td className="pl-5">
                        <div className="flex items-center">
                            <p className="text-sm leading-none text-gray-600 ml-1">{store.newStoreDeleted}</p>
                        </div>
                    </td>
                    <td className="pl-5">
                        <div className="flex items-center">

                            <p className="text-sm leading-none text-gray-600 ml-1">{store.newStoreAdded}</p>
                        </div>
                    </td>
                    <td className="pl-5">
                        <div className="flex items-center">
                            <p className="text-sm leading-none text-gray-600 ml-1">{store.channel}</p>
                        </div>
                    </td>
                </tr>
                <tr className="h-3"></tr>
            </>
        );
}
export default  StoreClone;
