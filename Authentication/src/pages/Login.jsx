import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

  //states
  const [currentState, setCurrentState] = useState("sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataSubmitted, setDataSubmitted] = useState(false);

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (currentState === "sign up" && !dataSubmitted) {
      setDataSubmitted(true);
      return;
    }
    login(currentState === "sign up" ? "signup" : "login", { fullName, email, password });

    Navigate('/')
  }

  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain min-h-screen bg-cover bg-center flex items-center justify-center gap-8
    sm:justify-evenly max-sm:flex-col backdrop-blur-2xl text-white">
      <form onSubmit={onSubmitHandler}
        className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
        <h2 className='font-medium text-2xl flex justify-center items-center'>
          {currentState}
        </h2>

        {currentState === "sign up" && !dataSubmitted && (
          <input onChange={(e) => setFullName(e.target.value)} value={fullName}
            className='p-2 border border-gray-500 rounded-md focus:outline-none'
            placeholder='Full Name' type="text" required />
        )}

        {!dataSubmitted && (
          <>
            <input onChange={(e) => setEmail(e.target.value)} value={email}
              type="text" className='p-2 border border-gray-500 rounded-md focus:outline-none'
              placeholder='Email ' required />

            <input onChange={(e) => setPassword(e.target.value)} value={password}
              type="text" placeholder='Enter Password' className='p-2 border border-gray-500 rounded-md focus:outline-none'
              required />
          </>
        )}

        <button type='submit' className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 
        text-white rounded-md cursor-pointer'>
          {currentState === "sign up" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  )
}

export default Login