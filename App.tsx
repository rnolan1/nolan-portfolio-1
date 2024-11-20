import Logo from './assets/Nolan_Logo.svg';
import IG from './assets/ig-icon-blk.svg';
import LI from './assets/li-icon-blk.svg';
import BG from './assets/STL_IllustratedBG_BW2.png';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <>
      <nav>
        <ul className="topnav">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Work">Work</Link></li> 
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Work" element={<Work />} />
      </Routes>

      <div className="Logo">
        <Link to="/Home"><img src={Logo} alt="Logo" /></Link>
      </div>
      <div>
        <h4>Welcome to the Portfolio Site of</h4>
        <h1>Rachel Nolan</h1>
        <h4>Motion Designer | Artist</h4>
      </div>
      <div className="Video">
        video will go here
      </div>
      <br />
      <div className="footer-container">
        <a href="https://www.linkedin.com/in/rachel-nolan-481490177/" target="_blank" rel="noopener noreferrer">
          <img src={LI} alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/nolan.creative/" target="_blank" rel="noopener noreferrer">
          <img src={IG} alt="Instagram" />
        </a>
      </div>
      <div className="copyright">
        <footer>©2024 Nolan Creative</footer>
      </div>
      <div className="footer-image">
        <img src={BG} alt="Background" />
      </div>
    </>
  );
}

export default App;

