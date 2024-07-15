import React from 'react'
import Heading from '../atoms/Heading'
import Input from '../atoms/Input'
import Label from '../atoms/Label'
import Span from '../atoms/Span'
import AnchorTag from '../atoms/anchorTag'
import Button from '../atoms/Button'
import Container from '../atoms/Container'

function Register() {
    return (
        <Container>
            <div className=" flex gap-[28px] ">

                <div className='pt-[5%] w-[100%]' >
                    <div className='mb-[30px]'>
                        <Heading level='2'> Login</Heading>
                    </div>
                    <div className=' rounded-[10px] border p-[30px]'>
                        <div>
                            <div className='text-[20px]  my-[2%]'>
                                <Label>Username or Email</Label>
                                <Span>*</Span>

                            </div>
                            <Input variant='nine' />
                        </div>
                        <div className='pt-[15px]'>
                            <div className='text-[20px] my-[2%] '>
                                <Label>Password</Label>
                                <Span>*</Span>

                            </div>
                            <Input variant='nine' />
                        </div>
                        <div className='flex pt-[3%] justify-between'>
                            <AnchorTag variant='login Password'>Lost your password</AnchorTag>

                            <div className='text-[20px]  flex items-center gap-[20px]' >
                                <Label>
                                    <div className='flex gap-[10px]'>
                                        <Input type="checkbox" />
                                        Remember Me
                                    </div>
                                </Label>

                                <Button variant='filter'  >LOGIN</Button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* register */}
                <div className='pt-[5%] w-[100%]' >
                    <div className='mb-[30px]'>
                        <Heading level='2'>Register</Heading>
                    </div>
                    <div className=' rounded-[10px] border p-[30px]'>
                        <div>
                            <div className='text-[20px]  my-[2%]'>
                                <Label>Email</Label>
                                <Span>*</Span>

                            </div>
                            <Input variant='nine' />
                        </div>
                        <div className='pt-[15px]'>
                            <div className='text-[20px] my-[2%] '>
                                <Label>Password</Label>
                                <Span>*</Span>

                            </div>
                            <Input variant='nine' />
                        </div>
                        <div className='flex pt-[5%] justify-between'>

                            <div className='text-[20px]  pl-[80%]' >
                                

                                <Button variant='filter'  >REGISTER</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default Register