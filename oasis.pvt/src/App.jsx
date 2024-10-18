import { BrowserRouter,Routes,Route } from 'react-router-dom'




// import './App.css'
import Navbar from './Component/nav'
import Contact from './Component/Contact'
import Home from './Component/home'
import Cerosil from './Component/cerosil'


function App(){


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='Contact'element={<Contact/>}/>
      <Route path='Cerocil'element={<Cerosil/>}/>

      </Route>
      </Routes>
      </BrowserRouter>
  
  )
}

export default App
