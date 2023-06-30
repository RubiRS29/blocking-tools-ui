import React from "react";

interface NewMassDeleteBuilderProps {
    row?: number;
    storeNumber?: number;
}

const NewMassDeleteBuilderRow : React.FC<NewMassDeleteBuilderProps> = ({row, storeNumber} ) => {

    return (
        <>
            <tr  className="focus:outline-none h-8 border border-gray-200 rounded">
                <td>
                    <div className="ml-5">
                        <div className="">
                            {row}
                        </div>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-5">
                        <p className="text-base leading-none text-gray-700 mr-1">{storeNumber} </p>
                    </div>
                </td>

            </tr>
            <tr className="h-3"></tr>
        </>
    );
}
export default  NewMassDeleteBuilderRow;
