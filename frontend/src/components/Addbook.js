import React, {useState} from 'react';
import axios from 'axios';


const Addbook = ({onBookAdded}) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        year: '',
        price: ''
    });

    const handleChange =(e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/books',formData);
            alert('Book added succesfully!!');
            setFormData(
                {
                    title:'',
                    author:'',
                    year:'',
                    price:''
                }
            );
            if (onBookAdded) onBookAdded();
        }
        catch(err) {
            console.error('Error adding book:', err);
            alert('Error ading book'); 
        }
    };

    return (
        <div className='container mt-5'>
            <h2 className='text-center mb-4 '>Add new book</h2>

            <form className='border p-3 rounded bg-light' onSubmit={handleSubmit}>

                <div className='mb-3'>
                    <label className='form-label'>Title:</label>
                    <input type='text' className='form-control' name='title' placeholder='Enter your title of book' required value={formData.title}  onChange={handleChange} />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Author:</label>
                    <input type='text' className='form-control' name='author'  placeholder='Enter your author of book' value={formData.author} onChange={handleChange} />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Year:</label>
                    <input type='Number' className='form-control' name='year'  placeholder='Enter your Year of Book' value={formData.year} onChange={handleChange}/>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Price ₹ </label>
                    <input type='Number' className='form-control' name='price' placeholder='Enter your Price of Book' value={formData.price} onChange={handleChange}/>
                </div>

                <button type='submit' className='btn btn-primary w-100'>
                    <i className='fas fa-plus-circle mb-2'></i>Add Book
                </button>
            </form>
        </div>
    )
}

export default Addbook;
