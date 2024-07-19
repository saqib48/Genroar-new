import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Paragraph from '../atoms/Paragraph'

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "black" }}
        onClick={onClick}
      />
    );
  }


export const HomeLatestBlogSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
  return (
    <div className=''>
        <Slider {...settings}>
        {data.map((d) => (
            <div className='w-[352px] mr-4 '>
                <div>
                    <img className='hover:opacity-45 hover:transition-all o.25 ease 0s' src={d.imgsrc} alt={d.imgalt} />
                </div>
                <div className='flex flex-col gap-2 mt-3'>
                    <h2 className='text-[18px] leading-[18px] font-[700] text-[#242424] hover:text-[#ff6a28] hover:transition-all hover:cursor-pointer' >{d.postHeading}</h2>
                    <div className='flex gap-1'>
                        <p className='text-[14px]  text-[#747474] font-[400] leading-[30px]'>{d.postT1}</p>
                        <p className='text-[14px]  text-[#ff6a28] font-[400] leading-[30px]'>{d.postT2}</p>
                        <p className='text-[14px]  text-[#747474] font-[400] leading-[30px]'>{d.postT3}</p>
                    </div>
                    <p className=' text-[14px] text-[#747474] font-[400] leading-[22px]'>{d.postdesc}</p>
                </div>
            </div>
        ))}
        </Slider>
    </div>
  )
}

const data = [
    {  
        imgsrc:'/assits/images/blog1.webp',
        imgalt:'blog1',
        postHeading:'Dior F/W 2015 First Fashion Experience',
        postT1: 'By',
        postT2: 'Ecommerce theme',
        postT3: '/ 30 Oct 2017',
        postdesc:'Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...'
        
    },
    {
        imgsrc:'/assits/images/blog2.webp',
        imgalt:'blog2',
        postHeading:'London Fashion Week & Royal Day',
        postT1: 'By',
        postT2: 'Ecommerce theme',
        postT3: '/ 30 Oct 2017',
        postdesc:'Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...'
    },
    {
        imgsrc:'/assits/images/blog3.webp',
        imgalt:'blog3',
        postHeading:'Dior F/W 2015 First Fashion Experience',
        postT1: 'By',
        postT2: 'Ecommerce theme',
        postT3: '/ 30 Oct 2017',
        postdesc:'Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...'
    },
    {
        imgsrc:'/assits/images/blog1.webp',
        imgalt:'blog4',
        postHeading:'Dior F/W 2015 First Fashion Experience',
        postT1: 'By',
        postT2: 'Ecommerce theme',
        postT3: '/ 30 Oct 2017',
        postdesc:'Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...'
    },
    {
        imgsrc:'/assits/images/blog2.webp',
        imgalt:'blog5',
        postHeading:'Dior F/W 2015 First Fashion Experience',
        postT1: 'By',
        postT2: 'Ecommerce theme',
        postT3: '/ 30 Oct 2017',
        postdesc:'Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...'
    }
]
