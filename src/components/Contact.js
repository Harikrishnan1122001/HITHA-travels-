import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      lines: ['9A, Dindigul Main Rd,', 'Vilangudi, Madurai - 625018'],
      link: 'https://maps.google.com/?q=9A+Dindigul+Main+Rd+Vilangudi+Madurai',
    },
    {
      icon: '📞',
      title: 'Phone',
      lines: ['+91 98765 43210', '+91 98765 43211'],
      link: 'tel:+919876543210',
    },
    {
      icon: '✉️',
      title: 'Email',
      lines: ['info@hithatravels.com', 'booking@hithatravels.com'],
      link: 'mailto:info@hithatravels.com',
    },
    {
      icon: '🕐',
      title: 'Working Hours',
      lines: ['24/7 Available', 'No holidays'],
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      {/* Top divider */}
      <div className="contact-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 L1440,40 L1440,60 L0,60 Z" fill="#0A0A0A"/>
        </svg>
      </div>

      <div className="contact-container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title display-font">
            Book Your <span className="text-gold">Ride Today</span>
          </h2>
          <p className="section-subtitle">
            Reach out to us for bookings, enquiries, or custom tour planning. 
            We respond within minutes!
          </p>
        </div>

        <div className="contact-body">
          {/* Info cards */}
          <div className="contact-info reveal-left">
            {contactInfo.map((c, i) => (
              <div key={i} className="info-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="info-icon">{c.icon}</span>
                <div className="info-content">
                  <strong>{c.title}</strong>
                  {c.lines.map((l, j) => (
                    c.link && j === 0
                      ? <a key={j} href={c.link} className="info-link" target="_blank" rel="noopener noreferrer">{l}</a>
                      : <span key={j}>{l}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="social-row">
              {['Facebook', 'Instagram', 'WhatsApp'].map((s, i) => (
                <a key={i} href="#!" className="social-btn" aria-label={s}>
                  {s === 'WhatsApp' ? '💬' : s === 'Instagram' ? '📸' : '👍'}
                  <span>{s}</span>
                </a>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="map-placeholder">
              <div className="map-pin-anim">
                <span>📍</span>
              </div>
              <p>9A, Dindigul Main Rd,<br />Vilangudi, Madurai - 625018</p>
              <a
                href="https://maps.google.com/?q=9A+Dindigul+Main+Rd+Vilangudi+Madurai"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link-btn"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap reveal-right">
            {submitted ? (
              <div className="success-msg">
                <span className="success-icon">✅</span>
                <h3>Booking Request Sent!</h3>
                <p>Our team will contact you within 10 minutes. Thank you for choosing Hitha Travels!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Quick Booking</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Service Required *</label>
                    <select name="service" value={form.service} onChange={handleChange} required>
                      <option value="">Select a service</option>
                      <option>Acting Driver Service</option>
                      <option>Airport Transfer</option>
                      <option>Outstation Cab</option>
                      <option>Tour Package</option>
                      <option>Corporate Travel</option>
                      <option>Event / Wedding Car</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label>Message / Trip Details</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your trip: pickup, destination, date, number of passengers..."
                      rows={5}
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="submit-btn">
                  Send Booking Request
                  <span className="btn-arrow">→</span>
                </button>
                <p className="form-note">
                  🔒 Your details are safe with us. We'll never spam you.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
