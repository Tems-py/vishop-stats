import React from "react";
import GeneralStats from "./GeneralStats";
import ProductsBought from "./ProductsBought";
import WholeEarningsChart from "../charts/WholeEarningsChart";
import TopPlayers from "../charts/TopPlayers";
import { useState } from "react";

const Stats = props => {
    const { data } = props;
    const [countvouchers, setCountVouchers] = useState(false);

    return (
        <div className="w-[95%] h-[95%] bg-slate-500 p-3 rounded-md mb-5 flex flex-col gap-3 mt-3">
            <GeneralStats
                data={data}
                products={props.products}
                countvouchers={countvouchers}
                setCountVouchers={setCountVouchers}
            />
            <WholeEarningsChart data={data} products={props.products} countvouchers={countvouchers} />
            <TopPlayers data={data} products={props.products} countvouchers={countvouchers} />
            <ProductsBought data={data} />
        </div>
    );
};

export default Stats;
