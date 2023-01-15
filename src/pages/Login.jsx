import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <div className='Container'>
        <form action='#'>

          <div className='Input-class'>
            <input type={"input"} placeholder={"User Name & Email"} className={"User"} />
          </div>

          <div className='Input-class'>
            <input type={"password"} placeholder={"Password"} className={"User"}   />
          </div>

          <div className='button'>
            <button type={"submit"} value={Login} className="Login">Login</button>
           <button className='signup'><Link to={"/signup"}>Signup</Link></button>
          </div>
       
        

        </form>
      </div>
    </div>
  );
}

export default Login
