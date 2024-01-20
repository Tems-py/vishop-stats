import React from "react";
import { useState } from "react";

const ChooseShop = props => {
    return (
        <div className="flex flex-row gap-3 flex-wrap p-4">
            {props.shops.map(shop => (
                <div
                    key={shop.id}
                    shopid={shop.id}
                    className="bg-slate-300 p-3 rounded-md hover:bg-slate-400"
                    onClick={props.setshop}
                >
                    {shop.name}
                </div>
            ))}
        </div>
    );
};

export default ChooseShop;
