import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import Heading from '../atoms/Heading';
import Input from '../atoms/Input';

// Dynamically import the jQuery Ripples component to avoid SSR issues
const RipplesComponent = dynamic(() => import('jquery.ripples'), { ssr: false });

const Coming = () => {
  useEffect(() => {
    const $ = require('jquery');
    require('jquery.ripples');

    // Initialize jQuery Ripples plugin after component mounts
    $('.bg1').ripples({
      resolution: 300,
      perturbance: 0.04,
    });

    // Clean up the effect on component unmount
    return () => {
      $('.bg1').ripples('destroy');
    };
  }, []);

  return (
    <div>
      <div className='bg1'>
        <div className='text-center items-center'>
          <div className='flex justify-center pt-[5%] mb-[3%]'>
            <a href="">
              <img className='w-[80px]' src="/assits/images/logo2.png" alt="Logo" />
            </a>
          </div>
          <div>
            <Heading level='2'>We are coming soon</Heading>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae cum omnis incidunt, temporibus
              <br /> quibusdam libero consequatur perspiciatis accusantium illum?
            </p>
          </div>
        </div>
        <div className='text-center text-[#ffffff] flex justify-center gap-[30px] my-[20px]'>
          <div>
            <div className='border-[1px] border-[#ddd] font-[500] text-[25px] rounded w-[60px] my-[10px]'>00</div>
            <div className='text-[13px] font-[400]'>DAYS</div>
          </div>
          <div>
            <div className='border-[1px] border-[#ddd] font-[500] text-[25px] rounded w-[60px] my-[10px]'>00</div>
            <div className='text-[13px] font-[400]'>Hrs</div>
          </div>
          <div>
            <div className='border-[1px] border-[#ddd] font-[500] text-[25px] rounded w-[60px] my-[10px]'>00</div>
            <div className='text-[13px] font-[400]'>Mins</div>
          </div>
          <div>
            <div className='border-[1px] border-[#ddd] font-[500] text-[25px] rounded w-[60px] my-[10px]'>00</div>
            <div className='text-[13px] font-[400]'>Secs</div>
          </div>
        </div>
        <div className='text bg-center items-center grid justify-center'>
          <heading className='text-[#fff] text-[16px] font-bold font-600 text-center mb-[20px]'>Subscribe For Our Next Update</heading>
          <div className="input relative">
            <div>
              <Input type='text' variant='four' placeholder='Enter your e-mail....' />
            </div>
            <div className="absolute text-[14px] font-[600] top-[28%] right-[4%] border-l-[3px] pl-[10px] text-white hover:text-[#ff6a28]">
              <a href="">SUBSCRIBE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coming;