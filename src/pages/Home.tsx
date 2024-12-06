import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import LogoBar from '../assets/brands_logo-bar.svg';

function Home() {
  return (
    <>

      {/* Intro Section Copy */}
      <section id="home" className="intro-section">
        <h1>
          Hi, I’m <span className="highlighted-text">Rachel</span>
        </h1>
        <p>
          With 5 years of experience in the advertising industry as a <span className="bolded-text">Graphic + Motion Designer</span>, I bring my own unique blend of creativity and technical expertise to the table.
        </p>
        {/* Contact Button */}
        <button className="cta-button"><Link to="/Contact">let’s connect!</Link></button>
      </section>

      {/* Brand Logos */}
      <section className="brands">
        <h3>BRANDS I’VE WORKED WITH:</h3>
        <div className="brand-logos">
          <img src={LogoBar} alt="Clients" />
        </div>
      </section>

    </>
  );
};

export default Home;