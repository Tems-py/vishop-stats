import React from "react";
import StatCardBig from "./StatCardBig";

const GeneralStats = props => {
    const { data } = props;

    let earnings = 0;
    data.forEach(element => {
        earnings += Number(Number(element.price).toFixed(2));
    });
    console.log(earnings);
    return (
        <div className="flex flex-row gap-5">
            <StatCardBig text="Zarobiono" value={earnings.toFixed(2) + "zł"} />
            <StatCardBig text="Ilość transakcji" value="999" />
            <StatCardBig text="Obłużonych graczy" value="999" />
        </div>
    );
};

export default GeneralStats;
