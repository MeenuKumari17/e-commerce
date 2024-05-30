import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log("Login", formData)
    let responseData;
    await fetch(`${window.location.origin}/login`,{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => responseData = data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.error)
    }
  }

  const signup = async () => {
    console.log("SignUp", formData)
    let responseData;
    await fetch(`${window.location.origin}/signup`,{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => responseData = data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.error)
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name='username' onChange={changeHandler} value={formData.username} type="text" placeholder='Your Name' /> : <></>}
          <input onChange={changeHandler} name='email' value={formData.email} type="email" placeholder='Email Address' />
          <input onChange={changeHandler} name='password' value={formData.password} type="password" placeholder='Password' />
        </div>
        <button onClick={() => {state === "Login" ? login() : signup()}}>Continue</button>
        {state === "Sign Up" ?<p className="loginsignup-login">Already have an account? <span onClick={() => {setState("Login")}}>Login Here</span></p> : <p className="loginsignup-login">Create an account? <span onClick={() => {setState("Sign Up")}}>Click Here</span></p>}        
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the trms of use and privacy policy</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignup