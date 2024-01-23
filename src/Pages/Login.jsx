import React from 'react'
import LeftSection from '../Components/LoginComponents/LeftSection'
import RightSection from '../Components/LoginComponents/RightSection'

function Login() {
  return (
    <div className='w-screen h-screen bg-white sm:flex '>
        <LeftSection/>
        <RightSection/>
    </div>
  )
}

export default Login