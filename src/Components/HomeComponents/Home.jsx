import React from 'react'
import Logo from '../ReuseComponents/Logo'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
                            <input type="text" placeholder='Title' className='w-full h-full pl-2 outline-none text-black placeholder-black'/>
                         </div>
                         <div className='w-[90%] h-10 bg-red-300 border border-slate-200'> 
                            <input type="text" placeholder='Description' className='w-full h-full pl-2 outline-none text-black placeholder-black'/>
                         </div>
                       </div>
                       <button className='bg-[#597EF7] text-white hover:bg-black w-[40%] h-10 font-semibold border border-[#1890FF]'>Add</button>
                </div>
          </div>

        {/* Right Section */}
            <div className='w-1/2 h-full flex items-center'>
                <div className='w-full h-[89%] border-l-[1.5px] flex flex-col items-center justify-evenly  border-l-slate-200'>
                    <div className='h-[20%] w-10/12 bg-white flex flex-col justify-around'>
                        <h1 className='font-semibold'>TODO LIST</h1>
                        <div className='flex justify-between'>
                         <div className='w-[240px]  border rounded-sm  border-[#D9D9D9] flex  justify-center items-center h-[38px]'>
                            <input type="search"  placeholder='Search' className='h-full placeholder-[#00000096]  w-[85%] outline-none'/>
                            <SearchIcon className='hover:scale-110'/>
                         </div>
                         <div className='w-[160px] h-[38px] border rounded-sm  border-[#D9D9D9]'>
                            <select  name="Filter" className='w-full h-full outline-none'  id="">
                                <option value="" className='hidden'>Filter By</option>
                                <option value="Completed">Completed</option>
                                <option value="Favourite">Favourite</option>
                                <option value="Deleted">Deleted</option>
                            </select>
                         </div>
                       </div> 
                    </div>
                    <div className='h-[70%] w-10/12  flex flex-col justify-end'>
                        <div className='w-full h-[90%]  space-y-1'>
                            {Array.from({length:5}).map(()=>{
                            return <div className='flex items-center p-2 border-b border-b-[#00000026] justify-between'>
                                <div>
                                    <h1>Todo Title 1</h1>
                                    <small>Description comes here</small>
                                </div>
                                <MoreVertIcon/>
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