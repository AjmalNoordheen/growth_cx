import React from 'react';
import TodoItem from './TodoItem';
import { handleStatusChange, deleteTask } from '../../Service/todoFunction';


// Listing of the tasks
const TodoList = ({ data, showSug,showSuggestion,id,setShowSug }) => {
  return (
    <div className='w-full h-[90%] overflow-x-hidden overflow-y-scroll  space-y-1'>
      {data.map((item, index) => (
        <TodoItem key={item.id} item={item} setShowSug={setShowSug} id={id} index={index} showSug={showSug}
         handleStatusChange={handleStatusChange} deleteTask={deleteTask} showSuggestion={showSuggestion}/>
      ))}
    </div>
  );
};

export default TodoList;
