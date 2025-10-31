import Image from "next/image";
const logo = "/globe.svg";

export default function Banner({ headerText }: { headerText: string }) {
  return (
    <header>
      <Image src={logo} alt="Logo" width={100} height={100} />
      <h1 className="text-2xl font-bold">{headerText}</h1>
    </header>
  );
}
