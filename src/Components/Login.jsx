import React from 'react'
import {useState} from 'react';

const Login = (props) => {

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [firstName , setName] = useState('');

  const submitHandle = (e) =>{

    e.preventDefault();

    props.handleLogin(email , password , firstName);
    setEmail("");
    setPassword("");
    setName("");

  }

  return (
    <div className='h-screen w-screen flex items-center justify-center'>

      <div className='border-2 border-emerald-600'>
        <form onSubmit = {submitHandle} className='flex flex-col items-center justify-center p-20'>

        <input value = {firstName} onChange = {(e) =>{setName(e.target.value)}} required type = "text" placeholder = 'Enter Your Name' className='placeholder:font-semibold outline-0 bg-transparent placeholder:text-gray-300 border-2 border-emerald-600 rounded-full py-4 px-5 text-xl mb-3'></input>
        <input value = {email} onChange = {(e) =>{setEmail(e.target.value)}} required type = "email" className='text-xl placeholder:text-gray-300 placeholder:font-semibold outline-0 bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5' placeholder = 'Enter Your Email'></input>
        <input value = {password} onChange = {(e) =>{setPassword(e.target.value)}} required type = "password" placeholder = 'Enter Your Password' className='placeholder:font-semibold outline-0 bg-transparent placeholder:text-gray-300 border-2 border-emerald-600 rounded-full py-4 px-5 text-xl mt-3'></input>
        <button className='outline-none text-white rounded-full text-xl mt-7 py-3 w-full font-semibold bg-emerald-600 transition-all duration-200 ease-in-out hover:bg-emerald-700 active:scale-95'>Login</button>

        </form>
      </div>

    </div>
  )
}

export default Login;