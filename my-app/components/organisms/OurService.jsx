import React from 'react'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import { FaSlidersH } from "react-icons/fa";
import { FaUmbrella } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import Container from '../atoms/Container';

function OurService() {
    return (
        <div className='bg-[#ECECEC]  mt-[45px] py-[70px]'>
           <Container>  
           <div className='text-center pb-[30px] '>
                <Heading level='9'>OUR SERVICES</Heading>
                <Paragraph> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore <br />
                    eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit.. </Paragraph>
            </div>
            <div className="flex flex-wrap gap-[20px] ">
                <div className="flex gap-[15px] ">
                    <div className='pt-[3px] text-[27px] text-[#ff6a28] '>
                    <FaSlidersH />
                    </div>
                    <div className="">
                        <Heading level='5'>BRANDING</Heading>
                        <Paragraph>Typi non habent claritatem insitam;<br/> est ususlegentis in iis qui facit <br/> eorum claritatem</Paragraph>
                    </div>
                </div>
                <div className="flex gap-[15px] ">
                    <div className="pt-[3px] text-[27px] text-[#ff6a28]" >
                    <FaUmbrella />
                    </div>
                    <div className="">
                        <Heading level='5'>WEB DESIGN</Heading>
                        <Paragraph>Typi non habent claritatem insitam;<br/> est ususlegentis in iis qui facit <br/> eorum claritatem</Paragraph>
                    </div>
                </div>
                <div className="flex gap-[15px] ">
                    <div className="pt-[3px] text-[27px] text-[#ff6a28]" >
                    <FaCamera />
                    </div>
                    <div className="">
                        <Heading level='5'>PHOTOGRAPHY</Heading>
                        <Paragraph>Typi non habent claritatem insitam;<br/> est ususlegentis in iis qui facit <br/> eorum claritatem</Paragraph>
                    </div>
                </div>
                <div className="flex gap-[15px] ">
                    <div className="pt-[3px] text-[27px] text-[#ff6a28]" >
                    <FaCog />
                    </div>
                    <div className="">
                        <Heading level='5'>WEB DEVELOPMENT</Heading>
                        <Paragraph>Typi non habent claritatem insitam;<br/> est ususlegentis in iis qui facit <br/> eorum claritatem</Paragraph>
                    </div>
                </div>
                <div className="flex gap-[15px] ">
                    <div className="pt-[3px] text-[27px] text-[#ff6a28]" >
                    <FaRegFileCode />
                    </div>
                    <div className="">
                        <Heading level='5'>CODING</Heading>
                        <Paragraph>Typi non habent claritatem insitam;<br/> est ususlegentis in iis qui facit <br/> eorum claritatem</Paragraph>
                    </div>
                </div>
                <div className="flex gap-[15px] ">
                    <div className="pt-[3px] text-[27px] text-[#ff6a28]" >
                    <FaRegChartBar />
                    </div>
                    <div className="">
                        <Heading level='5'>MARKETING</Heading>
                        <Paragraph>Typi non habent claritatem insitam;<br/> est ususlegentis in iis qui facit <br/> eorum claritatem</Paragraph>
                    </div>
                </div>
                <div className="flex gap-[15px] ">
                    <div className="pt-[3px] text-[27px] text-[#ff6a28] " >
                    <FaHeadphones />

                    </div>
                    <div className="">
                        <Heading level='5'>SUPPORT</Heading>
                        <Paragraph>Typi non habent claritatem insitam;<br/> est ususlegentis in iis qui facit <br/> eorum claritatem</Paragraph>
                    </div>
                </div>
                <div className="flex gap-[15px] ">
                    <div className="pt-[3px] text-[27px] text-[#ff6a28]" >
                    <FaLeaf />
                    </div>
                    <div className="">
                        <Heading level='5'>GRAPHIC DESIGN</Heading>
                        <Paragraph>Typi non habent claritatem insitam;<br/> est ususlegentis in iis qui facit <br/> eorum claritatem</Paragraph>
                    </div>
                </div>
            </div>
           </Container>
        </div>
    )
}

export default OurService