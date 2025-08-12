import { useState } from 'react'

import './App.css'
function calculatorButton({children,className}){
  return (
   <button className={'bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' + className}>children</button>
  )
}

function App() {

   
 

  return (
    <div className='bg-white text-gray-600 p-5 rounded-2xl  '>
      <div className='grid grid-cols-4 gap-4 '>
      <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>AC</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>+/-</calculatorButton>
     <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>V</calculatorButton>
      <calculatorButton className='bg-orange-400 text-white py-3 aspect-square rounded-2xl shadow-sm hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>/</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>1</calculatorButton>
      <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>2</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>3</calculatorButton>
       <calculatorButton  className='bg-orange-400 text-white  py-3 aspect-square rounded-2xl shadow-sm  hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>*</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>4</calculatorButton>
      <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>5</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>6</calculatorButton>
      <calculatorButton  className='bg-orange-400 text-white  py-3 aspect-square rounded-2xl shadow-sm hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>-</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>7</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>8</calculatorButton>
      <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>9</calculatorButton>
       <calculatorButton  className='bg-orange-400 text-white py-3 aspect-square rounded-2xl shadow-sm  hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>+</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl col-span-2'>0</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>.</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>=</calculatorButton>
      </div>
    </div>
  )
}

export default App
