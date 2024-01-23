import React, { useEffect, useRef, useState } from 'react'
import Logo from '../ReuseComponents/Logo'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { db } from '../../Config/firebase';
import { query,collection,addDoc, onSnapshot, doc, updateDoc } from 'firebase/firestore';

function Home() {
  const [id,setId] = useState(-1)
  const [showSug,setShowSug] = useState(false)
  const titleRef = useRef('')
  const descRef = useRef('')

  const [allTodos,setAllTodos] = useState([])

  useEffect(()=>{
    try {
      const q = query(collection(db,'todos'));

      const unsub = onSnapshot(q,(querySnapshot)=>{
        let todosArray = []
        querySnapshot.forEach((doc)=>{
          todosArray.push({...doc.data(),id: doc.id})
        })

        todosArray.sort((a, b) => b.id - a.id);
        setAllTodos(todosArray)
      })
    } catch (error) {
      console.log(error)
    }
  },[])


  const showSuggetion = (index)=>{
    setId(index)
    showSug ? setShowSug(false) : setShowSug(true)
  }

  // Submitting and saving the task to the firestore
  const submitTask =async (e)=>{
    try {
      e.preventDefault()
      if(titleRef.current.value && descRef.current.value){
        await addDoc(collection(db,'todos'),{
            title:titleRef.current.value,
            description:descRef.current.value,
            status:'pending'
        })
        titleRef.current.value = ''
        descRef.current.value = ''
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Change the status
  const handleStatusChange = async(todoId,status)=>{
    try {
      const todoDoc = doc(db, 'todos', todoId);
     const res = await updateDoc(todoDoc, { status });
     console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

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
                       <form onSubmit={submitTask} className='w-1/2 flex flex-col items-center gap-y-4' action="">
                        
                         <div className='w-[90%] h-10 bg-red-300 border border-slate-200'> 
                            <input required ref={titleRef} type="text" placeholder='Title' className='w-full h-full pl-2 outline-none text-black placeholder-black'/>
                         </div>
                         <div className='w-[90%] h-10 bg-red-300 border border-slate-200'> 
                            <input required ref={descRef} type="text" placeholder='Description' className='w-full h-full pl-2 outline-none text-black placeholder-black'/>
                         </div>
                       <button type='submit' className='bg-[#597EF7] text-white hover:bg-black w-[70%] h-10 font-semibold border border-[#1890FF]'>Add</button>
                       </form>
                </div>
          </div>

        {/* Right Section */}
            <div className='w-1/2 h-full flex items-center'>
                <div className='w-full h-[89%] border-l-[1.5px] flex flex-col items-center justify-evenly  border-l-slate-200'>
                    <div className='h-[20%] w-9/12 bg-white flex flex-col justify-around'>
                        <h1 className='font-semibold'>TODO LIST</h1>
                        <div className='flex justify-between'>
                         <div className='w-[240px]  border rounded-sm  border-[#D9D9D9] flex  justify-center items-center h-[38px]'>
                            <input type="search"  placeholder='Search' className='h-full placeholder-[#00000096]  w-[85%] outline-none'/>
                            <SearchIcon className='hover:scale-110 cursor-pointer'/>
                         </div>
                         <div className='w-[160px] h-[38px] border rounded-sm  px-2 cursor-pointer border-[#D9D9D9]'>
                            <select  name="Filter" className='w-full h-full outline-none cursor-pointer'  id="">
                                <option value="" className='hidden'>Filter By</option>
                                <option value="Completed">Completed</option>
                                <option value="Favourite">Favourite</option>
                                <option value="Deleted">Deleted</option>
                            </select>
                         </div>
                       </div> 
                    </div>
                    <div className='h-[70%] w-9/12  flex flex-col justify-end'>
                        <div className='w-full h-[90%]  space-y-1'>
                            {allTodos.map((item,index)=>{
                            return <div className='flex relative items-center p-2 border-b border-b-[#00000026] justify-between'>
                                <div>
                                    <h1 className='text-sm font-semibold'>{item.title}</h1>
                                    <small className='text-xs text-slate-700'>{item.description}</small>
                                </div>
                                <IconButton onClick={()=>showSuggetion(index)}>
                                <MoreVertIcon  className='text-gray-700 cursor-pointer'/>
                                </IconButton>
                                {id === index && showSug &&
                                <div className='absolute w-[5.5rem] shadow-2xl text-slate-700 cursor-pointer border text-xs font-semibold h-[5rem] flex flex-col justify-evenly rounded-sm  z-10  space-y-0.5 bg-white -right-11 -bottom-16'>
                                  <p onClick={() => handleStatusChange(item.id, 'completed')} className='pl-2 hover:bg-slate-200 py-1'>Completed</p>
                                  <p onClick={() => handleStatusChange(item.id, 'Favourite')} className='pl-2 hover:bg-slate-200 py-1'>Favourite</p>
                                  <p onClick={() => handleStatusChange(item.id, 'Delete')} className='pl-2 hover:bg-slate-200 py-1'>Delete</p>
                                </div>
                                }
                            </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home