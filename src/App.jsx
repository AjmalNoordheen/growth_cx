import React from 'react';
import './App.css';
import Login from './Pages/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './Pages/HomePage';

function App() {
  const user = useSelector((store)=>store.user?.email)

  return (
    <>
      <Routes>
        <Route path='/' index element={user ? <Navigate to={'/home'}/> : <Login/>}/>
        <Route path='/home' element={user ? <HomePage/> : <Navigate to={'/'}/>}/>
      </Routes>
      <ToastContainer theme='dark' autoClose={2000} />
    </>
  );
}

export default App;
