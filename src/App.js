// import './App.css';
import React from 'react';
import Login from './components/Login';
import { Signup } from './components/Signup';
import  AdminLog  from './components/AdminLog';
import Popup from './components/Popup';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      

     <BrowserRouter>
     <Routes>
      < Route 
      path='/login'
      element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route  path='/adminlog' element={<AdminLog/>}></Route>
      <Route path='/popup' element={<Popup/>}></Route>
      </Routes>
      </BrowserRouter>
    
      
       
      
      
    </div>
  );
  
    }
    

export default App;
