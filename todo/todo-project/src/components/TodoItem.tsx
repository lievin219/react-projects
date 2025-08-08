import { Todo } from "../types/todo"

interface TodoItemPros{
    todo:Todo;
    onCompletedChange:(id:number,completed:boolean)=>void
}

export default function TodoItem({todo,onCompletedChange}:TodoItemPros){
     return(
         <div>
          <label className="flex items-center gap-2 border rounded-md p-2 ">
            <input type="checkbox" className="scale-125"   checked={todo.completed} onChange={(e)=>onCompletedChange(todo.id,e.target.checked)}/>
            <span className={todo.completed?"line-through text-gray-400":""}>{todo.title}</span>
          </label>
         </div>
     )
}