import React, { useState } from "react";
import {FaFileImport, FaRegFile} from "react-icons/fa";
import QAState from "./QaState";
import History from "./History";

const TabMassDelete = () =>  {
    const [activeTab, setActiveTab] = useState(1);

    const handleActiveTab = (e:any) => {
        setActiveTab(e);
    }

    return (
        <>
            <div className="flex flex-col flex-nowrap ">

                <div className="flex flex-row border-b">

                    <div className={`flex items-center flex-shrink-0 px-5 py-3  border-b text-xs rounded-t-lg space-x-2 ${activeTab === 1 && ` border-x border-t dark:border-gray-400`}`} onClick={ () => handleActiveTab(1)}>
                        <FaFileImport />
                        <span>QA State</span>
                    </div>

                    <div className={`flex flex-row items-center flex-shrink-0 px-5 py-3 text-xs rounded-t-lg space-x-2 ${activeTab === 2 && ` border-x border-t dark:border-gray-400`}  `} onClick={() => handleActiveTab(2)} >
                        <FaRegFile />
                        <span>History</span>
                    </div>

                </div>

                <div className={"w-full p-2"}>
                    {activeTab === 1 ? <QAState /> :<History />}
                </div>

            </div>
        </>
    );
}

export default  TabMassDelete;

