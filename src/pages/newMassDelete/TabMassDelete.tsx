import React, {useEffect, useState} from "react";
import {FaFileImport, FaRegFile} from "react-icons/fa";
import NewMassDeleteRequest from "./NewMassDeleteRequest";
import NewMassDeleteBuilder from "./NewMassDeleteBuilder";

const TabMassDelete = () =>  {

    const [activeTab, setActiveTab] = useState(1);


    const handleActiveTab = (e:any) => {
        setActiveTab(e);
    }

    useEffect(() => {
        console.log(activeTab);
    }, [activeTab]);


    return (
        <>
            <div className="flex flex-col flex-nowrap ">

                <div className="flex flex-row border-b">

                    <div className={`flex items-center flex-shrink-0 px-5 py-3  border-b text-xs rounded-t-lg space-x-2 ${activeTab === 1 && ` border-x border-t dark:border-gray-400`}`} onClick={ () => handleActiveTab(1)}>
                        <FaFileImport />
                        <span>Import Mass Delete Request</span>
                    </div>

                    <div className={`flex flex-row items-center flex-shrink-0 px-5 py-3 text-xs rounded-t-lg space-x-2 ${activeTab === 2 && ` border-x border-t dark:border-gray-400`}  `} onClick={() => handleActiveTab(2)} >
                        <FaRegFile />
                        <span>Mass Delete Builder</span>
                    </div>

                </div>

                <div className={"w-full p-2"}>
                    {activeTab === 1 ? <NewMassDeleteRequest /> :<NewMassDeleteBuilder />}
                </div>



            </div>
        </>
    );
}

export default  TabMassDelete;

