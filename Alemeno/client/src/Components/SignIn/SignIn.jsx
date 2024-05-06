import React, { useState } from 'react';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const handle_Submit = () => {
    // if (!emailRegex.test(email)) {
    //   toast.error("Email Not Valid");
    //   return;
    // } else if (!passwordRegex.test(password)) {
    //   toast.error("Invalid Password");
    //   return;
    // }

    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(res => res.json())
      .then(result => {
        if (result.error) {
          toast.error(result.error);
        } else {
          toast.success("Sign In Successful");
          localStorage.setItem("jwt", result.token);
          localStorage.setItem("user",JSON.stringify( result.user))
          navigate("/");
        }
      }).catch(err => {
        console.error(err);
        toast.error("An error occurred, please try again later.");
      });
  };

  return (
    <div className='w-full h-screen flex items-center justify-center bg-slate-500'>
      <div className='border border-slate-500 shadow-2xl bg-slate-600 p-4 md:p-6 rounded-xl animate-slideUp'>
        <h1 className='text-3xl md:text-4xl font-bold text-white mb-6'>Sign In</h1>
        <div>
          <div className='border rounded-xl flex items-center p-2 mb-3'>
            <input type="email" placeholder='Enter Email...' className='flex-grow bg-transparent placeholder:text-white text-xl md:text-2xl text-white outline-none' value={email} onChange={(e) => setEmail(e.target.value)} />
            <AccountCircleIcon className='text-white' />
          </div>
          <div className='flex items-center border rounded-xl p-2 mb-3 '>
            <input type="password" placeholder='Enter Password...' className='flex-grow bg-transparent text-xl placeholder:text-white text-white outline-none md:text-2xl' value={password} onChange={(e) => setPassword(e.target.value)} />
            <VpnKeyIcon className='text-white' />
          </div>
          <div className='w-full pb-3'>
            <button className='w-full bg-blue-700 p-2 hover:bg-blue-800 transition-all font-bold text-white rounded-xl' onClick={handle_Submit}>Sign In</button>
          </div>
        </div>
        <div className='text-xl text-white bg-slate-800 p-4 md:p-6 shadow-xl rounded-xl'>
          <p>If you do not have an account then click <Link className='text-blue-400 font-bold hover:text-blue-600 ' to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
