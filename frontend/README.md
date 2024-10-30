# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


import React from 'react'
import { useState } from 'react';

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error,setError]= React.useState(false)
//function to use api or call our api

    const  addProductFunc=async ()=>{
        console.warn(!name)
        if(!name || !price|| !category || !company)
        {
            setError(true);
            return ; 
        }



        console.warn(name,price,category,company)
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId._id);
        let result= await fetch('http://localhost:5000/add-product',{
        method: 'POST',
        body:JSON.stringify({name, price, category, company,userId}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    
        result= await result.json();
        console.log(result);
    }

    return (
        <div className='product'>
            <h1>Add Products</h1>
            <input type="text" placeholder='Enter product name' className='inputBox'
           value={name} onChange={(e)=>{setName(e.target.value)}}
           />

           {error && !name && <span className='invalid-input'>Enter valid name</span>}

            <input type="text" placeholder='Enter product price' className='inputBox' 
           value={price} onChange={(e)=>{setPrice(e.target.value)}}
           />

            <span className='invalid-input'>Enter valid name</span>


            <input type="text" placeholder='Enter product category' className='inputBox' 
           value={category}  onChange={(e)=>{setCategory(e.target.value)}}
           />

            <span className='invalid-input'>Enter valid name</span>


            <input type="text" placeholder='Enter product company' className='inputBox' 
           value={company}  onChange={(e)=>{setCompany(e.target.value)}}
           />          
             <span className='invalid-input'>Enter valid name</span>

            <button   className='addButton' onClick={addProductFunc} >Add Product</button>
        </div>
    )
}

export default AddProduct















const ProductList = () => {
  const [products, setProducts]= useState([]);
  
  useEffect(()=>{
        getProducts();
  },[])
  const getProducts= async ()=>{
    let result= await fetch('http://localhost:5000/products');
    result= await result.json();
    setProducts(result);
    console.warn("products", products);
} 
