import React from 'react';
import './Hero.css';
import driverImg from './driver.jpg'; // 👈 replace with your actual driver photo path

const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      {/* ===== Photo banner ===== */}
      <div className="hero-banner" style={{ backgroundImage: `url(${driverImg})` }}>
        <div className="hero-overlay"></div>

        <div className="hero-particles">
          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 5}s`,
                width: `${3 + Math.random() * 6}px`,
                height: `${3 + Math.random() * 6}px`,
              }}
            ></div>
          ))}
        </div>

        <div className="hero-inner">
          <div className="hero-left">
            <p className="hero-eyebrow">Madurai's Premier Acting Driver Service</p>

            <h1 className="hero-title">
              <span className="title-gold">Professional Drivers</span>
              <span className="title-white">You Can Rely On</span>
            </h1>

            <div className="hero-divider">
              <span className="divider-line"></span>
              <span className="divider-icon">🚗</span>
              <span className="divider-line"></span>
            </div>

            <p className="hero-tagline">Your Journey, Our Passion.</p>

            <p className="hero-desc">
              Madurai Acting Drivers provides professional, well-trained acting drivers for your
              personal and commercial vehicles — for local trips, outstation journeys, and every
              occasion in between.
            </p>

            <div className="hero-btns">
              <button className="btn-primary" onClick={() => scrollTo('services')}>
                Explore Services
                <span className="btn-arrow">→</span>
              </button>
              <button className="btn-secondary" onClick={() => scrollTo('contact')}>
                Book a Driver Now
              </button>
            </div>
          </div>

          <a href="tel:9585085252" className="hero-call-chip">
            <span className="call-icon">📞</span>
            <span className="call-text">
              <span className="call-label">Call Us Anytime</span>
              <span className="call-number">9344270077</span>
            </span>
          </a>
        </div>
      </div>

      {/* ===== Stats bar ===== */}
      <div className="hero-stats">
        {[
          { num: '500+', label: 'Happy Clients' },
          { num: '24/7', label: 'Available' },
          { num: '9+', label: 'Years Exp.' },
          { num: '50+', label: 'Verified Drivers' },
        ].map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ===== Car animation strip ===== */}
      <div className="hero-car-scene">
        <div className="scene-road"></div>
        <div className="hero-car-anim">
          <svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" className="hero-car">
            <ellipse cx="140" cy="90" rx="110" ry="10" fill="rgba(245,197,24,0.12)" />
            <rect x="30" y="48" width="220" height="38" rx="8" fill="#1a1a1a" />
            <path d="M70 48 Q90 12 140 12 Q190 12 210 48Z" fill="#222" />
            <path d="M80 46 Q96 16 132 16 L132 46Z" fill="#F5C518" opacity="0.7" />
            <path d="M136 16 Q172 16 200 46 L136 46Z" fill="#F5C518" opacity="0.7" />
            <rect x="30" y="62" width="220" height="5" fill="#F5C518" />
            <circle cx="82" cy="86" r="16" fill="#333" />
            <circle cx="82" cy="86" r="9" fill="#444" />
            <circle cx="82" cy="86" r="4" fill="#F5C518" />
            <circle cx="198" cy="86" r="16" fill="#333" />
            <circle cx="198" cy="86" r="9" fill="#444" />
            <circle cx="198" cy="86" r="4" fill="#F5C518" />
            <ellipse cx="250" cy="65" rx="7" ry="6" fill="#F5C518" opacity="0.9" />
            <ellipse cx="250" cy="65" rx="20" ry="4" fill="#F5C518" opacity="0.15" transform="translate(5,0)" />
            <rect x="28" y="56" width="7" height="12" rx="2" fill="#E63946" />
            <line x1="185" y1="12" x2="185" y2="-8" stroke="#888" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;