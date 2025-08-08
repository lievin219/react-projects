import React from 'react'
import TodoItem from './TodoItem'
import  Todo  from '../types/todo'
interface TodoListProps{
    todo:Todo[],
    onCompletedChange:(id:number,completed:boolean)=>void,
    onDelete:(id:number)=>void
    
}

export const TodoList = ({todos,onCompletedChange,onDelete}:TodoListProps) => {
  return (
    <div className='space-y-2'>
              {todos.map(todo=>(
                <TodoItem
                key={todo.id} todo={todo}
               
                onCompletedChange={onCompletedChange}/>
              ))
    
              }
              </div>
  )
}
