

import React, { useContext, useState } from 'react'
import styles from './navbar.module.css'
import { Context } from '../context'
const Navbar = () => {
const {data,setdata,setinput,setnewdata,newdata} =useContext(Context)


const handlefilter = (e)=>{
    const Value =e.target.value
      setinput(Value)
    e.preventDefault()
    console.log(e.target.value,data[0].title,typeof Value)
        const fnewdata = data.filter((item)=> item.title.toLowerCase().includes(Value.toLowerCase()))
         setnewdata(fnewdata)
         console.log(data)
    } 

  return (
    <nav class={`navbar bg-body-tertiary ${styles.nav}`}>
    <div class={`container-fluid ${styles.main}`}>
      <a class="navbar-brand">SHOP</a>
      <form class="d-flex" role="search" onSubmit={()=>e.preventDefault()}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>handlefilter(e)}/>
        
      </form>
    </div>
  </nav>
  )
}

export default Navbar;