import img01 from "../../../public/CompanyLogo/01.png";
import img02 from "../../../public/CompanyLogo/2.png";
import img03 from "../../../public/CompanyLogo/3.png";
import img04 from "../../../public/CompanyLogo/4.png";
import img05 from "../../../public/CompanyLogo/5.png";
import img06 from "../../../public/CompanyLogo/6.png";

const Banner1Footer = () => {
  return (
    <div className="bg-[#278143] w-[1920px] p-5 h-[180px] mx-auto ">

      <div className="flex  gap-4 items-center justify-between my-auto py-[60px] px-[160px]">
        {/* ------------------- Company buttons ------------- */}
        <button className="flex justify-center w-[218.15px] h-[49.96px]">
          <img className="w-24 md:w-28 lg:w-32" src={img01} alt="click Icon" />
        </button>

        <button className="flex justify-center w-[206.83px] h-[60px]">
          <img className="w-24 md:w-28 lg:w-32" src={img02} alt="" />
        </button>

        <button className="flex justify-center w-[116.68px] h-[35px]">
          <img className="w-24 md:w-28 lg:w-32" src={img03} alt="" />
        </button>

        <button className="flex justify-center w-[173.08px] h-[50px]">
          <img className="w-24 md:w-28 lg:w-32" src={img04} alt="" />
        </button>

        <button className="flex justify-center w-[165.16px] h-[50px]">
          <img className="w-24 md:w-28 lg:w-32" src={img05} alt="" />
        </button>

        <button className="flex justify-center w-[209.49px] h-[60px]">
          <img className="w-24 md:w-28 lg:w-32" src={img06} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Banner1Footer;
