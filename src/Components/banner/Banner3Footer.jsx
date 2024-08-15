import banner3img from '../../../public/banner4.png'

import text1 from '../../../public/Text/08.png'
import text2 from '../../../public/Text/09.png'
import logo from '../../../public/logoOff.png'



const Banner3Footer = () => {
    return (
        <div className="h-[799px] bg-[#278143] relative">

            <div className="flex justify-between mx-[139px]">
                <div className=''>
                    <img className='w-[805px] h-[772px] my-[25px]' src={banner3img} alt="" />
                </div>

                <div className='w-[683px] h-[288px] mt-[218px]' >
                    <img src={text1} alt="" />
                    <img className='mt-[30px]' src={text2} alt="" />
                </div>

            {/* ------------ logo------------ */}
            <div className='absolute left-0'>
                <img src={logo} alt="" />
            </div>

            <div className='absolute right-0'>
                <img src={logo} alt="" />

            </div>

            <div className='absolute right-[25%] top-[400px]'>
                <img src={logo} alt="" />

            </div>


            </div>
            {/* ------------ logo------------ */}

        </div>
    );
};

export default Banner3Footer;
