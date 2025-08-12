import { useState} from 'react'
import React from 'react'
import TodoItem from './components/TodoItem'

import { mydata } from './datas/todo'
import { AddToForm } from './components/AddToForm'
import { TodoList } from './components/TodoList'

function App() {

   const [todos,setTodos]=useState(mydata)
  function setTodoCompleted(id:number,completed:boolean){

setTodos((prevTodos) =>
prevTodos.map(todo=>
(todo.id===id?{...todo,completed}:todo)
))
  }
 function addTodo(title:string){
   setTodos(prevTodos=> [
    {
      id:prevTodos.length+1,
      title:title,
      completed:false
     
    },
    ...prevTodos
   ])
 }
  function deleteTodo(id:number){
   setTodos(prevtodos=>prevtodos.filter(todo=>todo.id!==id))


  }

  return (
   
      <main className='py-10  h-screen space-y-6'>

        <h1 className='text-center font-bold text-3xl'>Your Todos</h1>
        <div className='max-w-lg mx-auto p-5 space-y-6'>
          <AddToForm onSubmit={addTodo}/>
          <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}/>
          
        </div>
        </main>
  
  )
}

export default App
