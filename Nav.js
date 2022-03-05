import React from "react";
import './Nav.css';
import {Link} from 'react-router-dom';

export default function Nav(){
    return(
<div className="nav">
    
    <Link style={{textDecoration:"none",color:"black"}} to ='/'>Home</Link>
    <Link style={{textDecoration:"none",color:"black"}} to="/about">About</Link>
    <Link style={{textDecoration:"none",color:"black"}} to="/dashboard">Dashboard</Link>
</div>
    );
}