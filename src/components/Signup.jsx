import { useRef } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { addAccount } from "../store/feature";
 const Signup = () => {
  const dispatch =useDispatch();
   const firstname= useRef()
   const lastname= useRef()
   const email= useRef()
   const password= useRef()


  const handleSubmit =(e)=>{
    e.preventDefault();
     const newfirstname = firstname.current.value;
     const newlastname = lastname.current.value ; 
     const newemail = email.current.value;
     const newpassword = password.current.value;
     const SignupData = {
           Fname : newfirstname,
           Lname : newlastname,
           Email : newemail,
           Password : newpassword,
     }
     dispatch(addAccount(SignupData))
     firstname.current.value ="";
     lastname.current.value="";
     email.current.value ="";
     password.current.value ="";
     alert("Successfully Registered ; Login Now")

  }
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sigup to your account</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST" onSubmit={(e)=>handleSubmit(e)}>
      <div>
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
          <div class="mt-2">
            <input id="first-name" name="text" type="text"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ref={firstname}/>
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
          <div class="mt-2">
            <input id="last-name" name="text" type="text"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ref={lastname}/>
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ref={email}/>
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  ref={password}/>
          </div>
        </div>
  
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
        </div>
      </form>
        <div>
          <Link to={'/login'} >Already have an account</Link>
        </div>
    </div>
  </div>)
  
  
}
export default Signup;
