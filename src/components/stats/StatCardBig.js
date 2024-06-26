import React from "react";

const StatCardBig = props => {
    return (
        <div>
            <div className="w-60 h-60 bg-slate-600 p-1 rounded-xl text-center flex flex-col items-center justify-center">
                <h3 className="font-bold text-gray-400 text-xl">{props.text}</h3>
                <h1 className="font-bold text-white text-4xl h-min">{props.value}</h1>
                <h1 className="font-bold text-white text-opacity-50 text">{props.bottom}</h1>
            </div>
        </div>
    );
};

export default StatCardBig;
