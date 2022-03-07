import React from 'react'
import './Home.css';
import Card from '../Home/Card/Card';
import {useNavigate}from 'react-router-dom';
function Home() { 
  const navigateAbout=useNavigate();
  const navigatetoAbout=()=>{
    navigateAbout('/about')
  }
  return (
    <div className='home'>
            <h1 >Welcome to Home Page.</h1>
            <h2>Displaying card </h2>
            <button onClick={navigatetoAbout} className='btn btn-warning'>Go to About</button>
            <div className='home-card'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
     
      
</div>
        </div>
  )
}

export default Home