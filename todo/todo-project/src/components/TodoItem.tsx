import { Todo } from "../types/todo"
import { Trash2 } from "lucide-react";
interface TodoItemPros{
    todo:Todo;
    onCompletedChange:(id:number,completed:boolean)=>void;
    onDelete:(id:number)=>void
}

export default function TodoItem({todo,onCompletedChange,onDelete}:TodoItemPros){
     return(
         <div className="flex items-center gap-1 grow">
          <label className="flex items-center gap-2 border rounded-md p-2 ">
            <input type="checkbox" className="scale-125"   checked={todo.completed} onChange={(e)=>onCompletedChange(todo.id,e.target.checked)}/>
            <span className={todo.completed?"line-through text-gray-400":""}>{todo.title}</span>

          </label>
          <button
          className="p-2"
          onClick={()=>onDelete(todo.id)}><Trash2 size={20} className="text-gray-50"/></button>
         
         </div>
     )
}