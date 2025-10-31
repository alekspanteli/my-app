"use client";

import { useState } from "react";
import Banner from "./components/banner";
import BannerChildren from "./components/banner-children";
import HouseList, { type House } from "./components/house-list";
import HouseDetail from "./components/house";

const myvariable = "Test variable";

export default function Home() {
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  return (
    <div className="container">
      <Banner headerText="Banner goes here" />
      <hr />
      <BannerChildren>
        <h1>Banner with children</h1>
      </BannerChildren>
      <hr />
      {myvariable}
      <hr />
      {selectedHouse ? (
        <HouseDetail house={selectedHouse} onBack={() => setSelectedHouse(null)} />
      ) : (
        <HouseList selectedHouse={setSelectedHouse} />
      )}
    </div>
  );
}
