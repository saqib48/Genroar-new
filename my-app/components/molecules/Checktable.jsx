import React, { useState } from 'react';
import Input from '../atoms/Input';
import Paragraph from '../atoms/Paragraph';

function Checktable() {
    const [isHidden, setIsHidden] = useState(true);
    const [isHidden2, setIsHidden2] = useState(true);

    const toggleVisibility = () => {
        setIsHidden(false);
        setIsHidden2(true);
    };

    const toggleVisibility2 = () => {
        setIsHidden(true);
        setIsHidden2(false);
    };


    return (
        <div className="mt-[20px] w-[49%]">
            <div>
                <div className='text-[#ffffff] bg-[#242424] uppercase py-[5px] px-[10px] text-[16px] font-semibold leading-[30px]'>
                    YOUR ORDER
                </div>
                <div>
                    <table className='table mt-[10px]'>
                        <thead className='bg-[rgb(242,242,242)] h-[50px] w-[100%] text-[13px] font-bold text-[#747474] leading-[24px]'>
                            <tr>
                                <th className='py-[15px] w-[100%]'>Product</th>
                                <th className='py-[15px]'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-t border-r py-[15px] px-[45px] text-[14px] font-[500] leading-24px text-[#242424]'>Handbag Fringilla <strong>× 2</strong></td>
                                <td className='border-t border-r py-[15px] px-[103px] '>$165.00</td>
                            </tr>
                            <tr>
                                <td className='border-t border-r py-[15px] px-[45px] text-[14px] font-[500] leading-24px text-[#242424]'>Handbag Fringilla <strong>× 2</strong></td>
                                <td className='border-t border-r py-[15px] px-[103px]'>$165.00</td>
                            </tr>
                            <tr>
                                <td className='border-t border-r py-[15px] px-[45px] text-[14px] font-[500] leading-24px text-[#242424]'>Handbag Fringilla <strong>× 2</strong></td>
                                <td className='border-t border-r py-[15px] px-[103px]'>$165.00</td>
                            </tr>
                            <tr>
                                <td className='border-t border-r py-[15px] px-[45px] text-[14px] font-[500] leading-24px text-[#242424]'>Handbag Fringilla <strong>× 2</strong></td>
                                <td className='border-t border-r py-[15px] px-[103px]'>$165.00</td>
                            </tr>
                        </tbody>
                        <tfoot className='text-[rgb(120, 130, 153)]'>
                            <tr>
                                <th className='border-t py-[15px] px-[67px] text-[13px] font-[700] leading-24px text-[#747474]'>Cart Subtotal</th>
                                <td className='border-t py-[15px] px-[103px] text-[13px] font-[400] leading-24px text-[#747474]'>$215.00</td>
                            </tr>
                            <tr>
                                <th className='border-t py-[15px] px-[103px] text-[13px] font-[700] leading-24px text-[#747474]'>Shipping</th>
                                <th className='border-t py-[15px] px-[103px] text-[13px] font-[700] leading-24px text-[#747474]'>$215.00</th>
                            </tr>
                            <tr>
                                <th className='border-t border-b py-[15px] px-[103px] text-[13px] font-[700] leading-24px text-[#747474]'>Shipping</th>
                                <th className='border-t border-b py-[15px] px-[103px] text-[13px] font-[700] leading-24px text-[#747474]'>$215.00</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className='flex gap-[10px] items-center mt-[40px]'>
                    <Input variant='check1'
                        type='radio'
                        name='options'
                        id='radio'>
                    </Input>
                    <div onClick={toggleVisibility}>
                        <label htmlFor="radio">Create an account?</label>
                    </div>
                </div>
                <div style={{ maxHeight: `${isHidden ? '0px' : '50px'}`, overflow: 'hidden', transition: 'max-height 0.6s ease-in-out' }}>
                    {!isHidden && (
                        <Paragraph children='Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.'></Paragraph>
                    )}
                </div>
                <div className='flex gap-[10px] items-center mt-[10px]'>
                    <Input variant='check1'
                        type='radio'
                        name='options'
                        id='pay'>
                    </Input>
                    <div onClick={toggleVisibility2}>
                        <label htmlFor="pay" className='flex items-center'>PayPal <img src="/assits/images/papyel.webp" alt="" width={160} /></label>
                    </div>
                </div>
                <div style={{ maxHeight: `${isHidden2 ? '0px' : '100px'}`, overflow: 'hidden', transition: 'max-height 0.6s ease-in-out' }}>
                    {!isHidden2 && (
                        <Paragraph children='Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.'></Paragraph>
                    )}
                </div>

                <div className="px-[2px] py-[10px] text-white w-[40%] text-center transition duration-[0.5s] ease-in mt-[20px] bg-[#ff6a28] hover:bg-[black] hover:cursor-pointer uppercase font-semibold text-[18px] leading-30px">
                    <button type="submit">Proceed to PayPal</button>
                </div>
            </div>
        </div>
    );
}

export default Checktable;
