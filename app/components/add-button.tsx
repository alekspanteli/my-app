import { PropsWithChildren } from "react";

export default function AddButton({
  handleAddHouse,
  children,
}: PropsWithChildren<{
  handleAddHouse: () => void;
}>) {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
      onClick={handleAddHouse}
    >
      {children}
    </button>
  );
}
 