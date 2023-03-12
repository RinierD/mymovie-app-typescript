 import React from 'react';
import './App.css';
import MovieComponent from './components/movie-component';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <MovieComponent />
  </BrowserRouter>
  );
}

export default App;