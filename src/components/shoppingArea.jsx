
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../context';
import Item from './item';
import styles from './shoppingArea.module.css'
import Navbar from './navbar';
import { nanoid } from '@reduxjs/toolkit';

const Shoppingarea = () => {
       const {login,data,setdata,input,newdata,setnewdata,setdeleteSk ,admindata,deleteSk} =useContext(Context)
  useEffect(() => {
    console.log(admindata)
    const getData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products/search?q=phone');
            const result = await response.json();
           
            setdata(result.products)
            if(deleteSk){
              console.log(deleteSk)
              const verynewdata = newdata.filter((item)=>item.sku != deleteSk)
              setdeleteSk("")
              setnewdata(verynewdata)
            }else{
              setnewdata(admindata.concat(result.products))
            }
            
            console.log(result.products) // Assuming the API response has a `products` array
          } catch (error) {
            console.error('Error fetching data:', error);
          }}
    getData();
  }, [login]);

  return (
  <>
    { 
       <>  <Navbar></Navbar>
        <div className= {`${styles.main} row row-cols-1 row-cols-md-3 g-4 `}>
            
            {newdata.length > 0 ? (
        newdata.map((item) => <Item key={nanoid} item={item} />) // Pass item data to the Item component and provide a unique key
      ) : (
        <p>Loading...</p>
      )}
      </div>
      </>
    }
  </>
  
  );
};

export default Shoppingarea;
