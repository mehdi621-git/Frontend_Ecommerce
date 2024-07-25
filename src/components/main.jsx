
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Front from './front'
import Login from './Login'
import Signup from './Signup'
import Admin from './admin'



import Shoppingarea from './shoppingArea'
import Itemdetail from './itemDetail'
import Cart from './cart'
import AdminArea from './adminArea'
import Address from './address'
const Main = () => {
 
  return (<>
  <Routes>
        <Route path = "/" element ={<Front></Front>} ></Route>
        <Route path = "/login" element ={<Login></Login>} ></Route>
        <Route path="/signup" element = {<Signup></Signup>}></Route>
        <Route path='/admin' element ={<Admin></Admin>}></Route>
        <Route path ='/shopping' element ={<Shoppingarea></Shoppingarea>}></Route>
        <Route path='/detail/:id' element ={<Itemdetail></Itemdetail>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/adminarea' element={<AdminArea></AdminArea>}></Route>
        <Route path = '/address' element ={<Address></Address>}></Route>
  </Routes>
  </>
    
 
  )
}

export default Main