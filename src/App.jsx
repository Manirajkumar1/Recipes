
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <div className='fixed w-full top-0'>
      <Navbar/>
    </div>
       <Outlet/>
     
    </>
  )
}

export default App
