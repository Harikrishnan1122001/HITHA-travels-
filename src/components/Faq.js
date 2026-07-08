import React, { useState } from 'react';
import './Faq.css';

const faqs = [
  {
    q: 'What is an acting driver service?',
    a: 'An acting driver is a professional driver who drives your own car, allowing you to travel comfortably and safely. This service is ideal for local trips, outstation travel, airport transfers, family functions, business meetings, late-night travel, or whenever you prefer not to drive.',
  },
  {
    q: 'Do you provide acting drivers on short notice?',
    a: 'Yes. We do our best to arrange a driver for same-day bookings, subject to availability. For weekends, holidays, and peak hours, we recommend booking in advance to ensure driver availability.',
  },
  {
    q: 'Can your driver drive my own car for local and outstation trips?',
    a: 'Yes. Our experienced drivers can drive your own vehicle for local travel in Madurai, airport transfers, outstation trips, weddings, business visits, family tours, and other travel needs. They are experienced in handling both manual and automatic cars.',
  },
  {
    q: 'Are your drivers experienced and verified?',
    a: 'Yes. All our drivers are experienced and verified before being assigned. We focus on safe driving, professional behaviour, punctuality, and customer satisfaction to provide a safe and comfortable journey.',
  },
  {
    q: 'How much does an acting driver service cost in Madurai?',
    a: 'The cost depends on the type of service, travel duration, and destination. We provide transparent pricing before your trip begins, so you know the total cost in advance with no hidden charges.',
  },
  {
    q: 'Do you provide drivers for airport transfers, late-night, and early-morning trips?',
    a: 'Yes. We provide acting drivers for airport pickup and drop, late-night travel, early-morning departures, family functions, business meetings, and emergency travel, subject to driver availability.',
  },
  {
    q: 'How can I book an acting driver in Madurai?',
    a: 'Booking is simple. Call or WhatsApp +91 93442 70077 and share your pickup location, travel date, time, destination, and trip details. We\u2019ll confirm driver availability and complete your booking as quickly as possible.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="welcome-block">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title display-font">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <p className="welcome-text">
            Answers to common questions about our Madurai acting driver service.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{i + 1}. {item.q}</span>
                <span className="faq-icon">{openIndex === i ? '\u2212' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
