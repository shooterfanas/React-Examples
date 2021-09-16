import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
  currency,
}) => {
  const whatCurrency = () => {
    if (currency == "try") {
      return "₺";
    } else if (currency == "usd") {
      return "$";
    } else if (currency == "jpy") {
      return "¥";
    }
  };
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="coin" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">
            {price}
            {whatCurrency()}
          </p>
          <p className="coin-volume">
            {volume.toLocaleString()}
            {whatCurrency()}
          </p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Market Hacmi: {marketcap.toLocaleString()}
            {whatCurrency()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
