"use client";

import { useState } from "react";
import HouseRow from "./house-row";

export type House = {
  id: number;
  name: string;
  address: string;
  price: number;
};

const housesArray: House[] = [
  { id: 1, name: "House 1", address: "123 Main St", price: 100000 },
  { id: 2, name: "House 2", address: "456 Main St", price: 200000 },
];

export default function HouseList() {
  const [houses, setHouses] = useState<House[]>(housesArray);

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        name: "House 3",
        address: "777 Main St",
        price: 65600000,
      },
    ]);
  };
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
          {houses.map((houses) => (
            <HouseRow key={houses.id} {...houses} />
          ))}
        </tbody>
      </table>
      <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer" onClick={addHouse}>
        Add House
      </button>
    </>
  );
}
