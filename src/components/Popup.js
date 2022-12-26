import React, { useState } from "react";
import "./Popup.css";
import {Link } from "react-router-dom";


function Popup() {
    const [pass, setPass] = useState('');

    const handleSubmit= async (e)=>{
      e.preventDefault()
      console.log(pass);
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
        <div >
           <input className="input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Security Key"  id="password"/>
        </div>
        <Link to="/adminlog"><button className="submit">
              Login
            </button>
            </Link>
      </div>
    </div>
    </form>
    
  );
}

export default Popup;