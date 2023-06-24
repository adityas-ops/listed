import Link from 'next/link'
import React from 'react'

function Card() {

  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <div className=' mt-[2rem] w-full h-[320px]   bg-[#fff] shadow-lg rounded-[20px]'>
      <form onSubmit={submit} className='p-[1.875rem] w-full h-full flex flex-col justify-between items-start'>
      <div className='flex flex-col'>
        <label htmlFor='email' className='text-[1rem] font-Lato text-[#000]'>Email</label>
        <input type='email'  id='email' className='w-[325px] h-[40px] mt-[0.625rem] border-[1px] bg-[#EAEAEA] border-none rounded-[10px] font-Lato font-[1rem] px-[1rem] outline-none text-[#000] placeholder-black' placeholder='johndoe@gmail.com' />
      </div>
      <div className=' flex flex-col'>
        <label htmlFor='password' className='text-[1rem] font-Lato text-[#000]'>Password</label>
        <input type='password'  id='password' value="12345678" className='w-[325px] h-[40px] mt-[0.625rem] border-[1px] bg-[#EAEAEA] border-none rounded-[10px] font-Lato font-[1rem] px-[1rem] outline-none text-[#000]' placeholder='AdityaSh'/>
      </div>
      
      <Link href="#" className='text-[#346BD4] text-[1rem] font-Lato'>
      <button className=''>
      Forgot password?
      </button>
      </Link>
      <Link href="#">
        <button className='w-[325px] h-[45px] rounded-[10px] bg-black text-white font-Montserrat font-[700]'>
          Sign in
        </button>
      </Link>
      </form>
    </div>
  )
}

export default Card