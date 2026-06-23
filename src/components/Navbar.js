import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './hitha-logo.png';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact Us' },
  ];
  const scrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => scrollTo('home')}>
        <img src={logo} alt="Hitha Acting Driver's Logo" className="footer-logo-img" />
        <div className="nav-logo-text">
          <span className="logo-name">HITHA</span>
          <span className="logo-sub">Acting Driver's</span>
        </div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.id}>
            <button
              className={`nav-btn ${active === link.id ? 'active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
              <span className="nav-underline"></span>
            </button>
          </li>
        ))}
        <li>
          <button className="nav-cta" onClick={() => scrollTo('contact')}>Book Now</button>
        </li>
      </ul>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
      </button>
    </nav>
  );
};
export default Navbar;