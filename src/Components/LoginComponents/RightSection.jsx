import React from 'react'

function RightSection() {
  return (
    <>
        <div className='   w-full sm:w-[50%] h-[50%] sm:h-full relative flex flex-col items-end overflow-hidden'>
             {/* Top Lamp images */}
          <img src="lamp.png" className='h-[10rem] w-24 absolute right-1/2 transform-translate-x-35%' alt="lamp" /> {/* Lamp Image */}
           
            {/* boy and purple-bg Images Div*/}
          <div className='w-[90%] h-full relative flex justify-end items-end'> 
            <img src="Rectangle.png" className='absolute w-[70%] md:w-[40%] h-[40%] top-1/3 left-1/3 transform-translate-50%-50%' alt="" />
            <img className='h-[94%]  w-full' src="/Rectangle1.png" alt="" />
          </div>
        </div>
    </>
  )
}

export default RightSection