const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes here


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});