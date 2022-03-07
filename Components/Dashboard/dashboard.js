import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';


function Dashboard() {
  const[inputtext,setInputText]=useState("")
  const [task,setTask]=useState([])

const handleAdd=(e)=>{
 
    if(inputtext===""){
   alert("write something here.")
   
    }
    else if(inputtext!==""){
   e.preventDefault()
  setTask(list=>[...list,inputtext])
  console.log(task)
 
    }
}
const handleDel=(key)=>{
task.splice(key,1);
setTask(list=>[...list])
}
const navigate=useNavigate();
const navigatetoHome=()=>{
  navigate('/');
}
  return (
    <div className='dashboard'>
        <h2>Welcome to Dashboard Page </h2>
        <button onClick={navigatetoHome} className='btn btn-success'>Go to Home</button>
        <div className='dashtodo'>
          <form>
            <input type="text" className='input' value={inputtext} onChange={(e)=>setInputText(e.target.value)} placeholder='Add Task here.'/>
            <button className="btn btn-warning "onClick={handleAdd} >ADD</button>
          </form>
           </div>
           <div className='liststyle'>
              {task.map((td,index)=>(
              <div className='task' key={index}>
            
              <label>{td}</label>

           <button type="button"  className="btn-close btn-btn-danger" onClick={()=>handleDel(index)}aria-label="Close"></button> 

             </div>
              ))}
           </div>

           
        </div>
      
  )
}

export default Dashboard;