import React from "react";
import './Nav.css';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
export default function Nav(){
    const {logout}=useAuth0();
    return(
<div className="nav">
    
    <Link style={{textDecoration:"none",color:"black"}} to ='/'>Home</Link>
    <Link style={{textDecoration:"none",color:"black"}} to="/about">About</Link>
    <Link style={{textDecoration:"none",color:"black"}} to="/dashboard">Dashboard</Link>
    <button  onClick={()=>logout()}className="btn btn-dark">Logout</button>

</div>
    );
}