import { useState } from 'react'
import './App.css'
import ProjectComponent from './ProjectComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display:"flex"}}>
      <ProjectComponent/>
      <ProjectComponent/>
    </div>
      
  )
}

export default App
