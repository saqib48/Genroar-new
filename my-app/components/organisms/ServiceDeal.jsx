import React from 'react'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Button from '../atoms/Button'
import { FaAngleRight } from "react-icons/fa6";

function ServiceDeal() {
    return (
        <div className='flex gap-[25px]'>
            <div className=" w-[250%]">
                <img src="/assits/images/services4.webp" alt="" />
            </div>
            <div className="text-center grid gap-[20px]  pt-[6%]  ">
                <Heading level='9'>UNLIMITED IDEAS</Heading>
                <Paragraph>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.</Paragraph>
                <div className="flex justify-center  ">
                    <Button variant='rectangle'>MORE INFO <FaAngleRight /> </Button>
                </div>
            </div>
        </div>
    )
}

export default ServiceDeal