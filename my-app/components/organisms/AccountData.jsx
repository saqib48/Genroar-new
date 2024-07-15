import React from 'react'
import AnchorTag from '../atoms/anchorTag'
import "../../app/globals.css"
import Span from '../atoms/Span'
import Container from '../atoms/Container'

function AccountData() {
    return (
        <Container>

            <div className='pt-[4%]'>
                <div className='flex gap-[5px]'>
                    <AnchorTag variant="success">Home</AnchorTag>
                    <span className='text-[#999] text-[12px]'>/</span>
                    <Span> My Account</Span>
                </div>
            </div>
        </Container>

    )
}

export default AccountData;