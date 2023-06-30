import React, {useState} from "react";
import TabMassDelete from "./TabMassDelete";

const NewMassDelete = () => {
    const [tab, setTab] = useState(1);

    return (
        <>
            <div className="divide-y divide-gray-300 p-8">

                <TabMassDelete />

            </div>
        </>
    );
}

export default NewMassDelete;
