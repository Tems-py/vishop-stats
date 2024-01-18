import React from "react";
import GeneralStats from "./GeneralStats";

const Stats = props => {
    const { data } = props;

    let earnings = 0;
    data.forEach(element => {
        earnings += Number(element.price);
    });

    return (
        <div className="w-[95%] h-[95%] bg-slate-500  p-3 rounded-md ">
            <GeneralStats data={data} />
        </div>
    );
};

export default Stats;
