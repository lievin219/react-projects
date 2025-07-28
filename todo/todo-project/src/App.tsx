import {React} from 'react'
import TodoItem from './components/TodoItem'

import { mydata } from './datas/todo'

function App() {


  return (
   
      <main className='py-10  h-screen'>

        <h1 className='text-center font-bold text-3xl'>Your Todos</h1>
        <div className='max-w-lg mx-auto'>
          <div className='space-y-2'>
          {mydata.map(todo=>(
            <TodoItem/>
          ))

          }
          </div>
        </div>
        </main>
  
  )
}

export default App
