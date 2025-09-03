// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';

// Rotas
import ConteudosRoutes from './routes/ConteudosRoutes';
import GamesRoutes from './routes/GamesRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {ConteudosRoutes()}
        {GamesRoutes()}
      </Routes>
    </Router>
  );
}

export default App;
