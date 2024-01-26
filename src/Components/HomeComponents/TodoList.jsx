import React from 'react';
import TodoItem from './TodoItem';


// Listing of the tasks
const TodoList = ({ data, showSug,showSuggestion,id,setShowSug }) => {
  return (
    <div className='w-full h-[90%] overflow-x-hidden overflow-y-scroll  space-y-1'>
      {data.map((item, index) => (
        <TodoItem key={item.id} item={item} setShowSug={setShowSug} id={id} index={index} showSug={showSug}
         showSuggestion={showSuggestion}/>
      ))}
    </div>
  );
};

export default TodoList;
