import React, { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Requisição para o backend no endpoint /books
    fetch('http://localhost:25000/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Erro ao buscar livros:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Livros</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h2>{book.title}</h2>
            <p><strong>Autor:</strong> {book.author}</p>
            <p><strong>Descrição:</strong> {book.description}</p>
            <img src={book.cover} alt={book.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
