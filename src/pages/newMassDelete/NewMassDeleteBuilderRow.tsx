import React from "react";
import {IBlockingRequestBuilder} from "../../interfaces/IBlockingRequestBuilder";
import {IconButton} from "@material-tailwind/react";
import {FaRegTrashCan} from "react-icons/fa6";

interface BlockingRequestBuilderProps {
    blockingRequestBuilder: IBlockingRequestBuilder;
}

const NewMassDeleteBuilderRow : React.FC<BlockingRequestBuilderProps> = ({blockingRequestBuilder} ) => {

    return (
        <>
            <tr  className="focus:outline-none h-10 border border-gray-200 rounded">
                <td>
                    <div className="ml-5">
                        <div className="">
                            {blockingRequestBuilder.systemCode}
                        </div>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-5">
                        <p className="text-base leading-none text-gray-700 mr-1">{blockingRequestBuilder.partTypeCode} </p>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{blockingRequestBuilder.partTypeDescription}</p>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{blockingRequestBuilder.catalogCode}</p>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{blockingRequestBuilder.catalogDescription}</p>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-1">{blockingRequestBuilder.catBlocking}</p>
                    </div>
                </td>
                <td className="">
                    <div className="flex ">
                        <p className="text-sm leading-none text-gray-600 ml-1">{blockingRequestBuilder.channel}</p>
                    </div>
                </td>
                <td className="">
                    <div className="flex ">
                        <p className="text-sm leading-none text-gray-600 ml-1">{blockingRequestBuilder.domain}</p>
                    </div>
                </td>
                <td className="">
                    <div className="flex justify-center">
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
