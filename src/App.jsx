import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Chess from './pages/Chess';
import About from './pages/About';
import Games from './pages/Games';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Games />} />
          <Route path='/about' element={<About />} />
          <Route path='/chess' element={<Chess />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
