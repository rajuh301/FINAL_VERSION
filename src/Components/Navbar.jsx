import logo from "../../public/logo.png";
import logoText from "../../public/$SMILE.png";
const Navbar = () => {
  return (
    <div>
      {/* -------------- Top FINAL VERSION-------------------- */}
      <div className="bg-[#278143] text-center w-[1920px] h-[88px] mx-auto">
        <p className="text-white font-bold text-[44px]">FINAL VERSION</p>
      </div>

      {/* -------------- Top FINAL VERSION-------------------- */}
      <div className="relative w-[1920px] h-[97px]">
        <div className="bg-gradient-to-r from-[rgb(69,160,217)] to-[#3F9AAD]  mx-auto mt-10 w-[1920px] h-[97px]  absolute "></div>
      </div>

      {/* ------------------- Nav link-------------------- */}
      <div className="flex justify-between border-2 border-black border-b-8 border-r-8 bg-[#278143] text-white items-center rounded-2xl relative w-[1639px] h-[96px] mx-auto mt-2 px-20">
        <div className="flex gap-5 items-center w-[145px] h-[30px]">
          <img className="w-16" src={logo} alt="" />
          <img src={logoText} alt="" />
        </div>
        <div className="flex space-x-4 w-[498px] h-[23.34] ">
          <a href="#" className="text-white hover:underline hover:font-bold">
            ABOUT
          </a>
          <a href="#" className="text-white hover:underline hover:font-bold">
            TOKENOMICS
          </a>
          <a href="#" className="text-white hover:underline hover:font-bold">
            ROADMAP
          </a>
          <a href="#" className="text-white hover:underline hover:font-bold">
            CONTACT
          </a>
        </div>

        <div className="w-[210px] h-[60px]">
          <button className="bg-[#860488] text-white px-3 py-2 md:px-5 md:py-3 lg:px-5 lg:py-4 text-sm md:text-[16px] lg:text-[18px] rounded-lg md:rounded-xl border-white border-b-2 border-r-2 hover:bg-[#750478] ">
            Buy Launchpad
          </button>
        </div>
      </div>
      {/* ------------------- Nav link-------------------- */}
    </div>
  );
};

export default Navbar;
