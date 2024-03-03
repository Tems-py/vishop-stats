import React from "react";

const InputToken = props => {
    function handleSubmit(event) {
        event.preventDefault();
        if (event.target.elements.token.value === "") {
            alert(`Niepoprawny token`);
            window.location.reload();
            return;
        }

        props.setToken(event.target.elements.token.value);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-max h-max bg-violet-500 p-5 rounded-md shadow-[300px] text-black flex flex-col justify-center items-center gap-3"
        >
            <input
                type="text"
                placeholder="Wklej token vishop"
                className="bg-violet-400 p-1.5 rounded-md text-black placeholder:text-black"
                name="token"
            />
            <input
                type="submit"
                value="Potwierdź"
                className="bg-violet-400 p-1.5 rounded-md font-bold hover:bg-violet-300 "
            />
        </form>
    );
};

export default InputToken;
