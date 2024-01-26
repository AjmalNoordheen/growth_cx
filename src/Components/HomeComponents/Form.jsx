import React, { useRef, useState } from "react";
import { collection, addDoc, arrayUnion} from 'firebase/firestore';
import { db } from '../../Config/firebase';
import { toast } from "react-toastify";
import LoopIcon from '@mui/icons-material/Loop';
import { getAuth } from 'firebase/auth';
import { useSelector } from "react-redux";

function Form() {
    const titleRef = useRef('')
    const descRef = useRef('')
    const [spin,setSpin] = useState(false)
    const user = useSelector((store)=>store.user.email)
    // Submitting and saving the task to the firestore
  const submitTask = async (e) => {
      try {
          e.preventDefault()
          setSpin(true)


      if(titleRef.current.value.trim() === '' || descRef.current.value.trim() === ''){
            return toast.warn('invalid submisssion')
      }
      if (titleRef.current.value && descRef.current.value) {
        await addDoc(collection(db, 'todos'), {
          title: titleRef.current.value,
          description: descRef.current.value,
          status: arrayUnion('Pending'),
          userId: user
        })
        toast.success('added successfully !')
        titleRef.current.value = ''
        descRef.current.value = ''
      }
    } catch (error) {
      console.log(error)
    }finally{
        setSpin(false)
    }
  }
  return (
    <>
      <form
        onSubmit={submitTask}
        className="w-1/2 flex flex-col items-center gap-y-4"
        action="">
        <div className="w-[90%] h-10 bg-red-300 border border-slate-200">
          <input
            required
            ref={titleRef}
            type="text"
            placeholder="Title"
            className="w-full h-full pl-2 outline-none text-black placeholder-black" />
        </div>
        <div className="w-[90%] h-10 bg-red-300 border border-slate-200">
          <input required
            ref={descRef}
            type="text"
            placeholder="Description"
            className="w-full h-full pl-2 outline-none text-black placeholder-black"/>
        </div>
        <button type="submit"
          className="bg-[#597EF7] text-white hover:bg-black w-[70%] h-10 font-semibold border border-[#1890FF]">
          {spin ? <LoopIcon className="animate-spin"/> : 'Add'}
        </button>
      </form>
    </>
  );
}

export default Form;
