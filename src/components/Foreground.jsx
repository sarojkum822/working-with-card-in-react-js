import React from 'react'
import Card from './Card'

const Foreground = () => {
    // const data=[
    //     desc,filesize,closeOrDownload,tagDetails
    // ];

    const data = [
        {
            desc: "This is a description",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagtitle: "download Now", tagColor: "blue" },
        }
    ];

    return (
        <>
            <div className='fixed top-0 left-0 z-[3] w-full h-screen '>
                {data.map((item, index) => (
                    <Card data={item} />
                ))}
            </div>

        </>
    )
}

export default Foreground