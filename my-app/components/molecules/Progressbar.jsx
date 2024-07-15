import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({ targetProgress, duration = 1000,contant,discount }) => {
    const [progress, setProgress] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setProgress(targetProgress);
        }
    }, [inView, targetProgress]);

    return (
      <div className="relative">
          <div className="bg-[#242424] absolute top-[-8px]   justify-center items-center text-white rounded-[100%] w-[35px] h-[35px] border-[#ff6a28] border-[3px]">
          <span className='text-[14px] '>{discount}</span>
          </div>
          <div ref={ref} className=" bg-gray-200 rounded-[10px] overflow-hidden">
            <div
                className="h-5 bg-[#ff6a28] text-white text-[13px] font-[400] flex justify-center "
                style={{
                    width: `${progress}%`,
                    transition: `width ${duration}ms ease-in-out`,
                }}
            >{contant} </div>
        </div>
      </div>
    );
};

export default ProgressBar;
