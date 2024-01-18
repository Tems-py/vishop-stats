import { useState } from "react";
import InputToken from "./InputToken";
import axios from "axios";
import Stats from "./stats/Stats";
import "./App.css";

function App() {
    const [token, setToken] = useState(null);
    const [data, setData] = useState([]);

    const submitToken = token => {
        setToken(token);
        fetchData();
    };

    function fetchData() {
        let count = 20;
        let dataFetched = 0;
        let results = [];

        const fetchPage = () => {
            axios
                .get(
                    "https://dev123.vishop.pl/panel/shops/23/payments_history/",
                    {
                        params: {
                            page: "2",
                            search: "",
                            ordering: "-created_at",
                            exclude_status: "waiting",
                            server: ""
                        },
                        headers: {
                            Authorization:
                                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IjkyNzUyODA1MDI0NDA2MzI1MyIsImV4cCI6MTcwNTY0MTE0OH0.LGGKlPLH4r1_wE7-1ccwqoiuUK3jILR-HpUGhQK0a0s"
                        }
                    }
                )
                .then(response => {
                    count = response.data.count;
                    dataFetched += response.data.results.length;
                    results = [...results, ...response.data.results];
                    if (dataFetched < count) {
                        fetchPage();
                    } else {
                        setData(results);
                        console.log(results);
                    }
                });
        };
        fetchPage();
    }

    return (
        <div className="bg-slate-800 w-screen h-screen flex items-center justify-center">
            {token === null && <InputToken setToken={submitToken} />}
            {token !== null && <Stats data={data} />}
        </div>
    );
}

export default App;
