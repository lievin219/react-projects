import { useState } from 'react'

import './App.css'
function calculatorButton({children,className,...rest}){
  return (
   <button className={'bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' + className} {...rest}>{children}</button>
  )
}



  
function App() {
  function handleClick(i){
    setclick((prev)=>prev+i)
}
 
const [click,setclick]=useState('')
 const[open,setOp]=useState('')
  const[prevVal,setpreval]=useState('')


function setclear(){
  setclick('')
}
 function handlePercent(){
   setclick((prev)=>{
   return  prev/100
   })
 }
    function handleoperation(open){
      setOp(open)
      setpreval(click)
      setclick('')

    }

     function handleSqrt(){
       setclick((prev)=>Math.sqrt(prev))
     }
     function handleEqual(){
       if(open==='÷'){
         setclick(prevVal/click)
         setpreval()
         setOp('')
       }
       else if(open==='+'){
         setclick(parseFloat(prevVal)+ parseFloat(click))
         setOp('')
          setpreval('0')
         
       }
       else if(open==='*'){
        setclick(parseFloat(prevVal)* parseFloat(click))
        setOp('')
         setpreval('0')
        
      }
      else if(open==='-'){
        setclick(parseFloat(prevVal)- parseFloat(click))
        setOp('')
         setpreval('0')
        
      }
     }
 

  return (
    <div className='bg-white text-gray-600 p-5 rounded-2xl  '>
      <div className='bg-gray-100 p-8 text-right text-6xl rounded-xl shadow-sm'>{click}</div>
      <div className='grid grid-cols-4 gap-4 '>
      <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>setclear()}>AC</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handlePercent()}>0/0</calculatorButton>
     <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>{handleSqrt()}}>V</calculatorButton>
      <calculatorButton className='bg-orange-400 text-white py-3 aspect-square rounded-2xl shadow-sm hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl'onClick={()=> handleoperation('÷')}>÷</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handleClick('1')}>1</calculatorButton>
      <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handleClick('2')}>2</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handleClick('3')}>3</calculatorButton>
       <calculatorButton  className='bg-orange-400 text-white  py-3 aspect-square rounded-2xl shadow-sm  hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>{handleoperation('*')}}>*</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handleClick('4')}>4</calculatorButton>
      <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handleClick('5')}>5</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handleClick('6')}>6</calculatorButton>
      <calculatorButton  className='bg-orange-400 text-white  py-3 aspect-square rounded-2xl shadow-sm hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handleoperation('-')}>-</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handleClick('7')}>7</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handleClick('8')}>8</calculatorButton>
      <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handleClick('9')}>9</calculatorButton>
       <calculatorButton  className='bg-orange-400 text-white py-3 aspect-square rounded-2xl shadow-sm  hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handleoperation('+')}>+</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl col-span-2' onClick={()=>handleClick('0')}>0</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handleClick('.')}>.</calculatorButton>
       <calculatorButton className='bg-gray-100 py-3 aspect-square rounded-2xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-95 transition-all duration-100 text-3xl' onClick={()=>handleEqual()}>=</calculatorButton>
      </div>
    </div>
  )
}

export default App
