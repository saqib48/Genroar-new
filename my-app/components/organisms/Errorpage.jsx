import React from 'react'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import { CiSearch } from "react-icons/ci";
import Button from '../atoms/Button';
import AnchorTag from '../atoms/anchorTag';


function Errorpage() {
    return (
        <Container>
            <div className='flex flex-col items-center justify-center text-center gap-[8px] my-[10px] mt-[50px] '>
                <div className='text-[200px] text-[#ff6a28]  text-center leading-[160px] mb-[27px] font-[700] tracking-[10px]mt-[80px]'>
                    <h1>404</h1>
                </div>
                <div>
                    <Heading level='9'>
                        OPPS! PAGE NOT BE FOUND
                    </Heading>
                </div>
                <div className='mb-[19px]'>
                    <p className='text-[15px] leading-25px font-[400] text-[rgb(129,131,129)]'>Sorry but the page you are looking for does not exist, have been <br />
                        removed, name changed or is temporarily unavailable.</p>
                </div>
                <div className="inut relative w-[400px]">
                    <div className="">
                        <input className='w-full outline-none border-[1px] border-[#a9a9a9] px-[20px] py-[14px]  text-[13px]' type="text" placeholder='Search...' />
                    </div>
                    <div className="absolute top-[35%] right-[5%] ">
                        <CiSearch />
                    </div>
                </div>
                <div className="px-[10px] py-[8px] text-white text-center mt-[20px] bg-[#ff6a28] hover:bg-[black] hover:cursor-pointer transform transition 0.7s ease-in uppercase font-semibold text-[15px] leading-30px">
                    <AnchorTag href='/about'>Back to Home Page</AnchorTag>
                </div>
            </div>
        </Container>
    )
}

export default Errorpage