// import React, { useEffect, useRef } from 'react';
// import './Services.css';

// const services = [
//   {
//     icon: '🚗',
//     title: 'Acting Driver Service',
//     desc: 'Hire a professional driver for your own vehicle. Perfect for long trips, events, or when you need a break from driving.',
//     features: ['Licensed & verified drivers', 'Any vehicle type', 'Hourly or daily basis', 'City & outstation'],
//     badge: 'Most Popular',
//     color: '#F5C518',
//   },
//   {
//     icon: '✈️',
//     title: 'Airport Transfers',
//     desc: 'On-time pickup and drop to Madurai Airport and beyond. Track your flight, relax — we\'ll be there.',
//     features: ['Flight tracking', 'AC vehicles', 'Meet & greet', '24/7 service'],
//     badge: '',
//     color: '#4FC3F7',
//   },
//   {
//     icon: '🛣️',
//     title: 'Outstation Cab',
//     desc: 'Comfortable outstation travel to Chennai, Coimbatore, Bangalore, Kerala, and all major cities.',
//     features: ['One-way & round trip', 'AC & Non-AC options', 'Experienced drivers', 'Transparent fare'],
//     badge: '',
//     color: '#81C784',
//   },
//   {
//     icon: '🏖️',
//     title: 'Tour Packages',
//     desc: 'Custom tour packages for families, groups and corporates. Tamil Nadu, Kerala, North India & more.',
//     features: ['Custom itinerary', 'Group discounts', 'Hotel booking', 'Tour guide'],
//     badge: 'New',
//     color: '#FFB74D',
//   },
//   {
//     icon: '🏢',
//     title: 'Corporate Travel',
//     desc: 'Reliable employee transport solutions for companies in Madurai. Monthly contracts available.',
//     features: ['Monthly contracts', 'Multiple vehicles', 'GPS tracking', 'MIS reports'],
//     badge: '',
//     color: '#CE93D8',
//   },
//   {
//     icon: '🎊',
//     title: 'Event & Wedding',
//     desc: 'Luxury cars for weddings, functions, and special events. Make your special day even more grand.',
//     features: ['Decorated vehicles', 'Luxury cars', 'Multiple bookings', 'Event planning help'],
//     badge: '',
//     color: '#F48FB1',
//   },
// ];

// const Services = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => entries.forEach(e => {
//         if (e.isIntersecting) e.target.classList.add('visible');
//       }),
//       { threshold: 0.1 }
//     );
//     const els = sectionRef.current?.querySelectorAll('.reveal, .service-card');
//     els?.forEach(el => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

//   return (
//     <section id="services" className="services-section" ref={sectionRef}>
//       <div className="services-container">
//         <div className="section-header reveal">
//           <span className="section-eyebrow">What We Offer</span>
//           <h2 className="section-title display-font">
//             Our <span className="text-gold">Services</span>
//           </h2>
//           <p className="section-subtitle">
//             From acting drivers to full tour packages — every service is crafted for comfort, safety, and value.
//           </p>
//         </div>

//         <div className="services-grid">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="service-card reveal"
//               style={{ transitionDelay: `${i * 0.1}s`, '--card-color': s.color }}
//             >
//               {s.badge && <span className="card-badge">{s.badge}</span>}
//               <div className="card-icon-wrap">
//                 <span className="card-icon">{s.icon}</span>
//               </div>
//               <h3 className="card-title">{s.title}</h3>
//               <p className="card-desc">{s.desc}</p>
//               <ul className="card-features">
//                 {s.features.map((f, j) => (
//                   <li key={j}>
//                     <span className="check-icon">✓</span> {f}
//                   </li>
//                 ))}
//               </ul>
//               <button className="card-cta" onClick={scrollToContact}>
//                 Book Now <span>→</span>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React, { useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    icon: '🏙️',
    title: 'Local Acting Driver',
    desc: 'For day-to-day travel within Madurai city — office commutes, errands, family outings, or short trips where you prefer not to drive.',
    features: ['Daily commute ready', 'Errands & family outings', 'Hourly basis', 'City routes covered'],
    badge: 'Most Popular',
    color: '#F5C518',
  },
  {
    icon: '🛣️',
    title: 'Outstation Acting Driver',
    desc: 'For long-distance travel outside Madurai, our drivers are experienced in highway driving and familiar with routes across Tamil Nadu and neighbouring states.',
    features: ['Highway-experienced drivers', 'Tamil Nadu & beyond', 'One-way or round trip', 'Transparent fare'],
    badge: '',
    color: '#81C784',
  },
  {
    icon: '🌙',
    title: 'Night Duty Driver',
    desc: 'For late-night travel, airport drops/pickups, or returning from events when you are too tired to drive — our drivers are available for night assignments.',
    features: ['24/7 availability', 'Airport drop & pickup', 'Event return service', 'Alert, rested drivers'],
    badge: '',
    color: '#4FC3F7',
  },
  {
    icon: '➡️',
    title: 'One-Way Drop',
    desc: 'Need your vehicle driven from one location to another without a return trip? We offer one-way acting driver service for added convenience.',
    features: ['No return trip needed', 'Flexible scheduling', 'Single-leg pricing', 'Door-to-door'],
    badge: 'New',
    color: '#FFB74D',
  },
  {
    icon: '🎊',
    title: 'Event & Wedding Driver',
    desc: 'For weddings, functions, and family events where you want to relax and enjoy the occasion, our drivers ensure safe transport for you and your guests.',
    features: ['Wedding & function ready', 'Guest transport', 'Multiple bookings', 'Punctual arrival'],
    badge: '',
    color: '#F48FB1',
  },
  {
    icon: '🏢',
    title: 'Corporate & Business Driver',
    desc: 'For business owners, executives, and companies requiring dependable drivers for official vehicles, client visits, or business travel.',
    features: ['Official vehicle support', 'Client visit ready', 'Executive travel', 'Reliable & discreet'],
    badge: '',
    color: '#CE93D8',
  },
  {
    icon: '📅',
    title: 'Monthly / Long-Term Driver',
    desc: 'For customers who need a regular driver on a daily, weekly, or monthly basis, we offer customized long-term arrangements.',
    features: ['Daily/weekly/monthly plans', 'Same driver continuity', 'Custom arrangement', 'Contract pricing'],
    badge: '',
    color: '#90A4AE',
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
            Acting driver services tailored to every need — local, outstation, night duty, and beyond.
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