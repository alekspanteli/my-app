"use client";

import { useEffect, useState } from "react";
import HouseRow from "./house-row";
import AddButton from "./add-button";

export type House = {
  id: number;
  name: string;
  address: string;
  price: number;
};

export default function HouseList() {
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("/api/houses");
      const houses = await response.json();
      setHouses(houses);
    };
    fetchHouses();
  }, []);

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
