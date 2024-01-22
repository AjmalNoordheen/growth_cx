import React from 'react'
import Logo from '../ReuseComponents/Logo'

function LeftSection() {
  return (
    <>
        <div className='flex flex-col justify-around items-center w-[50%] h-full'>
            <Logo/>  {/* Top Logo div */}
           
           {/* Login Section */} 
          <div className='h-[70%] w-10/12 flex justify-center'> 
            <div className='flex flex-col items-center justify-evenly h-[60%] w-8/12 mt-2'>
              <div className='flex flex-col justify-center gap-y-3 items-center'>
                <h1 className='font-medium text-lg'>LOGIN</h1>
                <p className='font-normal text-[#0000008c] text-center text-sm leading-[20px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae
                  faucibus nibh dolor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
                  at eleifend feugiat vitae faucibus nibh dolor dui.
                </p>
              </div>

              {/* Google Sign-In Button */}
              <div className='w-8/12 h-9 bg-[#597EF7] cursor-pointer px-0.5 flex justify-center items-center'>
                <div className='bg-white h-[87%] w-2/12 rounded-sm flex justify-center items-center'>
                  <img className='h-6' src="5847f9cbcef1014c0b5e48c8.png" alt="" />
                </div>
                <div className='w-10/12 text-center'>
                  <p className='text-base text-white'>Sign in using Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default LeftSection