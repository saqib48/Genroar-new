import Heading from "../atoms/Heading";
import DashboardLayout from "@/components/molecules/Dashboardlayout";
import AnchorTag from "../atoms/anchorTag";
import Input from '../atoms/Input';
import Label from "../atoms/Label";
import Paragraph from "../atoms/Paragraph";



const AccountPage = () => {
    return (
        <div>

            <DashboardLayout>
                <div className="flex flex-col gap-[15px]">
                    <div className="my-[5px]"> <Heading level="4">Account Details</Heading></div>
                    <div className="flex items-center">

                        <Heading level="6">Already have an account?</Heading>
                        <div className="cursor-pointer">
                            <AnchorTag variant="check">Log in instead!</AnchorTag>
                        </div>

                    </div>
                    <div className="flex gap-[10px]">
                        <div className="flex items-center gap-[5px]">
                            <Input variant='check1'
                                type='radio'
                                name='options'
                                id='pay1'>
                            </Input>
                            <Label htmlFor="pay1">Mr.</Label>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <Input variant='check1'
                                type='radio'
                                name='options'
                                id='pay'>
                            </Input>
                            <Label htmlFor="pay">Mrs.</Label>

                        </div>
                    </div></div>
                <div className="flex flex-col gap-[15px] mt-[20px]">
                    <div className='flex flex-col gap-[5px]'>
                        <h2>First  Name</h2>
                        <Input variant='eleven' type='text' placeholder='' />
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <h2>Last Name</h2>
                        <Input variant='eleven' type='text' placeholder='' />
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <h2>Email</h2>
                        <Input variant='eleven' type='email' placeholder='' />
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <h2>Password</h2>
                        <Input variant='eleven' type='password  ' placeholder='' />
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <h2>Birthdate</h2>
                        <Input variant='eleven' type='password  ' placeholder='MM/DD/YYYY' />
                    </div>
                    <div>
                        <Paragraph>(E.g.: 05/31/1970)</Paragraph>
                        <div className='flex gap-[10px] items-center'>
                            <Input variant='check1' type='checkbox' placeholder='Create' id='check' />
                            <div>
                                <label htmlFor='check'> Receive offers from our partners</label>
                            </div>
                        </div></div>
                    <div>
                        <Paragraph> Sign up for our newsletter</Paragraph>
                        <div className='flex gap-[10px] items-center'>
                            <Input variant='check1' type='checkbox' placeholder='Create' id='check1' />
                            <div>
                                <label htmlFor='check1'>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</label>
                            </div>
                        </div></div>
                    <div>
                        <AnchorTag variant="check">Save</AnchorTag>
                    </div>

                </div>

            </DashboardLayout>

        </div>
    );
};

export default AccountPage;
