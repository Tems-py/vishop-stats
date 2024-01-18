import React from "react";
import GeneralStats from "./GeneralStats";

const Stats = props => {
    console.log(props.data);
    return (
        <div className="w-[95%] h-[95%] bg-slate-500  p-3 rounded-md ">
            <GeneralStats />
        </div>
    );
};

export default Stats;
