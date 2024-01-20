import React from "react";
import StatCardBig from "./StatCardBig";

const GeneralStats = props => {
    const { data } = props;
    const players = [];

    let earnings = 0;

    data.forEach(element => {
        earnings += Number(Number(element.price).toFixed(2));
        players.push(element.player);
    });
    console.log(earnings);

    const playersUnique = [...new Set(players)];

    return (
        <div className="flex flex-row gap-5">
            <StatCardBig text="Zarobiono" value={earnings.toFixed(2) + "zł"} />
            <StatCardBig text="Ilość transakcji" value={data.length} />
            <StatCardBig
                text="Obsłużonych graczy"
                value={playersUnique.length}
            />
        </div>
    );
};

export default GeneralStats;
