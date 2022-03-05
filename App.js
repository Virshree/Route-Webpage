import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Nav from './Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/dashboard';
function App() {
  return (
    <div className="app">
     <BrowserRouter>
     <Nav/>
     <div className='app-body'>
     <Routes>
        <Route path ="/" element={<Home/>}></Route>
         <Route path ="/about" element={<About/>}></Route>
          <Route path ="/dashboard" element={<Dashboard/>}></Route>
     </Routes>
     </div>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
