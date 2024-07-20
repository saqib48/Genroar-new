import React from 'react'
import GalleryImages from '../molecules/GalleryImages'
import Container from '../atoms/Container'
import GalleryDetails from '../molecules/GalleryDetails'

function Gallery() {
    return (
        <Container>
            <div>
                <div className='w-[100%] flex justify-between  mt-[30px]'>
                    <div className='w-[49%]'>  <GalleryImages /></div>
                    <div className='w-[49%]'> <GalleryDetails /></div>
                </div>
            </div>
        </Container>
    )
}

export default Gallery