import { useState } from 'react'
import './App.css'
import Frame from './components/Frame'
import Display from './components/Display';
import Counter from './components/Counter';

function App() {
const [value,setValue]=useState(100);
  return (
    <>
     {/* <Frame/> */}
     <Display value={value} />
     <Counter setValue={setValue}/>
    </>
  )
}

export default App
