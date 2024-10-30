import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('');
   const navigate=useNavigate()
    useEffect(()=>{
 const auth=localStorage.getItem('user')
   if(auth)
   {
    navigate('/Product');
   }
    })
   
 

    const handlelogin= async ()=>{
        console.warn( email, password);
        let result=await fetch('http://localhost:5000/login',{
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers:{
            'Content-Type':'application/json',
        }
    });
    result=await result.json();
    console.log(result);
    if(result.name)
    {
        localStorage.setItem("user",JSON.stringify(result))
        navigate('/Product')
    }
    else{
        alert('invalid details')
    }
    }


  return (
    <div className='login'>
      <input type='text' className='inputBox' placeholder='Enter Emil'
      onChange={(e)=>setEmail(e.target.value)} value={email} />
      <input type='text' className='inputBox' placeholder='Enter Password'
            onChange={(e)=>setPassword(e.target.value)} value={password} />
            
      <button onClick={handlelogin} className='btn' type="button">Login</button>

    </div>
  )
}

export default Login
