
import React, { useState } from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";

const Contactproject = () => {
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setsubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('data from inputs', Name);
        console.log('data from inputs', email);
        console.log('data from inputs', subject);
        console.log('data from inputs', message);
    }

    return (

        <div className='w-[100%]'>
            <div className='pt-[5%]'>
                <Heading level='3'>Tell Us Your Project</Heading>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="pt-[15px]">
                    <div className='font-[600] text-[14px] mb-[10px] text-[#242424]'>
                        <Label>
                            Your Name (required)
                        </Label>                 </div>
                    <Input  variant='five' placeholder="Name*" type="text" value={Name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="pt-[20px]">
                    <div className='font-[600] text-[14px] mb-[10px] text-[#242424]'>
                        <Label>
                            Your Name (required)
                        </Label>                 </div>
                    <Input  variant="five" type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="pt-[20px]">
                    <div className='font-[600] text-[14px] mb-[10px] text-[#242424]'>
                        <Label>
                            Your Name (required)
                        </Label>                 </div>
                    <Input  variant="five" type="text" placeholder="Subject*" value={subject} onChange={(e) => setsubject(e.target.value)} />
                </div>

                <div className="pt-[20px]">
                    <div className='font-[600] text-[14px] mb-[10px] text-[#242424]'>
                        <Label>
                            Your Name (required)
                        </Label>                 </div>
                    <textarea variant="five" type="text" placeholder=" Message*" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div className="pt-[6%]">
        <button type="submit" className="bg-[#ff6a28] h-[40px] hover:bg-[#242424] hpver:text-white cursor-pointer font-[500] tex-[12px] text-center w-[140px] py-[12px] px-[30px]  text-white"        
        >send</button>
                </div>

            </form>
        </div>
    )
}

export default Contactproject
