import Image from "next/image";
const logo = "/globe.svg";

export default function Banner() {
  return (
    <header>
      <Image src={logo} alt="Logo" width={100} height={100} />
      <h1 className="text-2xl font-bold">Banner goes here</h1>
    </header>
  );
}
