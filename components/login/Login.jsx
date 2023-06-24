import React from 'react'
import Chips from './Chips'
import Card from './Card'
import {  signIn } from "next-auth/react"
function Login() {

      
  return (

     
    <>
      <div className='w-screen h-screen flex'>
      <div className='flex-[41%] w-full h-full bg-black flex items-center justify-center'>
      <h1 className='text-white text-[4.5rem] font-[700]'>
      Board.
      </h1>
      </div>
      <div className='flex-[59%] h-full flex items-center justify-center bg-[#F5F5F5]'>
      <div className='w-[385px] ml-[0.75rem]'>
        <p className='text-[2.25rem] font-[700] text-[#000] '>Sign In</p>
        <p className=' mt-[0.31rem] font-Lato'>Sign in to your account</p>
        <div className='w-full flex justify-between mt-[1.62rem]'>
          <Chips 
          img='/images/google-icon-1.svg'
          title='Sign in with Google'
          link={
            ()=>{
              signIn('google')
      
            }

          }
          />
   
          <Chips 
          img='/images/apple-1.svg'
          title='Sign in with Apple'
          link={()=>{
            signIn('apple')
          }}
          />
        </div>
        <Card/>
      </div>
      </div>
      </div>
    </>
  )
}

export default Login