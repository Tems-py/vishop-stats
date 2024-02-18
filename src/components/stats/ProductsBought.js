import React from "react";
import ProductsChart from "../charts/ProductsChart";

const ProductsBought = props => {
    const { data } = props;
    const products = {};
    const productsData = {};

    const pieChartData = {};

    data.forEach(element => {
        let identifier = element.product;
        if (identifier === null) identifier = element.product_name;

        if (products[identifier] === undefined) {
            products[identifier] = element.quantity;
        } else {
            products[identifier] += element.quantity;
        }
        if (productsData[identifier] === undefined) {
            productsData[identifier] = element;
        }

        if (pieChartData[element.product_name] === undefined) {
            pieChartData[element.product_name] = element.quantity;
        } else {
            pieChartData[element.product_name] += element.quantity;
        }
    });

    return (
        <div className="flex flex-row gap-1">
            <div className="flex flex-col gap-1 overflow-auto h-max-[1000px] flex-grow">
                {Object.keys(products)
                    .sort((a, b) => products[b] - products[a])
                    .map((key, i) => (
                        <div key={i} className="bg-violet-400 rounded-sm p-2">
                            {products[key]} x {productsData[key].product_name}{" "}
                            {productsData[key].product && (
                                <span className="text-opacity-50">({productsData[key].product})</span>
                            )}
                        </div>
                    ))}
            </div>
            <ProductsChart data={pieChartData} />
        </div>
    );
};

export default ProductsBought;
