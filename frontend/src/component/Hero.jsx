import React from 'react'
import { asserts } from '../assets/assets'
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiTwitter } from "react-icons/tfi";
import { IoIosArrowRoundDown } from "react-icons/io";

const Hero = () => {
    return (
        <div id='hero' className='w-full relative overflow-hidden flex flex-col bg-blue-500 sm:flex-row flex-wrap shadow rounded min-h-[550px]'>
            <div className=' absolute h-[65%] w-full sm:w-[70%]  sm:h-full bg-white  sm:rounded-none rounded-b-full sm:rounded-r-full'></div>
            <div className='w-full sm:w-[25%]  absolute bottom-0 sm:right-0 h-[30%] sm:h-full sm:rounded-none rounded-t-full sm:rounded-l-full bg-white'></div>

            {/* left part */}
            <div className='md:w-1/2 flex flex-col items-start pl-2 sm:pl-32 pt-4 sm:pt-28 z-0 text-black gap-2 sm:gap-4'>
                <div className='flex flex-row justify-center items-center pl-4 sm:pl-0 gap-3'>
                    <p className='text-blue-500 text-xl sm:text-2xl font-light leading-0 pb-2'>welcome to my social media</p>
                    <div className='flex flex-row gap-1'>
                        <FaWhatsapp size={25} className='text-blue-500 cursor-pointer' />
                        <AiOutlineInstagram size={25} className='text-blue-500 cursor-pointer' />
                        <TiSocialFacebook size={25} className='text-blue-500 cursor-pointer' />
                        <TfiTwitter size={25} className='text-blue-500 cursor-pointer' />
                    </div>

                </div>
                <div>
                    <h1 className="text-3xl pl-4 sm:pl-0 sm:text-5xl font-bold text-gray-900">
                        Hi, I'm <span className="text-blue-500">Khadar</span>.I Design & Build <span className="text-blue-500">Unique Product</span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl pl-4 sm:pl-0 font-semibold mt-2 text-gray-400">
                        Full-Stack Developer | Flutter | Figma Designer
                    </h2>
                    <div className="flex pl-4 sm:pl-0 flex-row px-10 items-center mt-4 gap-4">
                        <p className="text-lg font-medium text-gray-700">Know me well!</p>
                        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                            Download CV
                        </button>
                    </div>

                    <a href='#services' className='flex pl-4 sm:pl-0 flex-row gap-1 items-center cursor-pointer mt-8 sm:mt-14 '>
                        <p className='text-xl pb-2'>my-sevrvices</p> 
                        <IoIosArrowRoundDown size={30} className='border rounded-full  text-blue-500 border-blue-500' />                   
                    </a>
                </div>
            </div>

            {/* right part */}
            <div className='w-full sm:w-1/2 relative flex items-center justify-center  pr-10'>
                <img src={asserts.person1} alt="" className=' w-full sm:w-[70%] sm:pr-10 md:absolute bottom-0 object-fit  h-auto' />
            </div>
        </div>
    )
}

export default Hero
