import React from 'react';
// import ProgressBar from './ProgressBar';
import ProgressBar from '../molecules/Progressbar';
import Heading from '../atoms/Heading';
import Container from '../atoms/Container';

const Progress = () => {
    return (
        <Container>
        <div className='pt-[8%]'>
           <div className='relative top-[30px]'>
            <Heading level='4'>We have Skills to show</Heading>
           </div>
           <div className='w-[100%] gap-[20px]  flex'>
           <div className='w-[50%]  gap-[30px] flex-col flex   pt-[5%] ' >
            <div className="w-[100%]"><ProgressBar targetProgress={60} duration={2000}  contant={"html/css"}  discount={"60%"} /></div>
            <div className="w-[100%]"><ProgressBar targetProgress={90} duration={2000}  contant={"ecommerce theme"}  discount={"90%"} /></div> 
            <div className="w-[100%]"><ProgressBar targetProgress={70} duration={2000}  contant={"Typhography"}  discount={"70%"} /></div> 
            <div className="w-[100%]"><ProgressBar targetProgress={80} duration={2000}  contant={"Branding"}  discount={"80%"} /></div> 
            
            </div>

            
            <div className='w-[50%]'>
                <img src="/assits/images/about2.webp" alt="" />
            </div>
           </div>

           
        </div>
        </Container>
        
    );
};

export default Progress;
