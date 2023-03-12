import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from './routers/Details';
import Home from './routers/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Router>
      <Routes>
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </Router>
);
