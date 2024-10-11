import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card.jsx"

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
      age : 21,
      name:"macau"
  }

  return (
    <>
    <h1 className='bg-green-500 text-black p-4 rounded-lg'>Tailwind test</h1>

    <Card username = "vinayak"  someobj = {myObj}/>
    <Card username = {"why not you"}  />
    </>
  )
}

export default App
