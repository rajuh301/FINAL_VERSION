/* eslint-disable react/no-unescaped-entities */
import bannerImg from "../../../public/banner2.png";
import Banner2Footer from "./Banner2Footer";
import aboutUs from "../../../public/About Us.png";
import Banner3 from "./Banner3";

const Banner2 = () => {
  return (
    <div className="w-[1920px] h-auto relative top-[1530px] bg-[#79DD83]">

      <div className="flex gap-x-[63px] justify-between px-[141px] py-[169px] pb-[160px]">
        <div className="w-[688px] h-[779px]">
          <img className="w-full h-auto rounded-xl" src={bannerImg} alt="" />
        </div>

        <p className="w-[777px] h-[617px] text-justify">
          <span>
            <img src={aboutUs} alt="" />
          </span>
          <br />
          <br />
          <span className="text-[24px] text-black font-semibold">
            Hehe Cat's Droppin' Bombs This Year, Forget the Doge Days! Yo, doge
            and grumpy cats are yesterday's news! 2024 belongs to the $SMILE, the
            king of purrfectly dank memes. This ain't no basic crypto scheme, this
            is the ultimate meme lord currency, smoother than a cat on a buttered
            countertop. Every Hehe Coin transaction unleashes a hilarious
            hurricane, fuelin' our "Make 'Em Wheeze" campaign.
          </span>
          <br />
          <br />
          <span className="text-[24px] text-black font-semibold">
            We ain't talkin' snoozy suits on billboards, it's all about epic
            Hehe Cat blitzes across the 'gram and the Tok. Facts? Nah, we deal
            in side-splitting memes where laughter's the only currency.
            Investin' in Hehe Coin is easier than teachin' your grandpa the
            floss dance. No hidden fees, just pure, unadulterated funny business
            (the good kind, duh).
          </span>
        </p>
      </div>
      {/* -----------Footer--------------- */}
      <Banner2Footer />
      {/* -----------Footer--------------- */}
      {/* --------------- Banner -3 -------------------- */}
      <Banner3 />
      {/* --------------- Banner -3 -------------------- */}
    </div>
  );
};

export default Banner2;
