import { useState } from "react";
import {Link } from "react-router-dom";
import "./Signup.css"

export const Signup =()=>{
const [email,setEmail]= useState('');
const [password,setPassword] =useState('');
const [username,setUsername]=useState('');
const [error,setError]= useState(false);

const handleSubmit= async (e)=>{
 e.preventDefault()
 if(email.length == 0 || password.length == 0 || username.length == 0){
  setError(true);
}
if(email.length == 0 && password.length == 0 && username.length == 0){
  setError(true);
}
if(email&&password){
console.log(email, password, username);
}
}

return(
    <form className="signup" onSubmit={handleSubmit}>
        <h3 className="title">Signup</h3>
        <div className="input">
        <input type="text" onChange={(e)=> setUsername(e.target.value)} value={username} placeholder="Username"/>
        <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Email"/>
        <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="Password"/>
        </div>
        {error ?
        <label className="message">Something went wrong!</label> : ""}
        <br></br>
        <br></br>
        <button type="submit" className="submit">Signup</button>
        <br></br>
        <Link to="/login"><button className="link-btn">
              Already have account?Click here.
            </button>
            </Link>
            <br></br>
            <Link to="/popup"><button className="link-btn">
              Admin?
            </button>
            </Link>
    </form>
)
};

