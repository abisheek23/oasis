import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '/Component/Nav'


import './App.css'
function App(){


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Navbar/>}>

      </Route>
      </Routes>
      </BrowserRouter>
  
  )
}

export default App
