import React from 'react'
import { HomeLatestBlogSlider } from '../molecules/HomeLatestBlogSlider'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'


export const HomeLastestBlog = () => {
  return (
    <>
    <div className=" my-[5%] w-3/4 m-auto">
      <div className='flex flex-col gap-2 items-center mb-8'>
          <Heading level='2'>Latest Blogs</Heading>
          <Paragraph>Contemporary, minimal and modern designs embody the Lavish Alice handwriting</Paragraph>
      </div>
      <HomeLatestBlogSlider />
      
    </div>
    <div className='w-3/5 m-auto border-b-[1px] border-[#ddd] mb-1'></div>
    </>
  )
}
