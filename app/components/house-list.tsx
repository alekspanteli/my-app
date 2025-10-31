import HouseRow from "./house-row";

export type House = {
  id: number;
  name: string;
  address: string;
  price: number;
};

const houses: House[] = [
  { id: 1, name: "House 1", address: "123 Main St", price: 100000 },
  { id: 2, name: "House 2", address: "456 Main St", price: 200000 },
];

export default function HouseList() {
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
    </>
  );
}
