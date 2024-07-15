import React from 'react'
import "../../app/globals.css"
import { IoSearch } from "react-icons/io5";


export const PortProduct = ({src}) => {
    return (
        <div>
            <div className="  w-[100%]   outer-product relative overflow-hidden  ">
                <img className='w-[40%]' src={src} alt="" />
                <div className="hover-bg orange-ng absolute top-[0] w-[100%] h-[427px] flex flex-col items-center justify-center bg-orange-400 bg-opacity-25 ">
                    <div className=' h-[50px] w-[50px] flex items-center justify-center text-[25px] duration-300 ease-in-out bg-gray-100  hover:bg-black text-gray-400 hover:text-white rounded-full '  >
                        <IoSearch />
                    </div>
                </div>
            </div>
        </div>
    )
}
