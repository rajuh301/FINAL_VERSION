import banner1 from "../../../public/Banner1.png";
import Banner1Footer from "./Banner1Footer";
import $SMILE from "../../../public/$SMILE (1).png";

const Banner1 = () => {
  return (
    <div className="absolute top-52  ">
      <div className="relative w-[1920px] h-auto ">
        <div className="w-[1984px] h-[1438px] mx">
          <img className="" src={banner1} alt="" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[922px] h-[196]">
            <p className="md:text-9xl lg:text-9xl text-3xl font-bold text-stone-50 text-pretty justify-center mx-auto flex">
              <img src={$SMILE} alt="" />
            </p>
            <button className="bg-[#860488] text-white w-[228px] h-[68px] text-[28px] px-[32px] py-[10px] font-bold rounded-lg justify-center mx-auto flex">
              BUY $SMILE
            </button>
          </div>
        </div>
        {/* --------------------- Banner Footer----------------- */}
        <Banner1Footer />
        {/* --------------------- Banner Footer----------------- */}
      </div>
    </div>
  );
};

export default Banner1;
