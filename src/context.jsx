import { createContext, useState } from "react";


export const Context = createContext()

const AppContext = ({children})=>{
    const [login,setlogin] =useState(false)
    const [data,setdata] =useState([])
    const [input,setinput] =useState('')
    const [newdata,setnewdata] =useState(data)
    const [key,setkey]=useState('')
    const [cartdata ,setcartdata] =useState([])
    const[adminwork,setadminwork] =useState(false)
    const [admindata,setadmindata] =useState([])
    const [st,setst] =useState('/')
    const [deleteSk,setdeleteSk] =useState('')
    return <>
       <Context.Provider  value = {{login,setlogin,data,
        setdata,input,setinput,newdata,setnewdata,cartdata,
        setcartdata,adminwork,setadminwork,admindata,
        setadmindata,st,setst,deleteSk,setdeleteSk}} >
           {children}

       </Context.Provider>
    
    </>
}
export default AppContext