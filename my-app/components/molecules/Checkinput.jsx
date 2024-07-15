import React, { useState } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

function Checkinput() {
    const [isHidden, setIsHidden] = useState(true);
    const [isHidden2, setIsHidden2] = useState(true);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    const toggleVisibility2 = () => {
        setIsHidden2(!isHidden2);
    };

    return (
        <div className='mt-[20px] w-[49%]'>
            <div className='text-[#ffffff] bg-[#242424] uppercase py-[5px] px-[10px] text-[16px] font-semibold leading-[30px]'>
                BILLING DETAILS
            </div>
            <div className='in flex flex-col gap-[15px] mt-[10px]'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-[5px]'>
                        <h2>First Name <span className='text-orange-500'>*</span></h2>
                        <Input variant='ten' type='text' placeholder='' />
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <h2>Last Name <span className='text-orange-500'>*</span></h2>
                        <Input variant='ten' type='text' placeholder='' />
                    </div>
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2>Company Name</h2>
                    <Input variant='eleven' type='text' placeholder='' />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2>Country <span className='text-orange-500'>*</span></h2>
                    <select
                        name='country'
                        id='country'
                        className='w-[100%] h-[40px] outline-none border-[1px] text-[14px] px-[20px] border-[#ddd] py-[5px] text-[#747474] pb-[10px] overflow-scroll'
                    >
                        <option value='bangladesh'>Bangladesh</option>
                        <option value=''>Option 1</option>
                        <option value=''>Option 2</option>
                        <option value=''>Option 3</option>
                    </select>
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2>Street Address <span className='text-orange-500'>*</span></h2>
                    <Input variant='eleven' type='text' placeholder='House number and street name' />
                </div>
                <div>
                    <Input variant='eleven' type='text' placeholder='Apartment, suite, unit etc. (optional)' />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2>Town / City <span className='text-orange-500'>*</span></h2>
                    <Input variant='eleven' type='text' placeholder='' />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2>State / County <span className='text-orange-500'>*</span></h2>
                    <Input variant='eleven' type='text' placeholder='' />
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-[5px]'>
                        <h2>Phone <span className='text-orange-500'>*</span></h2>
                        <Input variant='ten' type='text' placeholder='' />
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <h2>Email Address <span className='text-orange-500'>*</span></h2>
                        <Input variant='ten' type='text' placeholder='' />
                    </div>
                </div>
                <div className='flex gap-[10px] items-center'>
                    <Input variant='check1' type='checkbox' placeholder='Create' id='check' />
                    <div onClick={toggleVisibility}>
                        <label htmlFor='check'>Create an account?</label>
                    </div>
                </div>
                <div style={{ maxHeight: `${isHidden ? '0px' : '100px'}`, overflow: 'hidden', transition: 'max-height 0.6s ease-in-out' }}>
                    {!isHidden && (
                        <div className='flex flex-col gap-[5px]'>
                            <h2>Account Password <span className='text-orange-500'>*</span></h2>
                            <Input variant='eleven' type='password' placeholder='Password' />
                        </div>
                    )}
                </div>
                <div className='flex gap-[10px] items-center'>
                    <Input variant='check1' type='checkbox' placeholder='Ship' id='ship' />
                    <div onClick={toggleVisibility2}>
                        <label
                            htmlFor='ship'
                            className='cursor-pointer text-15px bg-black text-white font-semibold leading-[27px] py-[5px] px-[10px]'
                        >
                            Ship to a different address?
                        </label>
                    </div>
                </div>
                <div style={{ maxHeight: `${isHidden2 ? '0px' : '600px'}`, transition: 'max-height 0.6s ease-in-out', overflow: 'hidden' }} className='my-[30]'>
                    {!isHidden2 && (
                        <div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-[5px]'>
                                    <h2>First Name <span className='text-orange-500'>*</span></h2>
                                    <Input variant='ten' type='text' placeholder='' />
                                </div>
                                <div className='flex flex-col gap-[5px]'>
                                    <h2>Last Name <span className='text-orange-500'>*</span></h2>
                                    <Input variant='ten' type='text' placeholder='' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <h2>Company Name</h2>
                                <Input variant='eleven' type='text' placeholder='' />
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <h2>Country <span className='text-orange-500'>*</span></h2>
                                <select
                                    name='country2'
                                    id='country2'
                                    className='w-[100%] h-[40px] outline-none border-[1px] text-[14px] px-[20px] border-[#ddd] py-[5px] text-[#747474] pb-[10px] overflow-scroll'
                                >
                                    <option value='bangladesh'>Bangladesh</option>
                                    <option value=''>Option 1</option>
                                    <option value=''>Option 2</option>
                                    <option value=''>Option 3</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-[15px]'>
                                <div><h2>Street Address <span className='text-orange-500'>*</span></h2>
                                    <Input variant='eleven' type='text' placeholder='House number and street name' />
                                </div>
                                <div>
                                    <Input variant='eleven' type='text' placeholder='Apartment, suite, unit etc. (optional)' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <h2>Town / City <span className='text-orange-500'>*</span></h2>
                                <Input variant='eleven' type='text' placeholder='' />
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <h2>State / County <span className='text-orange-500'>*</span></h2>
                                <Input variant='eleven' type='text' placeholder='' />
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-[5px]'>
                                    <h2>Phone <span className='text-orange-500'>*</span></h2>
                                    <Input variant='ten' type='text' placeholder='' />
                                </div>
                                <div className='flex flex-col gap-[5px]'>
                                    <h2>Email Address <span className='text-orange-500'>*</span></h2>
                                    <Input variant='ten' type='text' placeholder='' />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className='flex flex-col gap-[5px]'>
                    <h2>Order Notes</h2>
                    <textarea
                        name='order-notes'
                        id='order-notes'
                        placeholder='Notes about your order, e.g. special notes for delivery.'
                        className='overflow-scroll-x h-[40px] outline-none border-[1px] text-[14px] px-[20px] border-[#ddd] py-[10px] resize-none text-[#747474] px-[10px]'
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export default Checkinput;
