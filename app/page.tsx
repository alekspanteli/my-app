import Banner from "./components/banner";
import BannerChildren from "./components/banner-children";
import HouseList from "./components/house-list";

const myvariable = "Test variable";

export default function Home() {
  return (
    <div className="container">
      <Banner headerText="Banner goes here"/>
      <hr />
      <BannerChildren>
        <h1>Banner with children</h1>
      </BannerChildren>
      <hr />
      {myvariable}
      <hr />
      <HouseList />
    </div>
  );
}
