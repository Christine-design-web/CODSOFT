import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'


// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }
function App() {

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
   <Navbar/>
   <Outlet/>
 
    </>
  )
}

export default App