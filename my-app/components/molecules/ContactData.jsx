import React from 'react'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import AnchorTag from '../atoms/anchorTag';
import { IoMdMail } from "react-icons/io";

function ContactData() {
  return (
    <div className=''>
        
            <div className=''>
                <div className='pt-[6%] '>
                    <Heading level='3'>Contact Us</Heading>
                </div>

                    <div className=''>
                        <Paragraph>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium  <br /> lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram   anteposuerit litterarum formas human. qui sequitur mutationem consuetudium   lectorum.  Mirum est notare quam</Paragraph>
                    </div>
                    <div className='mt-[20px]'>
                     <hr />            
                    <div className='flex items-center gap-[20px] py-[10px]'> 
                    <FaAddressCard className='text-[#747474] text-[14px]' />
                    <Paragraph> Address : Your address goes here.</Paragraph>
                    </div>
                    <hr />
                    <div className='flex items-center gap-[20px] py-[10px]'> 
                    <FaPhoneAlt className='text-[#747474] text-[13px]' />
                    <AnchorTag variant='contact'> demo@example.com</AnchorTag>
                    </div>
                    <hr />
                    <div className='flex items-center gap-[20px] py-[10px]'> 
                    <IoMdMail className='text-[#747474] text-[14px]' />
                    <Paragraph> 0(1234) 567 890</Paragraph>
                    </div>
                    <hr />
                    </div>

            </div>
    </div>
  )
}

export default ContactData