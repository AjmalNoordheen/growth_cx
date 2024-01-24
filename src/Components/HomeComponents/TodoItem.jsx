import React from "react";
import { IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { handleStatusChange, deleteTask } from '../../Service/todoFunction';

const TodoItem = ({ item, index, showSug,showSuggestion,id,setShowSug }) => {
  

  return (
    <div className="flex relative items-center p-2 border-b border-b-[#00000026] justify-between">
      
      <div className="w-1/2">
        {item?.status?.includes("Delete") ? <s className="text-sm font-semibold block">{item.title}</s> : <h1 className="text-sm font-semibold">{item.title}</h1>}
        <small className="text-xs text-slate-700">{item.description}</small>
      </div>

      {/*Icons (tick,star,listDots) from the task Listing  */}
      <div>
        {item?.status?.includes("Favourite") && (
          <StarIcon fontSize="inherit" className="text-orange-400 mr-2" />)}
        {item?.status?.includes("Completed") && (
          <DoneAllIcon fontSize="inherit" className="text-blue-600" />)}
        {item?.status?.includes("Delete") ? (
          <IconButton onClick={() => showSuggestion(index)}>
            <RestoreFromTrashIcon className="text-gray-700 cursor-pointer" />
          </IconButton>) : (
          <IconButton onClick={() => showSuggestion(index)}>
            <MoreVertIcon className="text-gray-700 cursor-pointer" />
          </IconButton>)}
      </div>

      {/* Showing the modal of complete favourite and delete */}
      {id === index && showSug && (
        <div className="absolute w-[5.5rem] shadow-2xl text-slate-700 cursor-pointer border text-xs font-semibold h-[5rem] flex flex-col justify-evenly rounded-sm  z-10  space-y-0.5 bg-white -right-0.5 -bottom-16">
          {!item?.status?.includes("Delete") ? (
            <>
              <p onClick={() => handleStatusChange(item.id, "Completed",setShowSug)}
                className="pl-2 hover:bg-slate-200 py-1">
                {item?.status?.includes("Favourite") ? "Incomplete" :  "Complete"}
              </p>

              <p onClick={() => handleStatusChange(item.id, "Favourite",setShowSug)}
                className="pl-2 hover:bg-slate-200 py-1">
                {item?.status?.includes("Favourite") ? "Remove star" :  "Favourite"} 
              </p>

              <p onClick={() => handleStatusChange(item.id, "Delete",setShowSug)}
                className="pl-2 hover:bg-slate-200 py-1">
                Delete
              </p>
            </>
          ) : (
            // Modal for removing from the list
            <p className="p-2 text-red-600"> remove item permanently from the list!
              <span
                onClick={() => deleteTask(item.id,setShowSug)}
                className="block text-center border py-1 my-1 bg-black text-white rounded">
                Proceed
              </span>
            </p>)}
        </div>
      )}
    </div>
  );
};

export default TodoItem;
