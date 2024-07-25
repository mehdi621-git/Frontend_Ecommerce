
import React, { useContext, useEffect, useRef } from 'react'
import { Context } from '../context'
import styles from './adminArea.module.css'
import Item from './item'
import { TiDelete } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteAccount } from '../store/feature';
const AdminArea = () => {
    const title =useRef()
    const description =useRef()
    const price =useRef()
    const availabilityStatus =useRef()
    const discount =useRef()
    const sku =useRef()
    const image1 = useRef()
    const image2 =useRef()
   const deleteSku=useRef()
   const deleteEmail =useRef()
 const dispatch =useDispatch()
    const {adminwork,admindata,setlogin,setadmindata,setdata,setnewdata,newdata,data,deleteSk,setdeleteSk} =useContext(Context)
const handlesubmit=(e)=>{
    e.preventDefault()
  const  imageF = image1.current.value
     const    imageS = image2.current.value
    const newdata1 ={
        title : title.current.value,
        description : description.current.value,
        price : price.current.value,
        availabilityStatus :availabilityStatus.current.value,
        sku: sku.current.value,
        discount :discount.current.value,
        images: [imageF,imageS]
        }
    
    setadmindata(pre=>[newdata1,...pre])

   title.current.value =""
 description.current.value =""
 price.current.value =""
availabilityStatus.current.value=""
sku.current.value =""
discount.current.value =""
    console.log(newdata1)
   

}
 const handledeletion=(e)=>{
     e.preventDefault();
     const desku=deleteSku.current.value;
    const verynewdata = newdata.filter((item)=>item.sku != desku);
      if(!verynewdata){
        alert ("no sku found")
      }
    
    setdeleteSk(desku)

    deleteSku.current.value =""
 }
 const handledeletionAc =()=>{
    e.preventDefault();
    const email =deleteEmail.current.value;
    dispatch(deleteAccount(email))

 }
  
  return (<>
  {<> 
<div className={styles.main}>
    <div className={styles.top} >
        <div className={styles.link}>
        <Link to={'/shopping'} style={{color :'blue' , textDecoration :'none'}}>Move to Shoping Area</Link>
        <FaArrowCircleRight />
        </div>
       
        <div>
           
            <div className={styles.fill}>
                <h2 className={styles.heading}>Add an item</h2>
                <form className = { styles.form}action="" onSubmit={(e)=>handlesubmit(e)}>
                <label htmlFor='image1' >Images</label>
                <input type="file" ref={image1} />
                <input type="file" ref={image2}/>
                <label htmlFor="title">Title</label>
                <input type="text " name='title' placeholder='Title Goes Here' ref={title}/>
                <label htmlFor="description">Description</label>
                <input type="text " name='description' placeholder='Description Goes Here' ref={description}/>
                <label htmlFor="price">Price</label>
                <input type="numbers" name='price' placeholder='Price Goes Here' ref={price}/>
                <label htmlFor="discount">Discount</label>
                <input type="numbers" name='discount' placeholder='Discount Goes Here' ref={discount}/>
                <label htmlFor="sku">SkU</label>
                <input type="text" name='sku' placeholder='SkU Goes Here' ref={sku}/>
                <label htmlFor="availabilityStatus">Status</label>
                <input type="text" name='availabilityStatus' placeholder='Status Goes Here' ref={availabilityStatus}/>
                <button type='submit'>Move Away</button>
                </form>
            </div>

        </div>
        </div>
        <div className={styles.top} >
        <div className={styles.link}>
        <Link to={'/shopping'} style={{color :'blue' , textDecoration :'none'}}>Move to Shoping Area</Link>
        <FaArrowCircleRight />
        </div>
       <div className={styles.deletion}>
        <div>
           
            <div className={styles.fill}>
                <h2 className={styles.heading}>Add an item</h2>
                <form className = { styles.form}action="" onSubmit={(e)=>handledeletion(e)}>
                <label htmlFor="sku">SkU</label>
                <input type="text " name='sku' placeholder='Sku for deletion' ref={deleteSku}/>

               
                <button type='submit'>Delete</button>
                </form>
            </div>

        </div>
        </div>
        <div>
        <div className={styles.top} >
        <div className={styles.link}>
        <Link to={'/login'} style={{color :'blue' , textDecoration :'none'}}>Move to Login</Link>
        <FaArrowCircleRight />
        </div>
           <div className={styles.fill}>
               <h2 className={styles.heading}>Delete Account</h2>
               <form className = { styles.form}action="" onSubmit={(e)=>handledeletionAc(e)}>
               <label htmlFor="deleteemail">Email</label>
               <input type="text " name='deleteemail' placeholder='Sku for deletion' ref={deleteEmail}/>

              
               <button type='submit'>Delete</button>
               </form>
           </div>
        </div>
        </div>
        <div>
        <div className={styles.top} >
        <div className={styles.link}>
        <Link to={'/admin'} style={{color :'blue' , textDecoration :'none'}}>Logout</Link>
        <FaArrowCircleRight />
        {setlogin(false)}
        </div>
        </div>
        </div>
        </div>
       
        </div>
      
         </>
         }
  </>
    
  )
}

export default AdminArea