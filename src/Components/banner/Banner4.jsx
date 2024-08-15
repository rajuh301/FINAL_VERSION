import banner4Img from '../../../public/banner5.png'
import text from '../../../public/09.png'
import logo2 from '../../../public/logo2.png'
import logo3 from '../../../public/logo3.png'
import logoOff from '../../../public/logoOff.png'
import logoOff2 from '../../../public/logoOff2.png'
import cartoon from '../../../public/last1.png'
import lastText from '../../../public/Text/last.png'
import lastImg from '../../../public/last2.png'
const Banner4 = () => {
    return (
        <div className='h-[1184px] relative'>
            <div>
                <img src={banner4Img} alt="" />
            </div>

            <div className=''>
                <div className='h-[699px] w-[1920px] bg-[#278143] rounded-t-3xl  absolute top-[787px]'>


                    <div >
                        <div className='mt-[320px] ml-[821.5px]'>
                            <img src={lastText} alt="" />
                        </div>

                        <div className=' flex mx-auto mt-[20px] text-center w-[910px] h-[126px]'>

                            <p className='text-white  text-[26px] '>$SMILE is back, motherfroggers. Emerging from Sesame Street, $SMILE has matured into a degen frog ready to dominate the Solana blockchain. However, $SMILE can't tolerate Pepe, his archenemy. </p>



                        </div>

                        {/* ------------- logo---------------- */}
                        <img className='absolute top-[220px] mx-[704px] w-[512px] h-[512px]' src={logoOff2} alt="" />
                        {/* ------------- logo---------------- */}

                        {/* ------------- buttons--------------- */}
                        <div className='flex justify-center gap-[20px]'>

                            <button className='bg-white rounded-2xl px-[16.56px] py-[20px] text-white text-[25px] border-black border-b-8 border mt-[32px]'>
                                <img className='w-[26px]' src={logo2} alt="" />
                            </button>
                            <button className='bg-white rounded-2xl px-[16.56px] py-[20px] text-white text-[25px] border-black border-b-8 border mt-[32px]'>
                                <img className='w-[26px]' src={logo3} alt="" />
                            </button>

                        </div>
                        {/* ------------- buttons--------------- */}
                        <div>

                        </div>

                    </div>

                </div>

            </div>


            <div className='w-[1560px] h-[505px] bg-[#278143] absolute top-[502px] mx-[180px] rounded-3xl border-white border-8'>
                <div className='w-[1027px] h-[97px] mx-auto mt-[91px]'>
                    <img src={text} alt="" />
                </div>

                <div className='text-center'>
                    <p className='text-[26px] mx-[325px] text-white'>Presale buyers of $SMILE will be able to stake their tokens into the smart contract before listing day to benefit from the high early rewards opportunity.</p>
                </div>


                <div className='text-center flex justify-center gap-[24px] relative'>


                    <button className='bg-[#860488] rounded-2xl px-[58.5px] py-[20px] text-white text-[25px] border-black border-b-8 border mt-[32px]'>Buy $SMILE</button>


                    <button className='bg-white rounded-2xl px-[16.56px] py-[20px] text-white text-[25px] border-black border-b-8 border mt-[32px]'>
                        <img src={logo2} alt="" />
                    </button>
                    <button className='bg-white rounded-2xl px-[16.56px] py-[20px] text-white text-[25px] border-black border-b-8 border mt-[32px]'>
                        <img src={logo3} alt="" />
                    </button>


                </div>

                <img className='absolute top-[20px] left-[34px] w-[186px] h-[186px]' src={logoOff} alt="" />

                <img className='absolute bottom-[66px] right-[50px] w-[186px] h-[186px]' src={logoOff} alt="" />

            </div>

            <img className='absolute top-[865px] w-[565px] ml-[40px] ' src={cartoon} alt="" />
            <img className='absolute top-[1080px] w-[687px] right-0 ' src={lastImg} alt="" />
        </div>
    );
};

export default Banner4;
