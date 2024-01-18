import React from "react";
import StatCardBig from "./StatCardBig";

const GeneralStats = () => {
    return (
        <div className="flex flex-row gap-5">
            <StatCardBig text="Zarobiono" value="999zł" />
            <StatCardBig text="Ilość transakcji" value="999" />
            <StatCardBig text="Obłużonych graczy" value="999" />
        </div>
    );
};

export default GeneralStats;
