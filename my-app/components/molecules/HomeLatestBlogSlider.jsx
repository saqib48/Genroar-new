import React from 'react'

export const HomeLatestBlogSlider = () => {
  return (
    <div className=''>
        {data.map((d) => (
            <div>
                <div>
                    <img src={d.imgsrc} alt={d.imgalt} />
                </div>
                <div>
                    
                </div>
            </div>
        ))}
    </div>
  )
}

const data = [
    {
        postTitle: '',
        imgsrc:'',
        imgalt:'',
        postdesc:''

    },
    {
        postTitle: '',
        imgsrc:'',
        postdesc:''
    },
    {
        postTitle: '',
        imgsrc:'',
        postdesc:''
    },
    {
        postTitle: '',
        imgsrc:'',
        postdesc:''
    },
    {
        postTitle: '',
        imgsrc:'',
        postdesc:''
    }
]
