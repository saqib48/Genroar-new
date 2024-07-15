import React from 'react'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Button from '../atoms/Button'

function Ried() {
    return (
        <Container>
        
            <div className='' >
                <div className='top-[40px] relative '>
                    <Heading level='2'>Welcome To Reid Store!</Heading>
                </div>
                <div className=''>
                    <div className='flex'>
                        <div className='w-[50%]  py-[5%]  '>
                            <Paragraph>Quibusdam perspiciatis pariatur magnam ducimus excepturi error libero <br /> provident animi laboriosam maiores ad explicabo ea laudantium nostrum dolor <br /> distinctio, quas fugiat doloribus, sit, possimus obcaecati ab quo vel commodi <br /> eum. Laudantium libero, voluptate rerum sunt hic,  </Paragraph>
                            <div className='py-[20px] '>
                                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse numquam <br /> blanditiis quos, fuga, aspernatur doloribus expedita, soluta dolore cumque.</Paragraph>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <img src="/assits/images/about1.webp" className='w-[100%]' alt="" />
                        </div>
                    </div>
                    <div className='relative top-[-58px]'>
                        <Button variant="rectangle">View Work</Button>
                    </div>
                </div>
            </div>
            </Container>
    )
}

export default Ried