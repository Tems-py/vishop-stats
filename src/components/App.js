import { useState } from "react";
import InputToken from "./InputToken";
import axios from "axios";
import Stats from "./stats/Stats";
import ChooseShop from "./ChooseShop";
import "./App.css";

function App() {
    const [token, setToken] = useState(null);
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const [shops, setShops] = useState(null);
    const [shop, setShop] = useState(null);

    const submitToken = token => {
        setToken(token);

        setTimeout(() => {
            fetchShops(token);
        }, 300);
        // setTimeout(() => {
        //     fetchData(token);
        // }, 300);
    };

    function fetchShops(token) {
        axios
            .get("https://dev123.vishop.pl/panel/shops/", {
                headers: {
                    Authorization: token
                }
            })
            .then(response => {
                setShops(response.data);
                console.log(response.data);
            });
    }

    function setshop(event) {
        console.log(event.target.attributes.shopid.value);
        setShop(event.target.attributes.shopid.value);
        fetchData(token, event.target.attributes.shopid.value);
    }

    function fetchData(token, shop) {
        let count = 20;
        let page = 1;
        let dataFetched = 0;
        let results = [];
        console.log(`fetching data from ${shop} using ${token}}`);
        const fetchPage = () => {
            axios
                .get(`https://dev123.vishop.pl/panel/shops/${shop}/payments_history/`, {
                    params: {
                        page: page.toString(),
                        search: "",
                        ordering: "-created_at",
                        exclude_status: "waiting",
                        server: ""
                    },
                    headers: {
                        Authorization: token
                    }
                })
                .then(response => {
                    count = response.data.count;
                    dataFetched += response.data.results.length;
                    page += 1;
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

        axios
            .get(`https://dev123.vishop.pl/panel/shops/${shop}/products/`, {
                headers: {
                    Authorization: token
                }
            })
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            });
    }

    return (
        <div className="bg-violet-300 min-w-screen min-h-screen flex items-center justify-center">
            {token === null && <InputToken setToken={submitToken} />}
            {token !== null && shops !== null && shop == null && <ChooseShop shops={shops} setshop={setshop} />}
            {shop !== null && data.length !== 0 && <Stats data={data} products={products} />}
        </div>
    );
}

export default App;
