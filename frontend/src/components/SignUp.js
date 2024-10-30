import React, {useState,useEffect} from 'react'
import { useNavigate  } from 'react-router-dom';

const SignUp = () => {


    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const navigate=useNavigate();

    
    useEffect(()=>{
      const auth=localStorage.getItem('user')
      if(auth)
      {
       navigate('/Product');
      }
    })


    const collectData= async ()=>{
        console.log(name,email,password);
        let result= await fetch('http://localhost:5000/register',{
         method:'POST',
         body:JSON.stringify({name,email,password}) , //stringify is used to convert strin to json
         
        })
        result=await result.json()
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/Product');  //move o a specific page we want after signup
        
    }


  return (
    <div className="register">
      <h3>Register</h3>
      <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name"/>
      <input className="inputBox"  type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter E-mail"/>
      <input className="inputBox"  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
      <button onClick={collectData} className="SignUp_btn">SignUp</button>
    </div>
  )
}

export default SignUp
