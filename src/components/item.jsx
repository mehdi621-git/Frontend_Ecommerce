
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { Context } from '../context'

const Item = ({item,key}) => {
   
    console.log(item.sku)
  return (
  <>
  <div className='col'>
   <Link to={`/detail/${item.sku}`} class="card h-100 row-3" style={{width: "18rem" }}>
  <img src={item.images[0]} class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <h3 class="card-title">{item.price}</h3>
    <p class="card-text">{item.description}</p>
    <div>
    <h2 class="btn btn-primary">{item.availabilityStatus}</h2>
   
      </div>
   
    <p>{item.warrantyInformation
    }</p>

    </div>
  </Link>
</div>
  </>
  )
}

export default Item