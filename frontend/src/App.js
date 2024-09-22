// Enzo Ferroni (RA: 10417100)
// Rafael Neves (RA: 10418316)
// Rodrygo Vasconcellos (RA: 10381768)

import React, { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Requisição para o backend no endpoint /books
    fetch('http://localhost:25000/books') // Usado localhost para testes, ao usar na AWS alterara para o IP público da máquina do backend
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Erro ao buscar livros:', error));
  }, []);

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    color: '#333',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const itemStyle = {
    background: '#f9f9f9',
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  };

  const imgStyle = {
    width: '80px',
    height: 'auto',
    marginRight: '20px',
    borderRadius: '5px',
  };

  const bookDetailsStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const titleStyle = {
    marginBottom: '10px',
    color: '#2c3e50',
  };

  const authorStyle = {
    color: '#7f8c8d',
  };

  const footerStyle = {
    marginTop: '40px',
    padding: '10px 0',
    borderTop: '1px solid #ddd',
    color: '#555',
    fontSize: '14px',
  };

  const memberStyle = {
    margin: '5px 0',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '2rem', marginBottom: '30px' }}>Lista de Livros</h1>
      <ul style={listStyle}>
        {books.map((book, index) => (
          <li key={index} style={itemStyle}>
            <div style={bookDetailsStyle}>
              <img src={book.cover} alt={book.title} style={imgStyle} />
              <div>
                <h2 style={titleStyle}>{book.title}</h2>
                <p style={authorStyle}><strong>Autor:</strong> {book.author}</p>
                <p>{book.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      
      {/* Footer com informações dos integrantes do grupo */}
      <footer style={footerStyle}>
        <h3>Integrantes do Grupo</h3>
        <div style={memberStyle}>Enzo Ferroni (RA: 10417100)</div>
        <div style={memberStyle}>Rafael Neves (RA: 10418316)</div>
        <div style={memberStyle}>Rodrygo Vasconcellos (RA: 10381768)</div>
        {/* Adicione mais membros conforme necessário */}
      </footer>
    </div>
  );
}

export default App;
