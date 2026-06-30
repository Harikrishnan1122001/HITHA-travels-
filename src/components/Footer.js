import React from 'react';
import './Footer.css';
import logo from './hitha-logo.png';
const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src={logo} alt="Madurai Logo" className="footer-logo-img" />
            <div>
              <div className="footer-logo-name">Madurai</div>
              <div className="footer-logo-sub">Acting Drivers</div>
            </div>
          </div>
          <p className="footer-about">
            Experienced, background-verified acting drivers who handle your vehicle with the
            same care you would. No need to rent a car — just your vehicle, our driver, your journey.
          </p>
          <div className="footer-cert">
            <span>🏆 ISO Certified</span>
            <span>✅ Government Registered</span>
          </div>
        </div>
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            {['home', 'about', 'services', 'contact'].map(id => (
              <li key={id}>
                <button onClick={() => scrollTo(id)}>
                  {id === 'about' ? 'About Us' : id === 'contact' ? 'Contact Us' : id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            {['Local Acting Driver', 'Outstation Acting Driver', 'Night Duty Driver', 'One-Way Drop', 'Event & Wedding Driver', 'Corporate & Business Driver', 'Monthly / Long-Term Driver'].map(s => (
              <li key={s}><span>→ {s}</span></li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          {/* <div className="footer-contact-item">
            <span>📍</span>
            <p>9A, Dindigul Main Rd,<br />Vilangudi, Madurai - 625018</p>
          </div> */}
          <div className="footer-contact-item">
            <span>📞</span>
            <a href="tel:+91 9585085252">+91 9585085252</a>
          </div>
          <div className="footer-contact-item">
            <span>✉️</span>
            <a href="mailto:hithatourstravels@gmail.com">hithatourstravels@gmail.com</a>
          </div>
          <div className="footer-contact-item">
            <span>🕐</span>
            <p>24/7 Available — No holidays</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} Madurai  Acting Drivers, Madurai — Your Trusted Acting Driver Service.</p>
        <p>Made with ❤️ in Madurai, Tamil Nadu</p>
      </div>
      <button className="back-to-top" onClick={() => scrollTo('home')} aria-label="Back to top">
        ↑
      </button>
    </footer>
  );
};
export default Footer;