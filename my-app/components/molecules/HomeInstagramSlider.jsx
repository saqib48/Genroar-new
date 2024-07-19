import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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


export const HomeInstagramSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
  return (
    <div className='slider-container'>
        <Slider {...settings}>
        {data.map((d) => (
            <div className='w-[304px]'>
                    <img className=' hover:opacity-45 hover:transition-all' src={d.imgsrc} alt={d.imgalt} />
            </div>
        ))}
        </Slider>
    </div>
  )
}

const data = [
    {  
        imgsrc:'/assits/images/intagram1.webp',
        imgalt:'Instagram 1',
        
    },
    {
        imgsrc:'/assits/images/intagram2.webp',
        imgalt:'Instagram 2',
    },
    {
        imgsrc:'/assits/images/intagram3.webp',
        imgalt:'Instagram 3',
    },
    {
        imgsrc:'/assits/images/intagram4.webp',
        imgalt:'Instagram 4',
    },
    {
        imgsrc:'/assits/images/intagram5.webp',
        imgalt:'Instagram 5',
    },
    {
        imgsrc:'/assits/images/intagram1.webp',
        imgalt:'Instagram 6',
    },
    {
        imgsrc:'/assits/images/intagram2.webp',
        imgalt:'Instagram 7',
    },
    {
        imgsrc:'/assits/images/intagram3.webp',
        imgalt:'Instagram 8',
    },
]
