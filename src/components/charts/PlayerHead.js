import React from "react";

const PlayerHead = props => {
    const { name, spent } = props;

    return (
        // JSX markup goes here
        <div className="flex flex-col p-2 bg-violet-400 text-center rounded-md flex-grow max-w-64">
            <img src={"https://minotar.net/helm/" + name} />
            <h2>{name}</h2>
            <h3 className="font-bold">{spent}zł</h3>
        </div>
    );
};

export default PlayerHead;
