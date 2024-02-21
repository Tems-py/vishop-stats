import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const ProductsChart = props => {
    const { data } = props;

    let chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: "Zakupionych produktów",
                data: Object.values(data),
                fill: false,
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(153, 102, 255)",
                    "rgb(255, 159, 64)",
                    "rgb(25, 59, 132)",
                    "rgb(254, 162, 235)",
                    "rgb(255, 205, 86)"
                ],
                borderColor: "rgba(255, 99, 132, 0.3)"
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
                text: "Wykres ilości zakupionych produktów"
            }
        },
        spacing: 10,
        cutout: "30%"
        // heitht: "100%"
    };

    return (
        <div className="bg-violet-400 p-3 w-1/2 rounded-sm">
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default ProductsChart;
