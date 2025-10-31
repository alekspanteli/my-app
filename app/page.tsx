import Banner from "./components/banner";
import BannerChildren from "./components/banner-children";

const myvariable = "Test variable";

export default function Home() {
  return (
    <div className="container">
      <Banner headerText="Banner goes here"/>
      <BannerChildren>
        <h1>Banner with children</h1>
      </BannerChildren>
      {myvariable}
    </div>
  );
}
