import React, { useState } from "react";
import GridView from "./components/GridView";
import Header from "./components/Header";
import ListView from "./components/ListView";

const Stocks = () => {
  const [listType, setListType] = useState("grid");

  return (
    <div>
      <Header listType={listType} setListType={setListType} />
      <div className="mt-20">
        {listType === "grid" ? <GridView /> : <ListView />}
      </div>
    </div>
  );
};

export default Stocks;
