import React from "react";
import StatCardBig from "./StatCardBig";
import { useState } from "react";

const GeneralStats = props => {
    const { data } = props;
    const players = [];

    const { setCountVouchers, countvouchers } = props;

    function changeCountVouchers() {
        setCountVouchers(prev => !prev);
    }

    let earnings = 0;

    data.forEach(element => {
        earnings += Number(Number(element.price).toFixed(2));
        players.push(element.player);
    });
    console.log(earnings);

    const playersUnique = [...new Set(players)];

    let voucherEarned = 0;
    data.forEach(element => {
        if (element.provider === "voucher" && element.product !== null) {
            props.products.forEach(product => {
                if (product.id === element.product) {
                    voucherEarned += Number(Number(product.main_price).toFixed(2) * element.quantity);
                }
            });
        }
    });

    let calcData = earnings;
    if (countvouchers === true) {
        calcData += voucherEarned;
    }

    const countingVouchers = () => {
        if (countvouchers === true) {
            return "Wyłącz liczenie voucherów";
        } else {
            return "Włącz liczenie voucherów";
        }
    };

    return (
        <div className="flex flex-row gap-5 flex-wrap">
            <StatCardBig
                text="Zarobiono"
                value={earnings.toFixed(2) + "zł"}
                bottom={voucherEarned.toFixed(2) + "zł z voucherów"}
            />
            <StatCardBig
                text="Ilość transakcji"
                value={data.length}
                bottom={(calcData / data.length).toFixed(2) + " zł/transakcja"}
            />
            <StatCardBig
                text="Obsłużonych graczy"
                value={playersUnique.length}
                bottom={(calcData / playersUnique.length).toFixed(2) + " zł/gracz"}
            />
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl text-wrap w-60 h-60 px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={changeCountVouchers}
            >
                {countingVouchers()}
            </button>
        </div>
    );
};

export default GeneralStats;
