import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
const Nav = () => {
  const auth=localStorage.getItem('user');
  const navigate= useNavigate();
  const Logout=()=>{
    localStorage.clear();
    navigate('/SignUp')
  }
  return (
    <div>

      <img alt="logo" className='logo' src='data:image/png;base64,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'/>


      {auth ? <ul className="nav-ul">
        
        <li> <Link to='/Product'>Product </Link></li>   
            <li><Link to='/Add'>Add product </Link></li>
            <li><Link to='/Update'>update product </Link></li>
            <li><Link to='/Profile'>Profile </Link></li>
            <li><Link onClick={Logout} to ="/SignUp"> LogOut({JSON.parse(auth).name})</Link></li>
            </ul>
             
               
               :
               <ul className="nav-ul nav-right">
               <li><Link to="/SignUp">signup</Link></li>
              
               <li><Link to='/Login'>Login </Link></li>
               </ul>
              
              

      }  
      
    </div>
  )
}

export default Nav
