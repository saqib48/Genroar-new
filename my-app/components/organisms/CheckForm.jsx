import React from 'react'
import Container from '../atoms/Container'
import Checkinput from '../molecules/Checkinput'
import Checktable from '../molecules/Checktable'

function CheckForm() {
    return (
        <Container>
            <div className='flex justify-between'>

                <Checkinput />
                <Checktable />

            </div>
        </Container>
    )
}

export default CheckForm