"use client";

import React, { useState, useEffect, useRef } from 'react';
import AnchorTag from "../atoms/anchorTag"; // Assuming this is correctly imported
import Container from "../atoms/Container";
import Heading from "../atoms/Heading";
import { CiFileOn } from "react-icons/ci"; // Assuming this is correctly imported
import Label from '../atoms/Label';
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function Checkcode() {
    const [isHidden, setIsHidden] = useState(true);
    const [height, setHeight] = useState('0px');
    const contentRef = useRef(null);

    useEffect(() => {
        setHeight(isHidden ? '0px' : `${contentRef.current.scrollHeight}px`);
    }, [isHidden]);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    return (
        <Container>
            <div className="flex bg-[rgb(247,246,247)] border-t-[rgb(255,106,40)] mt-[20px] border-t-[3px] check py-[15px] px-[10px] items-center">
                <CiFileOn />
                <Heading level="6">Returning customer?</Heading>
                <div onClick={toggleVisibility} className="cursor-pointer">
                    <AnchorTag variant="check">Click here to enter your code</AnchorTag>
                </div>
            </div>

            <div style={{ maxHeight: `${height}`, transition: 'max-height 0.5s ease-in-out', overflow: 'hidden' }} ref={contentRef}>
                {!isHidden && (
                    <div className='border px-[30px] py-[20px] my-[30px] '>
                        <div className="flex gap-[20px]">
                            <Input variant='ten' placeholder="Coupon Code" />
                            <Button variant='rectangle-5'>APPLY COUPON</Button>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
}

export default Checkcode;
