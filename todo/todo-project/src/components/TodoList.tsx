import React from 'react'
import TodoItem from './TodoItem'
import  Todo  from '../types/todo'
interface TodoListProps{
    todo:Todo[],
    onCompletedChange:(id:number,completed:boolean)=>void,
    onDelete:(id:number)=>void
    
}

 

export const TodoList = ({todos,onCompletedChange,onDelete}:TodoListProps) => {
  const todoSorted=todos.sort((a,b)=>{
     if (a.completed===b.completed){
      return b.id-a.id
     }
      return a.completed?1:-1
  })
  return (
   
    <div className='space-y-2'>
              {todoSorted.map(todo=>(
                <TodoItem
                key={todo.id} todo={todo}
               
                onCompletedChange={onCompletedChange}
                onDelete={onDelete}/>
              ))
    
              }
              </div>
  )
}
