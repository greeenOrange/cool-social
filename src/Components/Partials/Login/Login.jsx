import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './Login.css'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="card bg-indigo-100 w-4/12 bg-base-100 px-6 shadow-xl">
      <div className="text-center">
        <h2 className="text-3xl mt-8">log into -- <span className="text-primary">cool social</span></h2>
      </div>
  <div className="card-body">

  <div className="form-control flex cols gap-4">
  <label className="input-group">
    <span className="bg-indigo-500 py-1"><FaEnvelope size={25} style={{ fill: 'white' }} /></span>
    <input type="email" placeholder="Email" className="input focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 rounded-md outline-offset-0 text-black h-[35px] px-2
 bg-transparen w-full" />
  </label>
  <label className="input-group">
    <span className="bg-indigo-500 py-1"><FaEnvelope size={25} style={{ fill: 'white' }} /></span>
    <input type="password" placeholder="password" className="input focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 rounded-md outline-offset-0 text-black h-[35px] px-2
 bg-transparen w-full" />
  </label>
  <div className="flex justify-between items-center">
  <label className="cursor-pointer label">
    <input type="checkbox" className="checkbox checkbox-primary" />
    <span className="label-text text-2xl">show password</span>
  </label>
  <Link to="/forgetpassword" className="text-2xl hover:text-indigo-500" >forget password ?</Link>
  </div>
</div>
    <div className="card-actions">
      <button className="btn btn-primary text-white w-full">login</button>
    </div>
    <p className="text-2xl text-center md:mt-3">Don't have an account? <Link to="/register" className="hover:text-indigo-500">Sign Up</Link></p>
  </div>
</div>
</div>

  )
}

export default Login