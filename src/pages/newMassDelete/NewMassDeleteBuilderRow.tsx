import React from "react";
import {IBlockingRequestBuilder} from "../../interfaces/IBlockingRequestBuilder";
import {IconButton} from "@material-tailwind/react";
import {FaRegTrashCan} from "react-icons/fa6";

interface BlockingRequestBuilderProps {
    blockingRequestBuilder?: IBlockingRequestBuilder;
    row?: number;
}

const NewMassDeleteBuilderRow : React.FC<BlockingRequestBuilderProps> = ({blockingRequestBuilder,row} ) => {

    return (
        <>
            <tr  className="focus:outline-none h-7 border border-gray-200 rounded">
                <td>
                    <div className="ml-5">
                        <div className="">
                            {/*{blockingRequestBuilder?.systemCode}*/}
                            {row}
                        </div>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-5">
                        {blockingRequestBuilder?.partTypeCode}
                        {row}
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-5">
                        {blockingRequestBuilder?.partTypeDescription} {row}
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-5">
                        {blockingRequestBuilder?.catalogCode} {row}
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-5">
                        {blockingRequestBuilder?.catalogDescription} {row}
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-5">
                        {blockingRequestBuilder?.catBlocking} {row}
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-5">
                        {blockingRequestBuilder?.channel } {row}
                    </div>
                </td>
                <td className="">
                    <div className="flex ">
                        <IconButton
                            variant="text"
                            color="red" >
                            <FaRegTrashCan className="w-5 h-5" color={"red"}/>
                        </IconButton>
                    </div>
                </td>
            </tr>
            <tr className="h-3"></tr>
        </>
    );
}
export default  NewMassDeleteBuilderRow;
