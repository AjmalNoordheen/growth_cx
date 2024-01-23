import React from 'react'
import HomeRightSection from '../Components/HomeComponents/HomeRightSection'
import HomeLeftSection from '../Components/HomeComponents/HomeLeftSection'

function HomePage() {
  return (
    <div className='w-screen h-screen bg-white flex overflow-x-hidden'>
      <HomeLeftSection/>
      <HomeRightSection/>
    </div>
  )
}

export default HomePage