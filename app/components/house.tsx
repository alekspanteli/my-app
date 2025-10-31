import type { House } from "./house-list";

type HouseProps = {
  house: House;
  onBack: () => void;
}

export default function House({ house, onBack }: HouseProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-2xl font-bold mb-2">Name: {house.name}</h1>
      <p className="mb-2">Address: {house.address}</p>
      <p className="text-lg font-semibold">Price: ${house.price.toLocaleString()}</p>
      <button 
        onClick={onBack}
        className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Back to List
      </button>
    </div>
  );
}
