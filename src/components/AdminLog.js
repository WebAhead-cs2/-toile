import { useState } from "react"; 
import "./AdminLog.css";
import {Link } from "react-router-dom";
function AdminLog(){
const [email,setEmail]= useState('');
const [password,setPassword] =useState('');
const [error,setError]= useState(false);

const handleSubmit= async (e)=>{
 e.preventDefault()
 if(email.length == 0 || password.length == 0){
    setError(true);
 }
 if(email.length == 0 && password.length == 0){
    setError(true);
 }
 if(email&&password){
 console.log(email, password);
}
}

return(
    <form className="adminlog" onSubmit={handleSubmit}>
        <h3 className="title">Admin Login</h3>
        <div className="input">
        <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Email"/>
        <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="Password"/>
        </div>
        {error ?
        <label className="message">Something went wrong!</label> : ""}
        <br></br>
        <br></br>
        <button type="submit" className="submit">Login</button>
        <br></br>
        <Link to="/"><button className="link-btn">
              Home Page
            </button>
            </Link>
    </form>
)
};

export default AdminLog;


