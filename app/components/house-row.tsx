import { House } from "./house-list";

export default function HouseRow({name, address, price}: Omit<House, 'id'>) {
  return (
    <tr>
      <td>{name}</td>
      <td>{address}</td>
      <td>{price}</td>
    </tr>
  );
}
