
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
     <Nav/>
     <Routes>

    <Route element ={<PrivateComponent/>} > 

      <Route path="/Product" element={<ProductList/>}/>
      <Route path="/Add" element={<AddProduct/>}/>
      <Route path="/Update/:id" element={<UpdateProduct/>}/>
      <Route path="/Logout" element={<h2>Logout</h2>}/>
      <Route path="/profile" element={<h2>profile</h2>}/>
      </Route>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/Login" element={<Login/>}/>

     </Routes>
     </BrowserRouter>
     <Footer/>
    </div> 
  );
}

export default App;
//PrivateComponent wil act as a wrapper for all the elements written inside and can be accessed ater a certain condition s fulfilled
// Rpotes inside PrivateComponent are proteted routes