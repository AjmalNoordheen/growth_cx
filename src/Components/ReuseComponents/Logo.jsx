import React from 'react'
import { auth } from '../../Config/firebase'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { UserLogout } from '../../Redux/Slice'

function Logo() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation('')

  const logout = async () => {
    try {
      await auth.signOut()
      dispatch(UserLogout())
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='h-[25%] w-10/12 flex items-center justify-between'>
      <img src="Group.png" className='h-10 w-8 ml-2' alt="logo" /> {/* Logo */}
      {location.pathname === '/home' && <button className='font-semibold border rounded px-2 py-1 hover:bg-black hover:text-white hover:border-blue-300' onClick={logout}>Logout</button>}
    </div>
  )
}

export default Logo