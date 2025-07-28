import {React} from 'react'

import { mydata } from './datas/todo'

function App() {


  return (
   
      <main className='py-10  h-screen'>

        <h1 className='text-center font-bold text-3xl'>Your Todos</h1>
        <div>
          <div>
          {mydata.map(todo=>(<p key={todo.id}>{todo.title}</p>))

          }
          </div>
        </div>
        </main>
  
  )
}

export default App
