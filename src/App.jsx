import React from 'react';
import './App.css';
import Login from './Pages/Login';
import Home from './Components/HomeComponents/Home'
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((store)=>store.user?.email)

  return (
    <>
      <Routes>
        <Route path='/' index element={user ? <Navigate to={'/home'}/> : <Login/>}/>
        <Route path='/home' element={user ? <Home/> : <Navigate to={'/'}/>}/>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
