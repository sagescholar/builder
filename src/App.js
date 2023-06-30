import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TopPage from './components/TopPage';
import NextPage from './components/NextPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/next" element={<NextPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
