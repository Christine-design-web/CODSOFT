import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <nav>Nav Bar</nav>
    <h1>work done</h1>
   <Outlet/>
   <footer>Footer</footer>
    </>
  )
}

export default App
