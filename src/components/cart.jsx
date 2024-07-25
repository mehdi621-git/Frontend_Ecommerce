
import React, { useContext, useState } from 'react'
import { Context } from '../context';
import styles from './cart.module.css'
import { TiDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const {cartdata,setcartdata,login} =useContext(Context)
    const [price,setprice] =useState(0)
    console.log(cartdata)
    const navigate =useNavigate()
    const handledelete =(data)=>{
        const newcart = cartdata.filter((item)=> item.sku != data)
        setcartdata(newcart)
    }
    const handleform =()=>{
      
        navigate('/address')
    }

   console.log(price)
    
    const totalPrice = cartdata.reduce((total, item) => total + item.price, 0);
    console.log(totalPrice)
  return <> 
   { login && <><div className={styles.nav}><h2>Happy Shopping</h2> <p>Total Price : <span>${totalPrice}</span></p><button onClick={handleform}>Buy Now</button></div>
  <div className={styles.div} >
    
  {cartdata.length > 0 ? cartdata.map((item, index) => (
         
    <div className={styles.main}>
        <TiDelete className={styles.delete} onClick={()=>handledelete(item.sku)}/>
        <div className={styles.front}>
        <div className={styles.image}>
            <img src={item.images[0]} alt="" />
        </div>
            <div className={styles.text}>
                
                <h4>{item.title}</h4>
                <p >${item.price}</p>
                <p>
                 {item.description}
                </p>
            </div>
        </div>

        </div>
   
    
  )): <h2 className={styles.note}>Thanks For Shopping ? Nothing to Show</h2>}
</div></>}

</>
}

export default Cart;