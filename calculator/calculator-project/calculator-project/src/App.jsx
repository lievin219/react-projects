import { useState } from 'react'

import './App.css'
function calculatorButton({children}){
  return (
   <button className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'>children</button>
  )
}

function App() {

   
 

  return (
    <div className='bg-white text-gray-600 p-5 rounded-2xl  hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100'>
      <div className='grid grid-cols-4 gap-4 '>
      <calculatorButton>C</calculatorButton>
       <calculatorButton>%</calculatorButton>
     <calculatorButton>V</calculatorButton>
      <calculatorButton>/</calculatorButton>
       <calculatorButton>1</calculatorButton>
      <calculatorButton>2</calculatorButton>
       <calculatorButton>3</calculatorButton>
       <calculatorButton>*</calculatorButton>
       <calculatorButton>4</calculatorButton>
      <calculatorButton>5</calculatorButton>
       <calculatorButton>6</calculatorButton>
      <calculatorButton>-</calculatorButton>
       <calculatorButton>7</calculatorButton>
       <calculatorButton>8</calculatorButton>
      <calculatorButton>9</calculatorButton>
       <calculatorButton>+</calculatorButton>
       <calculatorButton>0</calculatorButton>
       <calculatorButton>.</calculatorButton>
       <calculatorButton>=</calculatorButton>
      </div>
    </div>
  )
}

export default App
