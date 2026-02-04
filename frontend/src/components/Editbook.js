// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Editbook = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        year: '',
        price: ''
    });

    useEffect(() => {
        axios.get('http://localhost:5000/api/books/')
        .then(res => {
              const book = res.data.find(b=>b._id === id );
              if (book) setFormData(book);
        })
        .catch(err => console.error('Error Fetching books:', err));
}, [id]);

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
}

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.put(`http://localhost:5000/api/books/${id}`, formData);
        alert('Book Updated succesfully!!');
        navigate('/');
    }
    catch (err) {
        console.error('Error Updating book:', err);
        alert('Error editing book');
    }
};

return (
    <div className="container mt-5 text-dark" >
        <h2 className='text-center mb-4'>Edit  book</h2>

        <form className='border p-3 rounded bg-light' onSubmit={handleSubmit}>

            <div className='mb-3'>
                <label className='form-label'>Title</label>
                <input type='text' className='form-control' name='title' placeholder='Enter your title of book' required value={formData.title} onChange={handleChange} />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Author</label>
                <input type='text' className='form-control' name='author' placeholder='Enter your author of book' value={formData.author} onChange={handleChange} />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Year</label>
                <input type='Number' className='form-control' name='year' placeholder='Enter your Year of Book' value={formData.year} onChange={handleChange} />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Price</label>
                <input type='Number' className='form-control' name='price' placeholder='Enter your Price of Book' value={formData.price} onChange={handleChange} />
            </div>

            <button type='submit' className='btn btn-primary w-100'>
                <i className='fas fa-plus-circle mb-2'></i>Edit Book
            </button>
        </form>
    </div>
)
}

export default Editbook;
