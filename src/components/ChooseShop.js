import React from "react";

const ChooseShop = props => {
    return (
        <div className="flex flex-row gap-3 flex-wrap p-4">
            {props.shops.map(shop => (
                <div
                    key={shop.id}
                    shopid={shop.id}
                    className="bg-violet-600 p-3 rounded-md hover:bg-violet-400 text-lg font-bold cursor-pointer text-violet-50"
                    onClick={props.setshop}
                >
                    {shop.name}
                </div>
            ))}
        </div>
    );
};

export default ChooseShop;
