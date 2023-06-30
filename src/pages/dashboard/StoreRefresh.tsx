import React from "react";
import {IStoreRefresh} from "../../interfaces/IStoreRefresh";

interface StoreCloneProps {
    store: IStoreRefresh;
}

const StoreRefresh : React.FC<StoreCloneProps> = ({store} ) => {

    return (
        <>
            <tr  className="focus:outline-none h-8 border border-gray-200 rounded">
                <td>
                    <div className="ml-5">
                        <div className="">
                            {store.store}
                        </div>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-5">
                        <p className="text-base leading-none text-gray-700 mr-2">{store.storeRecords} </p>
                    </div>
                </td>

            </tr>
            <tr className="h-3"></tr>
        </>
    );
}
export default  StoreRefresh;
