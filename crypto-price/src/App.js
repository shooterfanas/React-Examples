import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Coin from "./Coin";
import debounce from "lodash.debounce";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState(["try"]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currency]);

  const debouncedSave = useCallback(
    debounce((changeValue) => setSearch(changeValue), 3000),
    []
  );

  const handleChange = (e) => {
    const { value: changeValue } = e.target;
    setSearch(changeValue);
    debouncedSave(changeValue);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Bir Kripto Para Ara</h1>
        <div className="btns">
          <button
            className="coin-currency orange"
            onClick={() => setCurrency("usd")}
          >
            USD
          </button>
          <button
            className="coin-currency dblue"
            onClick={() => setCurrency("try")}
          >
            TRY
          </button>
          <button
            className="coin-currency dred"
            onClick={() => setCurrency("jpy")}
          >
            JPY
          </button>
        </div>

        <form>
          <input
            type="text"
            onChange={handleChange}
            className="coin-input"
            placeholder="Bitcoin..."
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            marketcap={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            currency={currency}
          />
        );
      })}
    </div>
  );
}

export default App;
