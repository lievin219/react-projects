import { useState } from 'react'
// import {BrowserRouter} from 'react-router-dom'
import './App.css'

import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <nav>
       <ul>
       <li><Link to='/about' > about</Link>   </li>
      <li ><Link to='/services' > Services</Link></li>
     
        </ul>
      </nav>
    </div>
     <div>Hello world</div>
     <h1>Scrimba projects</h1>
     
     </>
  )
}

export default App
