import React from 'react'
import "../../app/globals.css"
import Heading from '../atoms/Heading'

const Catagories = ( { Catagories , text } ) => {
    return (
       <a href="">
       <div className='product-catagory flex  justify-between  ' >
            <h3>{Catagories}</h3>
            <div className=" circle h-[30px] rounded-full text-gray-400  border-box pt-[4px] w-[30px] flex items-center justify-center bg-gray-100 ">
            <h4 className='text-[15px] font-medium  ' > {text} </h4>
            </div>
        </div>
        </a>
    )
}

export default Catagories