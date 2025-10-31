import { House } from "./house-list";

type HouseRowProps = {
  house: House;
  selectedHouse: (house: House) => void;
}

export default function HouseRow({ house, selectedHouse }: HouseRowProps) {
  return (
    <tr onClick={() => selectedHouse(house)} className="cursor-pointer hover:bg-gray-100">
      <td>{house.name}</td>
      <td>{house.address}</td>
      {house.price && (
        <td
          className={`${house.price > 1000000 ? "text-green-500" : "text-red-500"}`}
        >
          {house.price}
        </td>
      )}
    </tr>
  );
}
