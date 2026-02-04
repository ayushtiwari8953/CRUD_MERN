import React, { useState, useEffect } from "react";
import axios from "axios";

const Booklist = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/books/");
            setBooks(res.data);
        }
        catch (err) {
            console.error("Error fetching books:", err);
        }
    }



    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this book')) {
            try {
                await axios.delete(`http://localhost:5000/api/books/${id}`);
                alert('Book deleted succesfully');
                fetchBooks();
            }
            catch (err) {
                console.error("Error deleting book:", err);
                alert('Error delete Book');
            }
        }
    }



    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4  ">Book List </h2>
            <table className="table table-boardered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {books.length > 0 ? (
                        books.map((book) => (

                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.year}</td>
                                <td>{book.price}</td>
                                <td>
                                    <a href={`/edit/${book._id}`} className="btn btn-sm btn-warning m-2"><i className="fas fa-edit"></i>Edit</a>

                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(book._id)}><i className="fas fa-trash"></i>Delete</button>
                                </td>
                            </tr>))
                    ) : (
                        <tr>
                            <td>No books found</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    )
}

export default Booklist;
