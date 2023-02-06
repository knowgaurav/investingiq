import React from "react";
import ListCard from "./ListCard";

const data = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    price: "₹1,894,959.27",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    price: "₹1,894,959.27",
  },
  {
    name: "Tether",
    symbol: "USDT",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
    price: "₹1,894,959.27",
  },
  {
    name: "BNB",
    symbol: "BNB",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    price: "₹1,894,959.27",
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
    price: "1,894,929.66",
  },
];

const ListView = ({buttonTitle,icon}) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div className="flex items-center gap-10 border-t">
            <div className="text-gray-500">{index + 1}.</div>
            <ListCard item={item} buttonTitle={buttonTitle} icon={icon} />
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
