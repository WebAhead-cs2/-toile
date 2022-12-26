import { useState } from "react"; 
import {Link } from "react-router-dom";
import "./Login.css"
function Login(){
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
    <form className="login" onSubmit={handleSubmit}>
        <h3 className="title">Login</h3>
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
        <Link to="/signup"><button className="link-btn">
              New user? Create account here.
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

export default Login;


