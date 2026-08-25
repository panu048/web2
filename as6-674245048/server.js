const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const dataFile = path.join(__dirname, 'books.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api/books', (req, res) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ status: false, message: "Internal server error" });
        }
        res.status(200).json(JSON.parse(data));
    });
});

app.get('/api/book/:isbn', (req, res) => {
    const { isbn } = req.params;
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ status: false, message: "Internal server error" });
        }
        const books = JSON.parse(data);
        const book = books.find(b => b.isbn === isbn);
        
        if (!book) {
            return res.status(404).json({ status: false, message: "Book not found" });
        }
        res.status(200).json(book);
    });
});

app.post('/api/book', (req, res) => {
    const { isbn, title, author, year, publisher } = req.body;
    
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ status: false, message: "Internal server error" });
        }
        const books = JSON.parse(data);
        
        const newBook = {
            isbn,
            title,
            author,
            year,
            publisher,
            status: "available"
        };
        
        books.push(newBook);
        
        fs.writeFile(dataFile, JSON.stringify(books, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ status: false, message: "Error saving data" });
            }
            res.status(201).json({ status: true, message: "Book added successfully", book: newBook });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
