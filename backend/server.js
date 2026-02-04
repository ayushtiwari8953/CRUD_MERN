const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// connect routes form This comment is chatgpt.

const bookRoutes = require('./routes/books');
app.use('/api/books/',bookRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/booksdbnew', {

}).then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.error('MongoDB Connection Error: ', err);
});

// default root
app.get('/',(req,res) => {
    res.send('Backend is running....');
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is running on ${PORT}');
});









































































































































































