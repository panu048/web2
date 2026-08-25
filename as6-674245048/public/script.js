document.addEventListener('DOMContentLoaded', () => {
    fetchBooks();

    document.getElementById('addBookForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const newBook = {
            isbn: document.getElementById('isbn').value,
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            year: document.getElementById('year').value,
            publisher: document.getElementById('publisher').value
        };

        try {
            const response = await fetch('/api/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBook)
            });
            
            const result = await response.json();
            if (response.ok) {
                alert('Success: ' + result.message);
                document.getElementById('addBookForm').reset();
                fetchBooks();
            } else {
                alert('Error: ' + result.message);
            }
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Failed to add book.');
        }
    });

    document.getElementById('searchBtn').addEventListener('click', async () => {
        const isbn = document.getElementById('searchIsbn').value.trim();
        if (!isbn) {
            alert('Please enter an ISBN to search.');
            return;
        }

        const resultDiv = document.getElementById('searchResult');
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = 'Searching...';

        try {
            const response = await fetch(`/api/book/${isbn}`);
            const data = await response.json();

            if (response.ok) {
                resultDiv.innerHTML = `
                    <div style="padding: 10px;">
                        <strong>Found Book:</strong><br><br>
                        Title: ${data.title} <br>
                        Author: ${data.author} <br>
                        Status: <span class="status-${data.status}">${data.status}</span>
                    </div>
                `;
            } else {
                resultDiv.innerHTML = `<div style="padding: 10px; color: #E74C3C;">HTTP 404: ${data.message}</div>`;
            }
        } catch (error) {
            console.error('Error searching book:', error);
            resultDiv.innerHTML = `<div style="padding: 10px; color: #E74C3C;">Failed to search book.</div>`;
        }
    });
});

async function fetchBooks() {
    try {
        const response = await fetch('/api/books');
        const books = await response.json();
        
        const tbody = document.getElementById('booksBody');
        tbody.innerHTML = '';
        
        books.forEach(book => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${book.isbn}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.year || '-'}</td>
                <td>${book.publisher || '-'}</td>
                <td class="status-${book.status}">${book.status}</td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}
