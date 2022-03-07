import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Nav from './Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Login';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {user}=useAuth0();

  return (
    <div className="app">
      {!user ?<Login/>:(
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
     
      )}
 
    </div>
  );
}

export default App;
