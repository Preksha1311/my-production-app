import React from 'react'
import { SignupFormDemo } from '../component/login/login';
import NavbarDemo from '../component/navbar/Navbar';

const Login = () => {
  return (
    <div className="m-auto align-center justify-center">
      <NavbarDemo />
      <SignupFormDemo />
    </div>
  )
}

export default Login
