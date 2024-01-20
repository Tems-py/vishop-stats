import React from "react";

const ProductsBought = props => {
    const { data } = props;
    const products = {};
    const productsData = {};

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
    });

    console.log(products);
    console.log(productsData);

    return (
        <div className="flex flex-col gap-1 overflow-auto">
            {Object.keys(products)
                .sort((a, b) => products[b] - products[a])
                .map((key, i) => (
                    <div key={i} className="bg-slate-400 rounded-sm p-2">
                        {products[key]} x {productsData[key].product_name}{" "}
                        {productsData[key].product && (
                            <span className="text-opacity-50">
                                ({productsData[key].product})
                            </span>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default ProductsBought;
