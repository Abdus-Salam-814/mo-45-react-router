import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/errorPage/Header/Header'

function App() {
  const [count, setCount] = useState(0)
 
let y = 0;


  function addSome(y){
    y = y + 1
  }

  return (
   <div className='mx-3 my-4'>
   <p className=' text-5xl'>This is Home Component </p>
   <Header></Header>
  
   
   </div>
  )
}

export default App
