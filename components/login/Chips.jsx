import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Chips({img,title,link}) {
  return (
    <>
    <div className='w-[180px] h-[30px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
        <button onClick={link} className=' flex items-center justify-center'>
            <Image src={img} height={14} width={14} alt={title}/>
            <p className='text-[0.75rem] font-Montserrat text-[#858585] ml-[0.62rem]'>{title}</p>
        </button>
        </div>
    </>
  )
}

export default Chips