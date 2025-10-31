import Banner from "./components/banner";

export default function Home() {
  return (
    <div className="container">
      <Banner headerText="Banner goes here"/>
      <Banner headerText="Banner goes here 2"/>
      <Banner headerText="Banner goes here 3"/>
    </div>
  );
}
