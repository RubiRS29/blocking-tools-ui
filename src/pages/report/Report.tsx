import React, {useState} from "react";
import QAState from "./QaState";
import History from "./History";
import TabMassDelete from "./TabReport";

const data = [
    {
        label: "Dashboard",
        value: "dashboard",
        desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
        label: "Profile",
        value: "profile",
        desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    }
];

const Report = () => {
    const [tab, setTab] = useState(1);

    return (
        <>
            <div className="divide-y divide-gray-300 p-8">
                <TabMassDelete />
            </div>
        </>
    );
}

export default Report;
