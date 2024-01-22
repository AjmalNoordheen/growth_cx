import React from 'react'
import Logo from '../ReuseComponents/Logo'

function Home() {
  return (
    <>
        <div className='w-screen h-screen bg-white flex'>
            {/* Left Section Completed */}
          <div className='flex flex-col justify-around items-center w-[50%] h-full'>
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
                       <div className='w-1/2 flex flex-col items-center gap-y-4'>
                         <div className='w-[90%] h-10 bg-red-300 border border-slate-200'> 
                            <input type="text" placeholder='Title' className='w-full h-full pl-2 text-black placeholder-black'/>
                         </div>
                         <div className='w-[90%] h-10 bg-red-300 border border-slate-200'> 
                            <input type="text" placeholder='Description' className='w-full h-full pl-2 text-black placeholder-black'/>
                         </div>
                       </div>
                       <button className='bg-[#597EF7] text-white w-[40%] h-10 font-semibold border border-[#1890FF]'>Add</button>
                </div>
          </div>

        </div>
    </>
  )
}

export default Home