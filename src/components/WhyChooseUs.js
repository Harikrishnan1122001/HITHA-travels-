import React, { useEffect, useRef } from 'react';
import './WhyChooseUs.css';
const reasons = [
  { icon: '🎓', title: 'Experienced Drivers', desc: 'All our drivers are trained, licensed, and experienced in handling various vehicle types.' },
  { icon: '✅', title: 'Verified & Trustworthy', desc: 'Every driver undergoes background verification before assignment.' },
  { icon: '📍', title: 'Available Across Madurai', desc: 'Local trips, outstation travel, and night service available.' },
  { icon: '⏰', title: 'On-Time Service', desc: 'We value punctuality and ensure drivers reach you as scheduled.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Transparent rates with no hidden charges.' },
];
const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reason-card');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="why-us" className="why-us-section" ref={sectionRef}>
      <div className="why-us-container">
        {/* Welcome Section */}
        <div className="welcome-block reveal">
          <span className="section-eyebrow">Why choose us</span>
          <h2 className="section-title display-font">
            Sometimes You Need <span className="text-gold">Someone Else Behind the Wheel</span>
          </h2>
          <p className="welcome-text">
            At Madurai  Acting Drivers, we understand that sometimes you need someone else
            behind the wheel — whether you're returning from a long event, travelling overnight,
            attending a function where you'd rather not drive, or simply need a dependable driver
            for your own car on a daily or trip basis.
          </p>
          <p className="welcome-text">
            Based in Madurai, we connect you with experienced, background-verified acting drivers
            who handle your vehicle with the same care you would. No need to rent a car — just
            your vehicle, our driver, your journey.
          </p>
        </div>
        {/* Why Choose Us */}
        <div className="reasons-grid">
          {reasons.map((r, i) => (
            <div key={i} className="reason-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="reason-icon">{r.icon}</span>
              <strong>{r.title}</strong>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
        {/* Quick Booking Note */}
        <div className="quick-booking-note reveal">
          <p>
            Need a driver for a wedding, outstation trip, late-night return, or daily office
            commute? Contact Madurai  Acting Drivers and we will arrange a suitable acting
            driver promptly.
          </p>
          <button className="btn-primary" onClick={scrollToContact}>
            Book Now <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;