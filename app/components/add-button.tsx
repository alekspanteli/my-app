type AddButtonProps = {
  handleAddHouse: () => void;
  children: React.ReactNode;
};

export default function AddButton({
  handleAddHouse,
  children,
}: AddButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
      onClick={handleAddHouse}
    >
      {children}
    </button>
  );
}
