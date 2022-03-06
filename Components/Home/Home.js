import React from 'react'
import './Home.css';
import Card from '../Home/Card/Card';
function Home() {
  return (
    <div className='home'>
            <h1 >Welcome to Home Page.</h1>
            <h2>Displaying card </h2>
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