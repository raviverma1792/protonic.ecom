import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Productinfo from './Pages/Productinfo'
import Login from './Pages/Login'
import Proitem from './Pages/Proitem'
import Addtocatr from './Pages/Addtocatr'
import Addto from './Pages/Addto'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Productinfo" element={<Productinfo/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path='/Proitem' element={<Proitem/>}></Route>
        <Route path ='/Addtocatr' element={<Addtocatr/>}></Route>
        <Route path='/Addto' element={<Addto/>}></Route>
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App