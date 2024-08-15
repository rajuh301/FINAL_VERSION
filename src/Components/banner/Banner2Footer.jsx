import Dex from '../../../public/CompanyLogo/7.png'
const Banner2Footer = () => {
  return (
    <div className="bg-[#278143] flex justify-between h-[193px] items-center">

      <div className="w-[670px] h-[83px] mx-[164px] flex justify-between relative items-center">

        <input type="text" className="bg-white  border-black border-b-8 border shadow rounded-2xl w-[670px] h-[83px] text-[24px] " placeholder="0xE1aBD004...01d094FAa180" />

        <button className="absolute w-[166px] h-[65px] bg-[#860488] text-white rounded-2xl text-[24px] right-[10px]  border-black border-b-4 border-l-4">COPY</button>

        <p className='absolute bg-white rounded-2xl bottom-16 mx-2 text-[16px] py-1 font-semibold'>CONTRACT ADDRESS</p>
      </div>

      {/* ---------- Dex tools------------- */}

      <div className=" flex bg-[#35974C] rounded-2xl border-black border-b-8 border">
        <div className='flex items-center w-[347px] h-[83px] px-[72.11px] gap-[1.52px]'>
          <img src={Dex} alt="" />
          <button>
            <p className='text-[36px] text-white'>DEX Tools</p>
          </button>
        </div>
      </div>


      <div className='flex items-center w-[348px] h-[83px] px-[72.11px] gap-[1.52px] rounded-2xl border-black border-b-8 border bg-[#860488] mr-[165px]'>
        <button>
          <p className='text-[36px] text-white'>Buy $SMILE</p>
        </button>
      </div>



      {/* ---------- Dex tools------------- */}

    </div>
  );
};

export default Banner2Footer;
