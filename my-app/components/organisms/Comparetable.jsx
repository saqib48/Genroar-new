import React from 'react'
import "../../app/globals.css"
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'
import { FaRegTrashCan } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


function CompareData() {
    return (
        <Container>

            <div className=" my-[60px] ">
                <table>
                    <tbody className='border '>
                        <tr className='tablebox  ' >
                            <td className='text-center'>Product</td>
                            <td>
                                <img width="250px" src="/assits/images/compareP.webp" alt="" />
                                <Heading level='5'>Furniture</Heading>
                                <Heading level='5'><b>Rinosin Title</b></Heading>
                            </td>
                            <td>
                                <img width="250px" src="/assits/images/comparep2.webp" alt="" />
                                <Heading level='5'>Furniture</Heading>
                                <Heading level='5'><b>Marco Title</b></Heading>
                            </td>
                            <td>
                                <img width="250px" src="/assits/images/compareP3.webp" alt="" />
                                <Heading level='5'>Furniture</Heading>
                                <Heading level='5'><b>Oakley title</b></Heading>
                            </td>
                        </tr>
                        <tr className='tablebox  ' >
                            <td className=' text-center' >Description</td>
                            <td>Eye glasses are very important for thos whos have some difficult in their eye to see every hing clearly and perfectly</td>
                            <td>Eye glasses are very important for thos whos have some difficult in their eye to see every hing clearly and perfectly</td>
                            <td>Eye glasses are very important for thos whos have some difficult in their eye to see every hing clearly and perfectly</td>
                        </tr>
                        <tr className='tablebox text-center  ' >
                            <td>Price</td>
                            <td>$295</td>
                            <td>$275</td>
                            <td>$395</td>
                        </tr>
                        <tr className='tablebox text-center  ' >
                            <td>Color</td>
                            <td>Black</td>
                            <td>Black</td>
                            <td>Black</td>
                        </tr>
                        <tr className='tablebox text-center  ' >
                            <td>Stock</td>
                            <td>In Stock</td>
                            <td>In Stock</td>
                            <td>In Stock</td>
                        </tr>
                        <tr className='tablebox text-center  ' >
                            <td>Add To Cart</td>
                            <td><Button variant="404">Add To Cart</Button></td>
                            <td><Button variant="404">Add To Cart</Button></td>
                            <td><Button variant="404">Add To Cart</Button></td>
                        </tr>
                        <tr className='tablebox text-center  ' >
                            <td>Delete</td>
                            <td className=' text-[24px] '>
                                <div className="flex justify-center ">
                                    <button className="text-xl hover:text-[#ff6a28]">< FaRegTrashCan /></button>
                                </div>
                            </td>
                            <td className=' text-[24px] '>
                                <div className="flex justify-center ">
                                    <button className="text-xl hover:text-[#ff6a28]">< FaRegTrashCan /></button>
                                </div>
                            </td>
                            <td className=' text-[24px] '>
                                <div className="flex justify-center ">
                                    <button className="text-xl hover:text-[#ff6a28]">< FaRegTrashCan /></button>
                                </div>
                            </td>
                        </tr>
                        <tr className='tablebox text-center  ' >
                            <td>Rating</td>
                            <td className=''>
                                <div className='flex justify-center ' >
                                <button className=" hover:text-[#ff6a28] flex"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></button> 
                                </div>
                            </td>
                            <td className=''>
                                <div className='flex justify-center ' >
                                    <button className=" hover:text-[#ff6a28] flex"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></button> 
                                </div>
                            </td>
                            <td className=''>
                                <div className='flex justify-center ' >
                                    <button className=" hover:text-[#ff6a28] flex"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></button> 
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </Container>

    )
}

export default CompareData