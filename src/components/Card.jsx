import React from 'react'
import { SiConstruct3 } from "react-icons/si";
import { FaDownload } from "react-icons/fa";


const Card = ({ data }) => {
    return (
        <div className='relative text-white w-60 h-72 bg-zinc-900/90 px-8 py-10 rounded-[30px] overflow-hidden'>
            <SiConstruct3 />
            <p className='text-xs mt-6 font-semibold leading-tight'>{data.desc}</p>
            <div className='absolute footer bottom-0  w-full left-0'>
                <div className='flex items-center justify-between px-5 py-3 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex justify-center items-center'>
                        <FaDownload size=".8em" color='#fff' />
                    </span>
                </div>
                <div className='tag w-full py-2 bg-${data.tag.tagColor} flex justify-center allign-center bg-green-800'>
                    <h3 className='text-sm'>Download now</h3>
                </div>
            </div>

        </div>

    )
}

export default Card