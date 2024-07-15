import React from 'react'

function Map() {
    return (
        <div className='py-[5%] px-[10px]'>
            <div id="embed-map-canvas" className=" height:100% width:100% max-width:100% " >
                <iframe className=" h-[400px]  w-[100%] border:0 " frameborder="0"
                    src="https://www.google.com/maps/embed/v1/place?q=al+hafiz+mobile+shop,Garha+Near+Dhol+Sikandar,+Chiniot,+Punjab+35400,+Pakistan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                </iframe>
            </div>
        </div>
    )
}

export default Map