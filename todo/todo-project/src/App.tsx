import {React, useState} from 'react'
import TodoItem from './components/TodoItem'

import { mydata } from './datas/todo'
import { AddToForm } from './components/AddToForm'

function App() {

   const [todos,setTodos]=useState(mydata)
  function setTodoCompleted(id:number,completed:boolean){
alert(`Todo with ${id} is now ${completed?"completed":" not completed"}`)
setTodos((prevTodos) =>
prevTodos.map(todo=>
(todo.id===id?{...todo,completed}:todo)
))
  }


  return (
   
      <main className='py-10  h-screen space-y-6'>

        <h1 className='text-center font-bold text-3xl'>Your Todos</h1>
        <div className='max-w-lg mx-auto p-5 space-y-6'>
          <AddToForm/>
          <div className='space-y-2'>
          {todos.map(todo=>(
            <TodoItem
            key={todo.id} todo={todo}
           
            onCompletedChange={setTodoCompleted}/>
          ))

          }
          </div>
        </div>
        </main>
  
  )
}

export default App
