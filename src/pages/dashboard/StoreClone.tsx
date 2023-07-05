import React from "react";
import {IStoreClone} from "../../interfaces/IStoreClone";

interface StoreCloneProps {
    store: IStoreClone;
}

const StoreClone : React.FC<StoreCloneProps> = ({store} ) => {

        return (
            <>
                <tr  className="focus:outline-none h-9 border border-gray-200 rounded">
                    <td>
                        <div className="pl-2">
                            {store.modelStore}
                        </div>
                    </td>
                    <td className="pl-2">
                        {store.modelStoreRecord}

                    </td>
                    <td className="pl-2">
                        {store.newStore}
                    </td>
                    <td className="pl-2">
                        {store.newStoreDeleted}
                    </td>
                    <td className="pl-2">
                        {store.newStoreAdded}
                    </td>
                    <td className="px-3 ">
                        {store.channel}
                    </td>
                </tr>
                <tr className="h-3"></tr>
            </>
        );
}
export default  StoreClone;
