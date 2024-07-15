"use client";

import React, { useState, useRef, useEffect } from 'react';
import AnchorTag from "../atoms/AnchorTag";
import Container from "../atoms/Container";
import Heading from "../atoms/Heading";
import { CiFileOn } from "react-icons/ci";
import Label from "../atoms/Label";
import Span from "../atoms/Span";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Paragraph from "../atoms/Paragraph";

function Checkpolicy() {
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
            <div className="flex bg-[rgb(247,246,247)] border-t-[rgb(255,106,40)] mt-[20px] border-t-[3px] check py-[15px] px-[10px] items-center w-[100%]">
                <CiFileOn />
                <Heading level="6">Returning customer?</Heading>
                <div onClick={toggleVisibility} className="cursor-pointer">
                    <AnchorTag variant="check">Click here to login</AnchorTag>
                </div>
            </div>
            <div style={{ maxHeight: `${height}`, transition: 'max-height 0.5s ease-in-out', overflow: 'hidden' }} ref={contentRef}>
                {!isHidden && (
                    <div className='border px-[30px] py-[20px] mt-[30px]'>
                        <Paragraph>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</Paragraph>
                        <div>
                            <div>
                                <Label labelStyle='text-[15px]'>Username or Email</Label>
                                <Span>*</Span>
                            </div>
                            <Input variant='nine' />
                        </div>
                        <div className='pt-[10px]'>
                            <div className='text-[20px]'>
                                <Label labelStyle='text-[16px]'>Password</Label>
                                <Span>*</Span>
                            </div>
                            <Input variant='nine' />
                        </div>
                        <div className="flex mt-[10px] gap-[20px]">
                            <Button variant='rectangle-4'>LOGIN</Button>
                            <div className='text-[20px] flex items-center gap-[20px]'>
                                <Label>
                                    <div className='flex gap-[10px]'>
                                        <Input type="checkbox" variant="one" />
                                        <Heading level="5">Remember Me</Heading>
                                    </div>
                                </Label>
                            </div>
                        </div>
                        <div className='flex pt-[1.5%] justify-between'>
                            <AnchorTag variant='check' href="#">Lost your password?</AnchorTag>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
}

export default Checkpolicy;
