import { FaWifi } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import React from "react";
import Heading from "../atoms/Heading";
import Container from "../atoms/Container";

function WishlistShare() {
    return (
       <Container>
         <div className="my-[50px] border py-[20px] gap-[10px] grid justify-center ">
            <div className="flex justify-center ">
            <Heading level="3">Share on:</Heading>
            </div>
            <div className="flex gap-[20px] ">
                <FaWifi />
                <FaVimeoV />
                <FaTumblr />
                <FaPinterest />
                <FaLinkedinIn />
            </div>
        </div>
       </Container>
    )
}

export default WishlistShare;