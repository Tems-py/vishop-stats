import React from "react";
import GeneralStats from "./GeneralStats";
import ProductsBought from "./ProductsBought";

const Stats = props => {
    const { data } = props;

    return (
        <div className="w-[95%] h-[95%] bg-slate-500 p-3 rounded-md mb-5 flex flex-col gap-3">
            <GeneralStats data={data} />
            <ProductsBought data={data} />
        </div>
    );
};

export default Stats;
