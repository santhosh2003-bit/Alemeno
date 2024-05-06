import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { toast } from 'react-toastify';
const SignUp = () => {
  const [name, setName] = useState('');
  const [userName,setUserName] =useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
const navigate=useNavigate();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
const handleSubmit=()=>{
  // if(!emailRegex.test(email)){
  //   notifyA("Email Not Valid")
  //   return;
  // }
  // else if(!passwordRegex.test(password)){
  //   notifyA("Password must 8 Characters and some Special characters")
  //   return;
  // }
  fetch("http://localhost:5000/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({
    name:name,
    userName:userName,
    email:email,
    password:password
  })}).then((res)=>res.json())
  .then((result)=>{
    if(result.error){
      notifyA(result.error)
    }
    else{
      notifyB(result.message);
navigate("/singin");
    }
  })
}

useEffect(()=>{

},[])

const notifyA=(msg)=>{
toast.error(msg)
}
const notifyB=(msg)=>{
  toast.success(msg)
}

  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-500'>
      <div className='border border-slate-500 bg-slate-600 shadow-2xl p-4 md:p-6 rounded-xl animate-slideUp'> 
        <h1 className='text-3xl md:text-4xl font-bold text-white mb-6'>Sign Up</h1>
        <div>
          <div className='flex items-center border rounded-xl p-2 mb-3'>
            <input type="text" placeholder='Enter your Name...' className='flex-grow bg-transparent placeholder:text-white text-xl md:text-2xl text-white outline-none' value={name} onChange={(e)=>setName(e.target.value)}/>
            <AccountCircleIcon className='text-white'/>
          </div>
          <div className='flex items-center border rounded-xl p-2 mb-3'>
            <input type="text" placeholder='Enter User Name...' className='flex-grow bg-transparent placeholder:text-white text-xl md:text-2xl text-white outline-none' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <AccountCircleIcon className='text-white'/>
          </div>
          <div className='flex items-center border rounded-xl p-2 mb-3'>
            <input type="email" placeholder='Enter your Email...' className='flex-grow bg-transparent placeholder:text-white text-xl md:text-2xl text-white outline-none' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <EmailIcon className='text-white'/>
          </div>
          <div className='flex items-center border rounded-xl p-2 mb-3'>
            <input type="password" placeholder='Enter your password...' className='flex-grow bg-transparent placeholder:text-white text-xl md:text-2xl text-white outline-none' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <VpnKeyIcon className='text-white'/>
          </div>
          <div className='w-full pb-2'>
            <button className='w-full bg-blue-700 font-bold text-white rounded-xl p-2' onClick={()=>handleSubmit()}>Sign Up</button>
          </div>
        </div>
        <div className='w-full h-max p-3 shadow-2xl bg-slate-700 rounded-xl'>
          <p className="text-white text-sm md:text-xl">
            If you already have an account, <Link to="/signin" className="text-blue-400 font-bold hover:text-blue-600">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
