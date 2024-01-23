import React from 'react'
import Logo from '../ReuseComponents/Logo'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app, auth,provider } from '../../Config/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { UserLogin } from '../../Redux/Slice';

function LeftSection() {
  const navigate = useNavigate()
  const dispatch = useDispatch('')

  const signUp = async () => {
    try {
      provider.setCustomParameters({ prompt: 'select_account' });
  
      const res = await signInWithPopup(auth, provider);
      if (res.user) {
        toast.success('Successfully logged in')
        dispatch(UserLogin({email:res.user.email}))
        navigate('/home');
      }
    } catch (error) {
      if (error.code === 'auth/popup-blocked') {
        alert(
          'Popup blocked! Please enable pop-ups for this website to sign in with Google.'
        );
      } else {
        console.error(error);
      }
    }
  }
  
  return (
    <>
        <div className='flex flex-col justify-around items-center w-full sm:w-[50%] h-[50%] sm:h-full'>
            <Logo/>  {/* Top Logo div */}
           {/* Login Section */} 
          <div className='h-[100%] sm:h-[70%] w-full sm:w-10/12 flex justify-center'> 
            <div className='flex flex-col items-center space-y-10 sm:space-y-0 justify-center sm:justify-evenly h-[80%] md:h-[60%] w-8/12 mt-2'>
              <div className='flex flex-col justify-center gap-y-3  items-center'>
                <h1 className='font-medium text-lg'>LOGIN</h1>
                <p className='font-normal text-[#0000008c] text-center text-xs sm:text-sm lg:text-base xl:text-sm leading-[15px]  sm:leading-[20px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae
                  faucibus nibh dolor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
                  at eleifend feugiat vitae faucibus nibh dolor dui.
                </p>
              </div>

              {/* Google Sign-In Button */}
              <div onClick={signUp} className=' w-full sm:w-10/12 xl:w-8/12  h-9 lg:h-12 xl:h-9 bg-[#597EF7] cursor-pointer px-0.5 flex justify-center items-center'>
                <div className='bg-white h-[87%] w-2/12 rounded-sm flex justify-center items-center'>
                  <img className='h-6' src="5847f9cbcef1014c0b5e48c8.png" alt="" />
                </div>
                <div className='w-10/12 text-center'>
                  <p className=' text-sm lg:text-base text-white'>Sign in using Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default LeftSection