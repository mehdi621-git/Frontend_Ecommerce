import React from "react";
import { useContext } from "react";
import { useState } from "react";
import styles from "./itemdetail.module.css";
import { FaCartShopping } from "react-icons/fa6";
import { Context } from "../context";
import { Link, useParams } from "react-router-dom";
import Review from "./review";
import Navbar from "./navbar";
const Itemdetail = () => {
  const { data,cartdata,setcartdata } = useContext(Context);
  const { id } = useParams();
  console.log(data)
  const newdata = data.filter((item) => item.sku == id);
  
  console.log(id,newdata);
  console.log("hello");
const handlecart =()=>{
       setcartdata((pre)=>[...pre,newdata[0]])
       console.log(cartdata,"i am")
       alert("Added to cart")
}


  return (
    <>
     <div className={styles.cart}>
   <Link to={'/cart'}>  <FaCartShopping size ={25}className={styles.carticon} /></Link></div>
      <div className={styles.main}>
        <div className={styles.body}>
          <div className={styles.about}>
            <div className={styles.image}>
              <img src={newdata[0].images[0]} alt="" />
              <img src={newdata[0].images[1]} />
            </div>
            <div className={styles.text}>
              <h3>{newdata[0].title}</h3>
              <h4>Description</h4>
              <p>
                {newdata[0].description}
              </p>
            </div>
          </div>
          <div className={styles.price}><p>${newdata[0].price}</p>
            <p>{newdata[0].discountPercentage}%</p>
          </div>
           <div className={styles.buttond} onClick={handlecart}>
           <button >Add to Cart</button>
           </div>
        </div>
        
        <div className={styles.reviews}>
        <h2>Reviews</h2>
          {newdata[0].reviews.map((term)=> <Review item = {term}></Review>)}
        </div>
      </div>
    </>
  );
};

export default Itemdetail;
