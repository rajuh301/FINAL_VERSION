
import howToBuy from '../../../public/HowtoBuy.png'
import num1 from '../../../public/Text/Number/01.png'
import num2 from '../../../public/Text/Number/02.png'
import num3 from '../../../public/Text/Number/03.png'

import text1 from '../../../public/Text/2.png'
import text2 from '../../../public/Text/03.png'
import text3 from '../../../public/Text/04.png'

import banner from '../../../public/Banner3.png'
import tokenText from '../../../public/Text/07.png'
import frame from '../../../public/Frame.png'
import Banner3Footer from './Banner3Footer'
import Banner4 from './Banner4'

const Banner3 = () => {
    return (
        <div className="bg-[#79DD83] w-[1920px] h-auto mt-[197px] ">

            <div className=' h-[429px]'>

                <div className='flex justify-center'>
                    <img className='w-[581px] h-[96px]' src={howToBuy} alt="" />
                </div>

                {/* ----------- Number -------------- */}
                <div className='flex mt-[47px] justify-between mx-[409.5px]'>

                    <div className='w-[1051px] h-[1px] bg-black absolute my-8'></div>



                    <div className='w-[80px] h-[60px]'>
                        <div className='w-[80px] h-[60px] bg-black rounded-3xl relative  border-yellow-400 border-8 right-5'></div>
                        <img className='w-[37px] h-[31px] top-[1650px] absolute' src={num1} alt="" />
                    </div>

                    <div className='w-[80px] h-[60px]'>
                        <div className='w-[80px] h-[60px] bg-black rounded-3xl relative  border-yellow-400 border-8 right-5'></div>
                        <img className='w-[37px] h-[31px] top-[1650px] absolute' src={num2} alt="" />
                    </div>

                    <div className='w-[80px] h-[60px]'>
                        <div className='w-[80px] h-[60px] bg-black rounded-3xl relative  border-yellow-400 border-8 right-5'></div>
                        <img className='w-[37px] h-[31px] top-[1650px] absolute' src={num3} alt="" />
                    </div>


                </div>


                {/* ----------- Number -------------- */}
                <div className='flex justify-between w-[1516px] mx-[202px] '>


                    <div className='w-[451px] h-[46px]'>
                        <img className=' top-[1750px] absolute' src={text1} alt="" />
                        <br />
                        <p className='mt-[91px] text-black text-[26px] font-semibold'>Download your solana wallet of choice but we recommend phantom or solflare chrome extensions.</p>
                    </div>

                    <div className='w-[451px] h-[46px]'>
                        <img className=' top-[1750px] absolute' src={text2} alt="" />
                        <br />
                        <p className='mt-[91px] text-black text-[26px] font-semibold'>Get some Solana, either buy within your wallet or via an exchange and deposit to your wallet via the address shown.</p>
                    </div>

                    <div className='w-[451px] h-[46px]'>
                        <img className=' top-[1750px] absolute' src={text3} alt="" />
                        <br />
                        <p className='mt-[91px] text-black text-[26px] font-semibold'>Go to Raydium and paste in the $SMILE Contract address. Select your desired amount and confirm.</p>
                    </div>


                </div>

            </div>


            {/* -------------Mani banner-3---------------------  */}
            <div className='mt-20 relative'>

                <div className=''>
                    <img src={banner} alt="" />

                    <div className='flex justify-center'>
                        <img className='absolute top-[129px]' src={tokenText} alt="" />
                    </div>
                </div>

                <div className='flex mx-auto w-[976.36px]'>
                    <div className=' absolute top-[250px]'>
                        <img className='w-[976.36px] h-[739.37px]' src={frame} alt="" />
                    </div>

                </div>







            </div>
            {/* -------------Mani banner-3---------------------  */}
            <Banner3Footer />
            <Banner4/>
        </div>
    );
};

export default Banner3;
