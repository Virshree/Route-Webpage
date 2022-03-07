import React from 'react';
import './Login.css';
import {useAuth0}from'@auth0/auth0-react';

function Login() {


  const { loginWithRedirect } = useAuth0();
  

    return (
    <div className='login'>
        <h3>Let's get Started </h3>
        <button  onClick={()=>loginWithRedirect()} className='btn btn-info fs-2'>Login</button>
        </div>
  )
}

export default Login