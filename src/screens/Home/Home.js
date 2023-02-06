import React from "react";
import Header from "./components/Header";
import Holdings from "./components/Holdings";
import StatsCard from "./components/StatsCard";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-10 flex gap-5">
        <div className="grow flex flex-col gap-5">
          <StatsCard title="Loses" value={12} />
          <StatsCard title="Wins" value={95} />
          <StatsCard title="Transactions" value={340} />
        </div>
        <Holdings />
      </div>
    </div>
  );
};

export default Home;
