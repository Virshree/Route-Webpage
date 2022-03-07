import React from 'react'
import './About.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function About() {
  useEffect(()=>
      fetchDisplay()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ,[])
  const [users,setUsers]=useState("");
  const fetchDisplay=async()=>{
  const url=' https://jsonplaceholder.typicode.com/photos'
 await axios.get(url)
  .then((res)=>setUsers(res))
  .catch((err)=>console.log(err))
  console.log(users?.data[0])
  }
  const navtoDash=useNavigate();
const navigatetoDashboard=()=>{
navtoDash('/dashboard')
}
  return (
    <div className='about'>
      <h2>Fetching Data from API</h2>
      <h3>Fetching Data for 5000 </h3>
      <button onClick={navigatetoDashboard} className='btn btn-dark'>Go to Dashboard</button>
      <div className='aboutfetch'>
        {users.data?.map((item,index) => (
          <div className='aboutcard' key={index}>
             <h2>Id:{item.id}</h2>
               <h2>Title:{item.title}</h2> 
                <img src={item.url} alt="" width="250" height="250"/>
          </div>
        ))}   
      </div>

    </div>
  )
}

export default About