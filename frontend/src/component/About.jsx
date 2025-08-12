import React from 'react'
import { asserts } from '../assets/assets'
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
const About = () => {
  return (
    <div id='about' className='flex flex-col  gap-5 w-full mt-20'>
      {/* left part */}
      <h1 className='text-blue-500 text-center font-bold text-6xl'>Why ME</h1>
      <p className="max-w-3xl mx-auto text-center text-gray-700  px-4">
        I deliver high-quality, reliable solutions tailored to your needs. With a passion for clean code and user-friendly designs, I make sure every project exceeds expectations and is delivered on time.
      </p>
      <div className='flex flex-col sm:flex-row'>
        <div className=' w-full sm:w-1/2 relative flex justify-center items-center'>
          <img src={asserts.programingLanguage} alt="" className='sm:w-[80%]' />
        </div>
        {/* right part */}
        <div className='w-full sm:w-1/2 flex flex-col justify-center items-start '>
          <p className='text-xl sm:text-3xl font-semibold text-gray-500 py-4 text-center w-full sm:text-start'>About Me</p>
          <h1 className='text-2xl sm:text-4xl font-bold pb-4'>Turning Ideas Into Digital Reality — With Code, Creativity, and Innovation</h1>
          {/* <h1>From Vision to Execution — Crafting Web, App & Design Experiences That Inspire"</h1> */}
          <p className='text-wrap pb-4'>I’m a passionate full-stack web and app developer, as well as a creative designer, with a knack for crafting modern, high-performing digital experiences. From building responsive websites and intuitive mobile apps to designing user-friendly interfaces and developing scalable backends, I bring ideas to life with clean code, creative design, and attention to detail. I thrive on solving problems, exploring new technologies, and delivering solutions that not only meet but exceed expectations. For me, every project is an opportunity to blend functionality with beauty, making technology both powerful and enjoyable to use.</p>
          <div className='flex flex-row gap-1 sm:gap-4 mt-4'>
            <div className='mr-10 pb-10'>
              <p className='text-black font-bold text-xl pb-3'>Email</p>
              <div className='flex flex-row justify-center items-center gap-2'>
                <MdOutlineEmail size={25} className='text-blue-500' />
                <p>khadarmoha47@gmail.com</p>
              </div>
            </div>
            <div>
              <p className='text-black font-bold text-xl pb-3'>Phone</p>
              <div className='flex flex-row justify-center items-center gap-2'>
                <BsTelephone size={20} className='text-blue-500' />
                <p>+252906112646</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
