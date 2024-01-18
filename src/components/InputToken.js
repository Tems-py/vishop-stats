import React from "react";
import { useState } from "react";

const InputToken = props => {
    const [token, setToken] = useState(null);
    function handleChange(event) {
        setToken(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.setToken(token);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-max h-max bg-slate-500 p-5 rounded-md shadow-2xl text-black flex flex-col justify-center items-center gap-3"
        >
            <input
                type="text"
                placeholder="Wklej token vishop"
                onChange={handleChange}
                value={token}
                className="bg-stone-400 p-1.5 rounded-md text-black placeholder:text-black"
            />
            <input
                type="submit"
                value="Potwierdź"
                className="bg-stone-400 p-1.5 rounded-md font-bold hover:bg-stone-500"
            />
        </form>
    );
};

export default InputToken;
