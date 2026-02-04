const express = require('express');
const router = express.Router();

const Book = require('../models/book');

// cRUD API Routes 

// CREate new book

router.post('/',async(req,res) => {
    try{
        // console.log(req.body);

        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    }
    catch(err) {
        res.status(400).json({error : err.message});
    }
});



router.get('/',async(req,res) => {
    try{
        const book = await Book.find();
        res.json(book);
    }
    catch(err) {
        res.status(500).json({error : err.message});
    }
});


router.put('/:id',async(req,res) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, 
            req.body, {new : true});
        
        res.json(updatedBook);
    }
    catch(err) {
        res.status(400).json({error : err.message});
    }
});


router.delete('/:id',async(req,res) => {
    try{
        await Book.findByIdAndDelete(req.params.id);
        
        res.json({message: 'Book deleted succesfully!!'});
    }
    catch(err) {
        res.status(500).json({error : err.message});
    }
});

// router.get('/', async (req,res) => {
//     const book = await Book.find();
// });




module.exports = router;


