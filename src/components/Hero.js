import React, { useEffect, useRef } from 'react';
import './Hero.css';
const Hero = () => {
  const taglineRef = useRef(null);
  useEffect(() => {
    const text = "Your Journey, Our Passion.";
    const el = taglineRef.current;
    if (!el) return;
    el.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, []);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="home" className="hero">
      <div className="hero-road">
        <div className="road-center-line"></div>
      </div>
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }}></div>
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow animate-fadeInUp">
          <span className="eyebrow-line"></span>
          <span>Madurai's Premier Acting Driver Service</span>
          <span className="eyebrow-line"></span>
        </div>
        <div className="hero-logo-title animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          {/* <img src={logo} alt="Hitha Logo" className="hero-logo-img" /> */}
          <div>
            <h1 className="hero-title">
              <span className="title-gold">Madurai</span>
            </h1>
            <p className="hero-subtitle-brand">Acting Drivers</p>
          </div>
        </div>
        {/* <p ref={taglineRef} className="hero-tagline animate-fadeInUp" style={{animationDelay: '0.4s'}}></p> */}
         <p ref={taglineRef} className="hero-tagline animate-fadeInUp" style={{animationDelay: '0.4s'}}></p>
        <a href="tel:9585085252" className="hero-phone-big animate-fadeInUp" style={{animationDelay: '0.5s'}}>
          9585085252
        </a>
        <h2 className="hero-headline animate-fadeInUp" style={{animationDelay: '0.5s'}}>
          Reliable Acting Driver Service in Madurai
        </h2>
        
        <p className="hero-desc animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          Madurai  Acting Drivers provides professional, well-trained acting drivers for your
          personal and commercial vehicles — for local trips, outstation journeys, and every
          occasion in between.
        </p>
        
        <div className="hero-btns animate-fadeInUp" style={{animationDelay: '0.8s'}}>
           <button className="btn-primary" onClick={() => scrollTo('services')}>
            Explore Services
            <span className="btn-arrow">→</span>
          </button>
         <button className="btn-secondary" onClick={() => scrollTo('contact')}>
            Book a Driver Now
          </button>
        </div>
        <div className="hero-stats animate-fadeInUp" style={{animationDelay: '1s'}}>
          {[
            { num: '500+', label: 'Happy Clients' },
            { num: '24/7', label: 'Available' },
            { num: '10+', label: 'Years Exp.' },
            { num: '50+', label: 'Verified Drivers' },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-car-scene">
        <div className="scene-road"></div>
        <div className="hero-car-anim">
          <svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" className="hero-car">
            <ellipse cx="140" cy="90" rx="110" ry="10" fill="rgba(245,197,24,0.12)"/>
            <rect x="30" y="48" width="220" height="38" rx="8" fill="#1a1a1a"/>
            <path d="M70 48 Q90 12 140 12 Q190 12 210 48Z" fill="#222"/>
            <path d="M80 46 Q96 16 132 16 L132 46Z" fill="#F5C518" opacity="0.7"/>
            <path d="M136 16 Q172 16 200 46 L136 46Z" fill="#F5C518" opacity="0.7"/>
            <rect x="30" y="62" width="220" height="5" fill="#F5C518"/>
            <circle cx="82" cy="86" r="16" fill="#333"/>
            <circle cx="82" cy="86" r="9" fill="#444"/>
            <circle cx="82" cy="86" r="4" fill="#F5C518"/>
            <circle cx="198" cy="86" r="16" fill="#333"/>
            <circle cx="198" cy="86" r="9" fill="#444"/>
            <circle cx="198" cy="86" r="4" fill="#F5C518"/>
            <ellipse cx="250" cy="65" rx="7" ry="6" fill="#F5C518" opacity="0.9"/>
            <ellipse cx="250" cy="65" rx="20" ry="4" fill="#F5C518" opacity="0.15" transform="translate(5,0)"/>
            <rect x="28" y="56" width="7" height="12" rx="2" fill="#E63946"/>
            <line x1="185" y1="12" x2="185" y2="-8" stroke="#888" strokeWidth="2"/>
          </svg>
        </div>
      </div>
      <div className="scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;