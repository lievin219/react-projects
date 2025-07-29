import { Todo } from "../types/todo"

interface TodoItemPros{
    todo:Todo
}

export default function TodoItem({todo}:TodoItemPros){
     return(
         <div>
          <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 hover:bg-slate-50">
            <input type="checkbox" className="scale-125"/>
            <span className={todo.completed?"line-through text-gray-400":""}>{todo.title}</span>
          </label>
         </div>
     )
}