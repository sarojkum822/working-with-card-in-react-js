import React from 'react'
import { SiConstruct3 } from "react-icons/si";
import { FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


const Card = ({ data, reference }) => {
    return (
        <motion.div drag dragConstraints={reference} className='relative text-white w-60 h-72 bg-zinc-900/90 px-8 py-10 rounded-[30px] overflow-hidden'>
            <SiConstruct3 />
            <div className='mt-3 rounded-full justify-center items-center'>
                {data.image && <img src={data.image} alt="Card Image" className="mb-4" />}
            </div>
            <p className='text-xs mt-1 font-semibold leading-tight'>{data.desc}</p>
            <div className='absolute footer bottom-0  w-full left-0'>
                <div className='flex items-center justify-between px-7 py-1 mb-1'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex justify-center items-center'>
                        {data.close ? <IoClose /> : <FaDownload size=".8em" color='#fff' />}
                    </span>
                </div>
                {
                    data.tag.isOpen && (

                        <div className={`tag w-full py-2 ${data.tag.tagColor === "blue" ? "bg-blue-800" : "bg-green-800"} flex justify-center align-center`}>
                            <h3 className='text-sm'>{data.tag.tagtitle}</h3>
                        </div>
                    )
                }

            </div>

        </motion.div>

    )
}

export default Card