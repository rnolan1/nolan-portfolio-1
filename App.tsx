import Logo from './assets/Nolan_Logo.svg';
import IG from './assets/ig-icon-blk.svg';
import LI from './assets/li-icon-blk.svg';
import Git from './assets/github-mark.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Resume from './assets/RNolanResume_2024_Web.pdf'

function App() {
  return (
    <>
      {/* Navbar */}
        <nav>
        <ul className="topnav">
          <li><Link to="/Home"><img src={Logo} alt="Logo" /></Link></li>
          <li className="resume-button">
            <a href= {Resume} target="blank">Resume</a>
          </li>
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
      
      {/* Social Media Links */}
      <footer className="social-media">
        <p className='FooterTag'>let's create something amazing together!</p>
        <a href="https://www.linkedin.com/in/rachel-nolan-481490177/" target="_blank" rel="noopener noreferrer">
        <img src={LI} alt="LinkedIn" />
        </a>
        <a href="https://github.com/rnolan1" target="_blank" rel="noopener noreferrer">
          <img src={Git} alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/nolan.creative/" target="_blank" rel="noopener noreferrer">
          <img src={IG} alt="Instagram" />
        </a>
      </footer>
    </>
  );
};

export default App;

