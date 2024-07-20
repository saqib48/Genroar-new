import React from 'react'
import Heading from '../atoms/Heading'
import { IoIosStar } from "react-icons/io";
import Paragraph from '../atoms/Paragraph';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { IoMdHeartEmpty } from "react-icons/io";
import AnchorTag from '../atoms/anchorTag';
import { BsSliders } from "react-icons/bs";
import { MdRssFeed } from "react-icons/md";
import { FaVimeoV } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";





function GalleryDetails() {

    return (
        <div className='w-[100%]'>
            <div className='mb-[15px]'>
                <Heading level='19'>
                    Fusce Dolor Enim
                </Heading>
            </div>
            <div className='flex gap-[10px] items-center mb-[14px]'>
                <div className='flex text-[#ff6a28]'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                </div>
                <div className='cursor-pointer'>
                    <Paragraph>
                        1 review
                    </Paragraph>
                </div>
                <div className='cursor-pointer'>
                    <Paragraph>
                        Write a review
                    </Paragraph>
                </div>
            </div>
            <div className='flex items-center mb-[15px]'>
                <Heading level='20'>
                    £70.00
                </Heading>
                <Paragraph>
                    £80.00
                </Paragraph>
            </div>
            <div className='mb-[15px]'>
                <Paragraph>
                    More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping through album art. Select an album to turn it over and see the track list. Enhanced interface. Experience a whole new way to browse and view your music and video. Sleeker design. Beautiful, durable, and sleeker than ever, iPod classic now features an anodized aluminum and polish..
                </Paragraph>

            </div>
            <div className='flex items-center gap-[60px] mb-[15px]'>
                <div>
                    <Heading level='21'>
                        Color
                    </Heading>
                </div>
                <div className=''>
                    <select name="RED" id="Red" className='border-[1px] border-lightgray h-[40px] rounded-[5px] w-[150px] text-[#747474] outline-none'>
                        <option value="">orange</option>
                        <option value="">orange</option>
                        <option value="">orange</option>
                        <option value="">orange</option>

                        <option value="">orange</option>
                        <option value="">orange</option>
                        <option value="">orange</option>
                    </select>
                </div>
            </div>
            <div className='flex items-center gap-[60px] mb-[15px]'>
                <div>
                    <Heading level='21'>
                        Size
                    </Heading>
                </div>
                <div className=''>
                    <select name="RED" id="Red" className='border-[1px] border-lightgray h-[40px] rounded-[5px] w-[100px] text-[#747474] outline-none'>
                        <option value="">Large</option>
                        <option value="">Small</option>
                        <option value="">Small</option>
                        <option value="">Small</option>

                        <option value="">Small</option>
                        <option value="">Med</option>
                        <option value="">Med</option>
                    </select>
                </div>
            </div>
            <div className='flex items-center gap-[20px] mb-[15px]'>
                <div>
                    <Heading level='21'>
                        Quantity
                    </Heading>
                </div>
                <div className=''>
                    <input
                        type="number"
                        defaultValue={1}
                        min={1}
                        max={100}
                        className=" p-[5px] h-[50px] flex items-center  border border-gray-300 rounded outline-none"
                    />
                </div>
                <div className='px-[100px] py-[10px] text-white h-[50px] rounded-[3px] items-center flex text-center transition duration-[0.2s] ease-in hover:bg-[#ff6a28] bg-[black] hover:cursor-pointer uppercase font-semibold text-[13px] leading-50px'>
                    <Button>
                        ADD TO CART
                    </Button>
                </div>
            </div>
            <div className='flex items-center gap-[20px] mb-[15px]'>
                <div className='flex items-center hover:text-[#ff6a28]'>
                    <IoMdHeartEmpty />
                    <AnchorTag variant='gallery'>Add to wishlist</AnchorTag>

                </div>
                <div className='flex items-center hover:text-[#ff6a28]'>
                    <BsSliders />
                    <AnchorTag variant='gallery'> Compare this Product</AnchorTag>
                </div>
            </div>
            <div className='flex items-center gap-[40px] mb-[15px]'>
                <div>
                    <Heading level='21'>
                        Share On:
                    </Heading>
                </div>
                <div className='flex gap-[7px] text-[14px]'>
                    <div className='hover:text-[#ff6a28] cursor-pointer'> <MdRssFeed /></div>
                    <div className='hover:text-[#ff6a28] cursor-pointer'> <FaVimeoV /></div>
                    <div className='hover:text-[#ff6a28] cursor-pointer'> <FaTumblr /></div>
                    <div className='hover:text-[#ff6a28] cursor-pointer'><FaPinterest /></div>
                    <div className='hover:text-[#ff6a28] cursor-pointer'><FaLinkedinIn /></div>
                </div>
            </div>
        </div>
    )
}

export default GalleryDetails