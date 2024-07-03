import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './MainPage';
import About from './About';
import Portfolio from './Portfolio';
import Photo from './Photo';
import Contact from './Contact';
import Comic from './Comic';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/photos" element={<Photo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comic" element={<Comic />} />
      </Routes>
    </Router>
  );
}

export default App;

