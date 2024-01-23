import React, { useRef } from 'react'
import Logo from '../ReuseComponents/Logo'
import Form from './Form';
import '../../index.css'
function HomeLeftSection() {
    
  return (
    <>
        <div className='leftContainer flex flex-col justify-around items-center md:w-1/2 h-2/3 sm:h-full'>
          <Logo/>

          <div className='h-[70%] w-full flex flex-col items-center gap-y-8'>
            <div className='w-1/2 flex flex-col justify-center items-center'>
              <h1 className='font-semibold'>TODO</h1>
              <small className='text-[#00000091] pt-1 mt-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquet at eleifend feugiat vitae faucibus nibh dolor dui.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquet at eleifend feugiat vitae faucibus nibh dolor dui.
              </small>
            </div>

            <Form/>
          </div>
        </div>
    </>
  )
}

export default HomeLeftSection