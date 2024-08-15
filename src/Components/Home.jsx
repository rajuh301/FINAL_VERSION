import Banner1 from "./banner/Banner1";
import Banner2 from "./banner/Banner2";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-slate-400">
      <div className="absolute  ">
        <Banner1 />
        <Navbar />
      <Banner2 />

      </div>
    </div>
  );
};

export default Home;
