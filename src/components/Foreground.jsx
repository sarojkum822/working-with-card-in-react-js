import React, { useRef } from 'react'
import Card from './Card'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'

const Foreground = () => {
    // const data=[
    //     desc,filesize,closeOrDownload,tagDetails
    // ];

    const ref = useRef(null);

    const data = [
        {
            desc: "This is a description",
            image: img1,
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagtitle: "Upload Now", tagColor: "orange" },
        },
        {
            desc: "This is a description of 2nd card",
            image: img2,
            filesize: ".19mb",
            close: true,
            tag: { isOpen: true, tagtitle: "download Now", tagColor: "green" },
        }

        ,
        {
            desc: "This is a description of 3nd card",
            image: img1,
            filesize: ".119mb",
            close: true,
            tag: { isOpen: true, tagtitle: "download Now", tagColor: "yellow" },
        }

    ];

    return (
        <>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-5 p-10 flex-wrap'>
                {data.map((item, index) => (
                    <Card data={item} reference={ref} />
                ))}
            </div>

        </>
    )
}

export default Foreground