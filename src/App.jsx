import React from 'react';
import './App.css';

function App() {
  return (
    <div className='w-screen h-screen bg-white flex'>
      <div className='flex flex-col justify-around items-center w-[50%] h-full'>
        {/* Logo */}
        <div className='h-[25%] w-10/12 flex items-center'>
          <img src="Group.png" className='h-10 w-8 ml-2' alt="" />
        </div>

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

      {/* Right Section */}
      <div className='w-[50%] h-full relative flex flex-col items-end'>
        {/* Lamp Image */}
        <img src="lamp.png" className='h-[10rem] w-24 absolute right-1/2 transform-translate-x-35%' alt="" />
        {/* Images boy and bg-purple */}
        <div className='w-[90%] h-full relative flex justify-end items-end'>
          <img src="Rectangle.png" className='absolute w-[40%] h-[40%] top-1/3 left-1/3 transform-translate-50%-50%' alt="" />
          <img className='h-[94%] w-full' src="/Rectangle1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
