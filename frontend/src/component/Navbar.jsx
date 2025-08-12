import React, { useState } from "react"
import { asserts } from "../assets/assets"
import { NavLink } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Navbar() {
    const [open, setOpen] = useState(false)
    const [dark, setDark] = useState(true)

    return (
        <div className="flex flex-row w-full  justify-between h-20 shadow items-center shadow-blue-100 px-2 sm:px-[10%]">
            <img src={asserts.logo} alt="" width={80} />
            <div className="flex flex-row gap-3 sm:gap-5 items-center">
                <div className=" hidden sm:flex sm:flex-row gap-3  text-gray-700">
                    <a href="#hero" className="hover:text-blue-700 pt-1 active:text-blue-700  text-xl pr-2 font-semibold">
                        Home
                    </a>
                    <a href="#about" className="hover:text-blue-700  pt-1 active:text-blue-700  text-xl pr-2 font-semibold">
                        About
                    </a>
                    <a href="#services" className="hover:text-blue-700  pt-1 active:text-blue-700  text-xl pr-2 font-semibold">
                        Services
                    </a>
                    <a href="#contact" className="hover:text-blue-700  pt-1 active:text-blue-700  text-xl pr-2 font-semibold">
                        Contact
                    </a>
                    <a href="https://github.com/khadar072"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 pt-1 text-xl pr-1 active:text-blue-700 font-semibold">
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/khadar-moha-08638a358" target="_blank"
                        rel="noopener noreferrer" className="hover:text-blue-700  pt-1 active:text-blue-700  text-xl pr-2 font-semibold">
                        LinkedIn
                    </a>

                </div>
                <button className=" bg-blue-500 px-4 py-3 rounded text-white">
                    {
                        !dark ?
                            <MdDarkMode onClick={() => setDark(!dark)} size={25} />
                            :
                            <MdLightMode onClick={() => setDark(!dark)} size={25} />
                    }
                </button>
                <div className="block sm:hidden">
                    {
                        !open ?

                            <IoMdMenu onClick={() => setOpen(!open)} size={60} />
                            :
                            <IoCloseSharp onClick={() => setOpen(!open)} size={60} />
                    }
                </div>
            </div>




            {
                open && (
                    <div className="absolute block sm:hidden bg-white z-10 w-full h-full top-20 left-0">
                        <div className="flex flex-col gap-1 bg-white w-full">
                            <a href="#hero" className="hover:text-blue-700 py-2 active:text-blue-500 cursor-pointer bg-gray-200 pl-2  text-2xl font-semibold">
                                Home
                            </a>
                            <a href="#about" className="hover:text-blue-700  py-2 active:text-blue-500 cursor-pointer bg-gray-200 pl-2  text-2xl font-semibold">
                                About
                            </a>
                            <a href="#services" className="hover:text-blue-700  py-2 active:text-blue-500 cursor-pointer bg-gray-200 pl-2  text-2xl font-semibold">
                                Services
                            </a>
                            <a href="#contact" className="hover:text-blue-700  py-2 active:text-blue-500 cursor-pointer bg-gray-200 pl-2  text-2xl font-semibold">
                                Contact
                            </a>
                            <a href="https://github.com/khadar072"
                                target="_blank"
                                rel="noopener noreferrer" className="hover:text-blue-700  py-2 active:text-blue-500 cursor-pointer bg-gray-200 pl-2  text-2xl font-semibold">
                                Github
                            </a>
                            <a href="https://www.linkedin.com/in/khadar-moha-08638a358" target="_blank"
                                rel="noopener noreferrer" className="hover:text-blue-700  py-2 active:text-blue-500 cursor-pointer bg-gray-200 pl-2  text-2xl font-semibold">
                                LinkedIn
                            </a>

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar