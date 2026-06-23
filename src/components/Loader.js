import React from 'react';
import './Loader.css';
const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="car-track">
          <div className="road-line"></div>
          <div className="car-wrapper">
            <svg className="car-svg" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
              {/* Car body */}
              <ellipse cx="100" cy="65" rx="75" ry="8" fill="rgba(0,0,0,0.2)" />
              <rect x="25" y="35" width="150" height="28" rx="6" fill="#1a1a1a"/>
              {/* Car roof */}
              <path d="M55 35 Q70 10 100 10 Q130 10 145 35Z" fill="#222"/>
              {/* Windows */}
              <path d="M62 33 Q73 14 95 14 L95 33Z" fill="#F5C518" opacity="0.8"/>
              <path d="M97 14 Q117 14 138 33 L97 33Z" fill="#F5C518" opacity="0.8"/>
              {/* Gold stripe */}
              <rect x="25" y="47" width="150" height="4" fill="#F5C518"/>
              {/* Wheels */}
              <circle cx="60" cy="63" r="13" fill="#333"/>
              <circle cx="60" cy="63" r="7" fill="#555"/>
              <circle cx="60" cy="63" r="3" fill="#F5C518"/>
              <circle cx="140" cy="63" r="13" fill="#333"/>
              <circle cx="140" cy="63" r="7" fill="#555"/>
              <circle cx="140" cy="63" r="3" fill="#F5C518"/>
              {/* Headlight */}
              <ellipse cx="175" cy="49" rx="5" ry="4" fill="#F5C518"/>
              {/* Tail light */}
              <rect x="24" y="44" width="5" height="8" rx="2" fill="#E63946"/>
            </svg>
          </div>
          <div className="road-dashes"></div>
        </div>
        <div className="loader-brand">
          <span className="loader-logo-h">H</span>
          <span className="loader-logo-rest">ITHA</span>
          <span className="loader-logo-script"> Acting Driver's</span>
        </div>
        <div className="loader-dots">
          <span>Loading</span>
          {[0,1,2,3,4,5].map(i => (
            <div key={i} className="dot" style={{animationDelay: `${i * 0.15}s`}}></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Loader;