import React, { useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);

    // Function to call the API
    const addProductFunc = async () => {
        if (!name || !price || !category || !company) {
            setError(true);
            return;
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log('User ID:', userId);

        const result = await fetch('http://localhost:5000/add-product', {
            method: 'POST',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await result.json();
        console.log(data);
    };

    return (
        <div className='product'>
            <h1>Add Product</h1>
            
            <input
                type="text"
                placeholder='Enter product name'
                className='inputBox'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {error && !name && <span className='invalid-input'>Enter a valid name</span>}
            
            <input
                type="text"
                placeholder='Enter product price'
                className='inputBox'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            {error && !price && <span className='invalid-input'>Enter a valid price</span>}

            <input
                type="text"
                placeholder='Enter product category'
                className='inputBox'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            {error && !category && <span className='invalid-input'>Enter a valid category</span>}

            <input
                type="text"
                placeholder='Enter product company'
                className='inputBox'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            {error && !company && <span className='invalid-input'>Enter a valid company</span>}

            <button className='addButton' onClick={addProductFunc}>Add Product</button>
        </div>
    );
};

export default AddProduct;
