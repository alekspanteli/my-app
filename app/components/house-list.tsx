"use client";

import { use, useState } from "react";
import HouseRow from "./house-row";
import AddButton from "./add-button";

export type House = {
  id: number;
  name: string;
  address: string;
  price: number;
};

// Mock fetch - function that returns a new promise each time to ensure Suspense works on refresh
function fetchHouses(): Promise<House[]> {
  return new Promise<House[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "House 1", address: "123 Main St", price: 100000 },
        { id: 2, name: "House 2", address: "456 Main St", price: 200000 },
      ]);
    }, 1000);
  });
}

export default function HouseList() {
  const houseResult = use(fetchHouses());
  const [houses, setHouses] = useState<House[]>(houseResult);

  function handleAddHouse() {
    setHouses([
      ...houses,
      {
        id: 3,
        name: "House 3",
        address: "777 Main St",
        price: 65600000,
      },
    ]);
  }

  return (
    <>
      <h2>House List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <HouseRow key={house.id} {...house} />
          ))}
        </tbody>
      </table>
      <AddButton handleAddHouse={handleAddHouse}>Add House</AddButton>
    </>
  );
}
