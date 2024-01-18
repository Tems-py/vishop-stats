import { useState } from "react";
import InputToken from "./InputToken";
import Stats from "./stats/Stats";
import "./App.css";

function App() {
    const [token, setToken] = useState(null);

    return (
        <div className="bg-slate-800 w-screen h-screen flex items-center justify-center">
            {token === null && <InputToken setToken={setToken} />}
            {token !== null && <Stats token={token} />}
        </div>
    );
}

export default App;
