import React, { useState } from "react";
import "./Popup.css";
import {Link } from "react-router-dom";


function Popup() {
    const [pass, setPass] = useState('');
    const [error,setError]= useState(false);


    const handleSubmit= async (e)=>{
      e.preventDefault()
      if(pass.length== 0){
        setError(true)      
      }
      if(pass){
      console.log(pass);
    }     
     }
  return (
  <form className="popup" onSubmit={handleSubmit}>
    <div className="poupupBackground">
      <div className="popupContainer">
        <div className="titleCloseBtn">
          <Link to="/login"><button className="titleCloseBtn" >
              X
            </button>
            </Link>
        </div>
        <div >
          <p className="title">Please enter the security key</p>
        </div>
        <div className="input" >
          <input type="password" onChange={(e) => setPass(e.target.value)} value={pass}  placeholder="Security Key"  id="password"/>
        </div>
        <br></br>
        <br></br>
        {error ?
        <label className="message">Something went wrong!</label> : ""}
        <Link to="/adminlog"><button type="submit" onClick={handleSubmit} className="submit">Login</button>
            </Link>
      </div>
    </div>
    </form>
    
  );
}

export default Popup;