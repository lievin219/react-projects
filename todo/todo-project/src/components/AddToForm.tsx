import React, { useState } from 'react'

export const AddToForm = () => {
    const [input,setinput]=useState("")
    interface Adding{
        
    }

     function handlesubmitt(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault()
  if(!input.trim()) return ;
     }

  return (
   <form action="" onSubmit={handlesubmitt}>
    <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} placeholder='What needs to be done!' className='rounded-s-md grow border border-gray-50-400 p-2'/>
    <button type='submit' className='bg-white-500 text-blue-600'>+</button>
   </form>
  )
}
