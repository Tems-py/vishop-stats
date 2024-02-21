import React from "react";

import PlayerHead from "./PlayerHead";

const TopPlayers = props => {
    const { countvouchers } = props;
    let constPlayers = {};

    props.data.forEach(element => {
        if (constPlayers[element.player] === undefined) {
            if (element.provider === "voucher") {
                if (countvouchers === true) {
                    props.products.forEach(product => {
                        if (product.id === element.product) {
                            if (product.slider === true) {
                                constPlayers[element.player] = Number(
                                    Number(product.main_price).toFixed(2) * element.quantity
                                );
                            } else {
                                constPlayers[element.player] = Number(Number(product.main_price).toFixed(2));
                            }
                        }
                    });
                }
            } else {
                constPlayers[element.player] = Number(element.price);
            }
        } else {
            if (element.provider === "voucher") {
                if (countvouchers === true) {
                    props.products.forEach(product => {
                        if (product.id === element.product) {
                            if (product.slider === true) {
                                constPlayers[element.player] += Number(
                                    Number(product.main_price).toFixed(2) * element.quantity
                                );
                            } else {
                                constPlayers[element.player] += Number(Number(product.main_price).toFixed(2));
                            }
                        }
                    });
                }
            } else {
                constPlayers[element.player] += Number(element.price);
            }
        }
    });

    return (
        // JSX code goes here
        <div>
            <div className="flex flex-row gap-1 overflow-auto">
                {Object.keys(constPlayers)
                    .sort((a, b) => constPlayers[b] - constPlayers[a])
                    .slice(0, 10)
                    .map((key, i) => (
                        <PlayerHead key={i} name={key} spent={constPlayers[key].toFixed(2)} />
                    ))}
            </div>
        </div>
    );
};

export default TopPlayers;
