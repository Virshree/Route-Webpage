import React from 'react'
import './About.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function About() {
  useEffect(()=>
      fetchDisplay()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ,[])
  const [users,setUsers]=useState("");
  const fetchDisplay=(()=>{
  const url=' https://jsonplaceholder.typicode.com/photos'
  axios.get(url)
  .then((res)=>setUsers(res))
  .catch((err)=>console.log(err))
  console.log(users.data[0])
  })

  return (
    <div className='about'>
      <h2>Fetching Data from API</h2>
      <div className='aboutfetch'>
        { users?.data.map((item,index) => (
          <div className='aboutcard' key={index}>
             <h2>Id:{item?.id}</h2>
               <h2>Title:{item?.title}</h2> 
                <img src={item?.url} alt="" width="250" height="250"/>
          </div>
        ))}   
      </div>

    </div>
  )
}

export default About