import React, { useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    icon: '🚗',
    title: 'Acting Driver Service',
    desc: 'Hire a professional driver for your own vehicle. Perfect for long trips, events, or when you need a break from driving.',
    features: ['Licensed & verified drivers', 'Any vehicle type', 'Hourly or daily basis', 'City & outstation'],
    badge: 'Most Popular',
    color: '#F5C518',
  },
  {
    icon: '✈️',
    title: 'Airport Transfers',
    desc: 'On-time pickup and drop to Madurai Airport and beyond. Track your flight, relax — we\'ll be there.',
    features: ['Flight tracking', 'AC vehicles', 'Meet & greet', '24/7 service'],
    badge: '',
    color: '#4FC3F7',
  },
  {
    icon: '🛣️',
    title: 'Outstation Cab',
    desc: 'Comfortable outstation travel to Chennai, Coimbatore, Bangalore, Kerala, and all major cities.',
    features: ['One-way & round trip', 'AC & Non-AC options', 'Experienced drivers', 'Transparent fare'],
    badge: '',
    color: '#81C784',
  },
  {
    icon: '🏖️',
    title: 'Tour Packages',
    desc: 'Custom tour packages for families, groups and corporates. Tamil Nadu, Kerala, North India & more.',
    features: ['Custom itinerary', 'Group discounts', 'Hotel booking', 'Tour guide'],
    badge: 'New',
    color: '#FFB74D',
  },
  {
    icon: '🏢',
    title: 'Corporate Travel',
    desc: 'Reliable employee transport solutions for companies in Madurai. Monthly contracts available.',
    features: ['Monthly contracts', 'Multiple vehicles', 'GPS tracking', 'MIS reports'],
    badge: '',
    color: '#CE93D8',
  },
  {
    icon: '🎊',
    title: 'Event & Wedding',
    desc: 'Luxury cars for weddings, functions, and special events. Make your special day even more grand.',
    features: ['Decorated vehicles', 'Luxury cars', 'Multiple bookings', 'Event planning help'],
    badge: '',
    color: '#F48FB1',
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .service-card');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="services-container">
        <div className="section-header reveal">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title display-font">
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="section-subtitle">
            From acting drivers to full tour packages — every service is crafted for comfort, safety, and value.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card reveal"
              style={{ transitionDelay: `${i * 0.1}s`, '--card-color': s.color }}
            >
              {s.badge && <span className="card-badge">{s.badge}</span>}
              <div className="card-icon-wrap">
                <span className="card-icon">{s.icon}</span>
              </div>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-desc">{s.desc}</p>
              <ul className="card-features">
                {s.features.map((f, j) => (
                  <li key={j}>
                    <span className="check-icon">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className="card-cta" onClick={scrollToContact}>
                Book Now <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
