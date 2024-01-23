// import React, { useEffect, useState } from 'react'
// import SearchIcon from '@mui/icons-material/Search';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { IconButton } from '@mui/material';
// import { db } from '../../Config/firebase';
// import { query, collection, onSnapshot } from 'firebase/firestore';
// import StarIcon from '@mui/icons-material/Star';
// import DoneAllIcon from '@mui/icons-material/DoneAll';
// import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
// import { handleStatusChange, deleteTask } from '../../Service/todoFunction';

// function HomeRightSection() {
//   const [id, setId] = useState(-1)
//   const [showSug, setShowSug] = useState(false)

//   const [allTodos, setAllTodos] = useState([])
//   const [selectedFilter, setSelectedFilter] = useState('All');
//   const [searchInput, SetSearchInput] = useState("");


//   useEffect(() => {   /* Data fetching and storing from firebase*/
//     try {
//       const q = query(collection(db, 'todos'));
//       const unsub = onSnapshot(q, (querySnapshot) => {
//         let todosArray = []
//         querySnapshot.forEach((doc) => {
//           todosArray.push({ ...doc.data(), id: doc.id })
//         })
//         todosArray.sort((a, b) => b.id - a.id);
//         setAllTodos(todosArray)
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }, [])


//   // Function for filtering data 
//   let filteredData
//   if (selectedFilter === 'All') {
//     filteredData = allTodos
//   } else {
//     filteredData = allTodos.filter((item) => {
//       return item?.status?.includes(selectedFilter)
//     })
//   }

//   // Managing the  Modal from listing Tasks 
//   const showSuggetion = (index) => {
//     setId(index)
//     showSug ? setShowSug(false) : setShowSug(true)
//   }



//   return (
//     <>
//         <div className='w-1/2 h-full flex items-center'>
//           <div className='w-full h-[89%] border-l-[1.5px] flex flex-col items-center justify-evenly  border-l-slate-200'>
//             <div className='h-[20%] w-9/12 bg-white flex flex-col justify-around'>
//               <h1 className='font-semibold'>TODO LIST</h1>
//               <div className='flex justify-between'>
//                 <div className='w-[240px]  border rounded-sm  border-[#D9D9D9] flex  justify-center items-center h-[38px]'>
//                   <input onChange={(e) => SetSearchInput(e.target.value)} type="search" placeholder='Search' className='h-full placeholder-[#00000096]  w-[85%] outline-none' />
//                   <SearchIcon className='hover:scale-110 cursor-pointer' />
//                 </div>
//                 <div className='w-[160px] h-[38px] border rounded-sm  px-2 cursor-pointer border-[#D9D9D9]'>
//                   <select
//                     name="Filter"
//                     onChange={(e) => setSelectedFilter(e.target.value)}
//                     className='w-full h-full outline-none cursor-pointer'>                                <option value="" className='hidden'>Filter By</option>
//                     <option value="All">All</option>
//                     <option value="Completed">Completed</option>
//                     <option value="Favourite">Favourite</option>
//                     <option value="Delete">Deleted</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <div className='h-[70%] w-9/12  flex flex-col justify-end '>
//               <div className='w-full h-[90%] overflow-x-hidden overflow-y-scroll  space-y-1'>
//                 {filteredData?.filter((item)=>{
//                   return item.title.toLowerCase().includes(searchInput.toLowerCase())
//                 }).map((item, index) => {
//                   return <div key={item.id} className='flex relative items-center p-2 border-b border-b-[#00000026] justify-between'>
//                     <div className='w-1/2'>
//                       <h1 className='text-sm font-semibold'>{item.title}</h1>
//                       <small className='text-xs text-slate-700'>{item.description}</small>
//                     </div>
//                     <div>
//                       {item?.status?.includes('Favourite') && <StarIcon fontSize='inherit' className='text-orange-400 mr-2' />}
//                       {item?.status?.includes('Completed') && <DoneAllIcon fontSize='inherit' className='text-blue-600' />}
//                       {item?.status?.includes('Delete') ?
//                         <IconButton onClick={() => showSuggetion(index)}>
//                           <RestoreFromTrashIcon className='text-gray-700 cursor-pointer' />
//                         </IconButton> :
//                         <IconButton onClick={() => showSuggetion(index)}>
//                           <MoreVertIcon className='text-gray-700 cursor-pointer' />
//                         </IconButton>}
//                     </div>
//                     {id === index && showSug &&
//                       <div className='absolute w-[5.5rem] shadow-2xl text-slate-700 cursor-pointer border text-xs font-semibold h-[5rem] flex flex-col justify-evenly rounded-sm  z-10  space-y-0.5 bg-white -right-0.5 -bottom-16'>
//                         {!item?.status?.includes('Delete') ? <>
//                           <p onClick={() => handleStatusChange(item.id, 'Completed',setShowSug)} className='pl-2 hover:bg-slate-200 py-1'>Completed</p>
//                           <p onClick={() => handleStatusChange(item.id, 'Favourite',setShowSug)} className='pl-2 hover:bg-slate-200 py-1'>Favourite</p>
//                           <p onClick={() => handleStatusChange(item.id, 'Delete',setShowSug)} className='pl-2 hover:bg-slate-200 py-1'>Delete</p>
//                         </> : <p  className='p-2 text-red-600'>remove item permenantly from the list!
//                                   <span onClick={()=>deleteTask(item.id,setShowSug)} className='block text-center border py-1 my-1 bg-black text-white rounded'>Proceed</span>
//                             </p>
//                             }
//                       </div>
//                     }
//                   </div>
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//     </>
//   )
// }

// export default HomeRightSection

import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { query, collection, onSnapshot } from 'firebase/firestore';
import TodoList from './TodoList';
import { handleStatusChange, deleteTask } from '../../Service/todoFunction';
import { db } from '../../Config/firebase';

function HomeRightSection() {
  const [id, setId] = useState(-1);
  const [showSug, setShowSug] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchInput, SetSearchInput] = useState('');

  useEffect(() => {
    try {
      const q = query(collection(db, 'todos'));
      const unsub = onSnapshot(q, (querySnapshot) => {
        let todosArray = [];
        querySnapshot.forEach((doc) => {
          todosArray.push({ ...doc.data(), id: doc.id });
        });
        todosArray.sort((a, b) => b.id - a.id);
        setAllTodos(todosArray);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
 
  // Filtering function
  let filteredData;
  if (selectedFilter === 'All') {
    filteredData = allTodos.sort((a,b )=> b.id - a.id)
  } else {
    filteredData = allTodos.filter((item) => item?.status?.includes(selectedFilter)).sort((a,b)=>b.id - a.id)
  }

  // Modal suggesion management
  const showSuggestion = (index) => {
    setId(index);
    showSug ? setShowSug(false) : setShowSug(true);
  };

  return (
    <>
      <div className='w-1/2 h-full flex items-center'>
        <div className='w-full h-[89%] border-l-[1.5px] flex flex-col items-center justify-evenly  border-l-slate-200'>
          <div className='h-[20%] w-9/12 bg-white flex flex-col justify-around'>
            <h1 className='font-semibold'>TODO LIST</h1>
            <div className='flex justify-between'>

              {/* Search Section */}
              <div className='w-[240px]  border rounded-sm  border-[#D9D9D9] flex  justify-center items-center h-[38px]'>
                <input onChange={(e) => SetSearchInput(e.target.value)} type="search" placeholder='Search' className='h-full placeholder-[#00000096]  w-[85%] outline-none' />
                <SearchIcon className='hover:scale-110 cursor-pointer' />
              </div>

                {/* Filtering Section */}
              <div className='w-[160px] h-[38px] border rounded-sm  px-2 cursor-pointer border-[#D9D9D9]'>
                <select
                  name="Filter"
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className='w-full h-full outline-none cursor-pointer'>
                  <option value="" className='hidden'>Filter By</option>
                  <option value="All">All</option>
                  <option value="Completed">Completed</option>
                  <option value="Favourite">Favourite</option>
                  <option value="Delete">Deleted</option>
                </select>
              </div>
            </div>
          </div>

          {/* Listing Component */}
          <div className='h-[70%] w-9/12  flex flex-col justify-end '>
            <TodoList id={id} setShowSug={setShowSug} showSug={showSug} showSuggestion={showSuggestion} data={filteredData.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()))}  handleStatusChange={handleStatusChange} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeRightSection;
