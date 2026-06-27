import React, { useEffect, useRef } from 'react';
import './About.css';
const About = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-left reveal-left">
          <div className="about-img-wrapper">
            {/* SVG illustration of Tamil Nadu map + car */}
            <svg viewBox="0 0 380 420" xmlns="http://www.w3.org/2000/svg" className="about-svg">
              {/* Background circle */}
              <circle cx="190" cy="210" r="180" fill="rgba(245,197,24,0.04)" stroke="rgba(245,197,24,0.15)" strokeWidth="1"/>
              <circle cx="190" cy="210" r="140" fill="rgba(245,197,24,0.03)" stroke="rgba(245,197,24,0.1)" strokeWidth="1"/>
              {/* Simplified Tamil Nadu shape */}
              <path d="M160 60 L200 55 L230 70 L245 100 L250 140 L240 180 L250 220 L245 270 L220 320 L190 360 L170 320 L155 270 L150 220 L140 180 L135 140 L145 100 Z" 
                fill="rgba(245,197,24,0.08)" stroke="rgba(245,197,24,0.4)" strokeWidth="2" />
              {/* Madurai star */}
              <circle cx="190" cy="240" r="8" fill="#F5C518"/>
              <circle cx="190" cy="240" r="14" fill="none" stroke="#F5C518" strokeWidth="1" opacity="0.5"/>
              <circle cx="190" cy="240" r="20" fill="none" stroke="#F5C518" strokeWidth="0.5" opacity="0.3"/>
              <text x="205" y="244" fill="#F5C518" fontSize="11" fontFamily="Inter">Madurai</text>
              {/* Route lines */}
              <line x1="190" y1="240" x2="170" y2="150" stroke="#F5C518" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6"/>
              <line x1="190" y1="240" x2="210" y2="160" stroke="#F5C518" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6"/>
              <line x1="190" y1="240" x2="185" y2="300" stroke="#F5C518" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6"/>
              {/* Other city dots */}
              <circle cx="170" cy="150" r="5" fill="#fff" opacity="0.6"/>
              <text x="140" y="147" fill="#aaa" fontSize="9" fontFamily="Inter">Chennai</text>
              <circle cx="210" cy="160" r="5" fill="#fff" opacity="0.6"/>
              <text x="216" y="163" fill="#aaa" fontSize="9" fontFamily="Inter">Trichy</text>
              <circle cx="185" cy="300" r="5" fill="#fff" opacity="0.6"/>
              <text x="190" y="303" fill="#aaa" fontSize="9" fontFamily="Inter">Kanyakumari</text>
              {/* Car */}
              <g transform="translate(90, 340)">
                <rect x="0" y="15" width="80" height="22" rx="4" fill="#222"/>
                <path d="M12 15 Q22 0 40 0 Q58 0 68 15Z" fill="#2a2a2a"/>
                <rect x="0" y="23" width="80" height="3" fill="#F5C518"/>
                <circle cx="18" cy="37" r="8" fill="#333"/>
                <circle cx="18" cy="37" r="4" fill="#F5C518"/>
                <circle cx="62" cy="37" r="8" fill="#333"/>
                <circle cx="62" cy="37" r="4" fill="#F5C518"/>
                <ellipse cx="78" cy="24" rx="3" ry="2.5" fill="#F5C518"/>
                <rect x="-1" y="18" width="3" height="6" rx="1" fill="#E63946"/>
              </g>
            </svg>
            <div className="about-badge">
              <span className="badge-num">10+</span>
              <span className="badge-text">Years of<br/>Excellence</span>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="reveal">
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="section-title display-font">
              Your Trusted<br />
              <span className="text-gold">Driving Partner in Madurai</span>
            </h2>
          </div>
          <p className="about-text reveal" style={{transitionDelay: '0.1s'}}>
            Madurai  Acting Drivers is a Madurai-based service provider specializing in acting
            driver services. We were established to address a simple but common need — people
            who own a vehicle but require a skilled, trustworthy driver to operate it for them,
            whether due to long travel fatigue, lack of time, medical reasons, or personal
            preference.
          </p>
          <p className="about-text reveal" style={{transitionDelay: '0.2s'}}>
            Our mission is to provide safe, reliable, and professional driving assistance so our
            customers can travel with peace of mind, without the stress of driving themselves.
            Whether it is a single evening drop, a wedding function, or a multi-day outstation
            journey, we are committed to being your trusted driving partner.
          </p>
          <div className="about-features reveal" style={{transitionDelay: '0.3s'}}>
            {[
              { icon: '🚘', title: 'Trained Network', desc: 'Drivers familiar with Madurai & surrounding routes' },
              { icon: '⏰', title: 'Always Punctual', desc: 'Courtesy & responsible driving on every trip' },
              { icon: '💰', title: 'Fair Pricing', desc: 'Transparent rates, no hidden charges' },
              { icon: '🤝', title: 'Personalized Service', desc: 'For individuals, families & corporate clients' },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <span className="feature-icon">{f.icon}</span>
                <div>
                  <strong>{f.title}</strong>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;