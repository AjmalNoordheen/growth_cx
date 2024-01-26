import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { query, collection, onSnapshot, where } from 'firebase/firestore';
import TodoList from './TodoList';
import { db } from '../../Config/firebase';
import '../../index.css'
import { useSelector } from 'react-redux';

function HomeRightSection() {
  const [id, setId] = useState(-1);
  const [showSug, setShowSug] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchInput, SetSearchInput] = useState('');
  const user = useSelector((store)=>store.user.email)

  useEffect(() => {
    try {
      if(user){
        const q = query(collection(db, 'todos'));
        const unsub = onSnapshot(q, (querySnapshot) => {
          let todosArray = [];

          querySnapshot.forEach((doc) => {
            if(doc.data().userId === user){
              todosArray.push({ ...doc.data(), id: doc.id });
            } 
          });
          todosArray.sort((a, b) => b.id - a.id);
          setAllTodos(todosArray);
        });
      }
      
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
      <div className='HomeRightCont md:w-1/2 h-1/2 sm:h-full flex items-center'>
        <div className='w-full h-[89%] border-l-[1.5px] flex flex-col items-center justify-evenly  border-l-slate-200'>
          <div className='h-[20%] w-11/12  sm:w-10/12 xl:w-9/12 bg-white flex flex-col justify-around'>
            <h1 className='font-semibold'>TODO LIST</h1>
            <div className='flex justify-between'>

              {/* Search Section */}
              <div className='w-[240px] md:w-[220px] xl:w-[240px]  border rounded-sm  border-[#D9D9D9] flex  justify-center items-center h-[38px]'>
                <input onChange={(e) => SetSearchInput(e.target.value)} type="search" placeholder='Search' className='h-full placeholder-[#00000096]  w-[85%] outline-none' />
                <SearchIcon className='hover:scale-110 cursor-pointer' />
              </div>

                {/* Filtering Section */}
              <div className='w-[160px] md:w-[130px] xl:w-[160px] h-[38px] border rounded-sm  px-2 cursor-pointer border-[#D9D9D9]'>
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
          <div className='h-[70%] w-11/12 sm:w-10/12 xl:w-9/12  flex flex-col justify-end '>
            <TodoList id={id} setShowSug={setShowSug} showSug={showSug} showSuggestion={showSuggestion} data={filteredData.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()))}   />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeRightSection;
