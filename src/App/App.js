import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gallery from '../components/Gallery/Gallery';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import ImagePage from '../components/ImagePage/ImagePage'; // The page for displaying the individual image
import NotFound from '../components/NotFound/NotFound'; // Import the NotFound component

function App() {
  return (
    <Router>
      <div id="page-container">
      <div id="content-wrap">
        <Header />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:imageId" element={<ImagePage />} />
          <Route path="/404" element={<NotFound />} /> {/* 404 route */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for unmatched paths */}
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const Header = () => (
  <header className="header">
    <h1>Twisted Visions Studio</h1>
    <nav>
      <Link to="/">Gallery</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);
const Footer = () => (
  <footer id="footer">
    <p>&copy; 2024 Twisted Visions Studio. All rights reserved.</p>
  </footer>
);

//const FooterImage = () => (
//  <div className="footer-image">
//    <img src="..\assets\images\donkey-footer.png" alt="donkey-footer" />
//  </div>
//);

export default App;