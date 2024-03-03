import React from "react";
// eslint-disable-next-line
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const WholeEarningsChart = props => {
    const { data, countvouchers } = props;

    let earningsByDays = {};

    console.log(props.products);

    data.forEach(element => {
        let date = new Date(element.created_at);
        let formattedDate = date.toISOString().split("T")[0];
        if (earningsByDays[formattedDate] === undefined) {
            if (element.provider === "voucher") {
                if (countvouchers === true) {
                    props.products.forEach(product => {
                        if (product.id === element.product) {
                            // console.log(product.slider === true);
                            if (product.slider === true) {
                                earningsByDays[formattedDate] = Number(
                                    Number(product.main_price).toFixed(2) * element.quantity
                                );
                            } else {
                                earningsByDays[formattedDate] = Number(Number(product.main_price).toFixed(2));
                            }
                        }
                    });
                }
            } else {
                earningsByDays[formattedDate] = Number(element.price);
            }
        } else {
            if (element.provider === "voucher") {
                if (countvouchers === true) {
                    props.products.forEach(product => {
                        if (product.id === element.product) {
                            if (product.slider === true) {
                                earningsByDays[formattedDate] += Number(
                                    Number(product.main_price).toFixed(2) * element.quantity
                                );
                            } else {
                                earningsByDays[formattedDate] += Number(Number(product.main_price).toFixed(2));
                            }
                        }
                    });
                }
            } else {
                earningsByDays[formattedDate] += Number(element.price);
            }
        }
    });

    console.log(earningsByDays);
    let start = new Date(Object.keys(earningsByDays)[0]);
    let end = new Date(Object.keys(earningsByDays)[Object.keys(earningsByDays).length - 1]);

    let endResult = {};
    for (let d = new Date(end); d <= start; d.setDate(d.getDate() + 1)) {
        endResult[d.toISOString().split("T")[0]] = 0;
    }
    earningsByDays = { ...endResult, ...earningsByDays };

    // sort earningsByDays by date
    let ordered = {};
    Object.keys(earningsByDays)
        .sort()
        .forEach(function (key) {
            ordered[key] = earningsByDays[key];
        });
    earningsByDays = ordered;

    let chartData = {
        labels: Object.keys(earningsByDays),
        datasets: [
            {
                label: "Zarobki",
                data: Object.values(earningsByDays),
                fill: false,
                backgroundColor: "rgb(91, 33, 182)",
                borderColor: "rgba(91, 33, 182, 0.45)"
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: "Wykres zarobków w czasie"
            }
        }
    };

    return (
        <div className="bg-violet-400 p-3">
            <Line data={chartData} options={options} />
        </div>
    );
};

export default WholeEarningsChart;
