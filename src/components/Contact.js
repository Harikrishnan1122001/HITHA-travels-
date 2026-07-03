

// import React, { useEffect, useRef, useState } from 'react';
// import './Contact.css';
// import emailjs from '@emailjs/browser';

// // ─────────────────────────────────────────────
// // EMAILJS CONFIG — replace these 3 values
// const EMAILJS_PUBLIC_KEY  = '5koff7Zp6wLXda_Ct';
// const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
// const EMAILJS_TEMPLATE_ID = '-xdIrXDUK6gZanmCePapr';
// // ─────────────────────────────────────────────

// const WHATSAPP_NUMBER = '919344270077';

// const Contact = () => {
//   const sectionRef = useRef(null);
//   const formRef = useRef();
//   const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     emailjs.init(EMAILJS_PUBLIC_KEY);

//     const observer = new IntersectionObserver(
//       (entries) => entries.forEach(e => {
//         if (e.isIntersecting) e.target.classList.add('visible');
//       }),
//       { threshold: 0.1 }
//     );
//     const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
//     els?.forEach(el => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const sendWhatsApp = () => {
//     const text =
// `🚗 *New Booking - Hitha Tours & Travels*
// ──────────────────────
// 👤 Name    : ${form.name}
// 📞 Phone   : ${form.phone}
// 🛠 Service : ${form.service}
// 📝 Message : ${form.message}
// ──────────────────────
// Sent from website booking form`;
//     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const templateParams = {
//       from_name: form.name,
//       phone:     form.phone,
//       service:   form.service,
//       message:   form.message,
//       to_email:  'Madurai  Acting Drivers@gmail.com',
//     };

//     // Send to WhatsApp immediately (always works)
//     sendWhatsApp();

//     // Also try to send email
//     try {
//       await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
//     } catch (err) {
//       console.warn('Email send failed, WhatsApp sent successfully:', err);
//       // Don't show error — WhatsApp already sent
//     }

//     setSubmitted(true);
//     setForm({ name: '', phone: '', service: '', message: '' });
//     setTimeout(() => setSubmitted(false), 6000);
//     setLoading(false);
//   };

//   const contactInfo = [
//     {
//       icon: '📞',
//       title: 'Phone',
//       lines: ['+91 9344270077'],
//       link: 'tel:+919344270077',
//     },
//     {
//       icon: '✉️',
//       title: 'Email',
//       lines: ['Madurai  Acting Drivers@gmail.com'],
//       link: 'mailto:Madurai  Acting Drivers@gmail.com',
//     },
//     {
//       icon: '🕐',
//       title: 'Working Hours',
//       lines: ['24/7 Available', 'No holidays'],
//       link: null,
//     },
//   ];

//   const socialLinks = [
//     {
//       name: 'Facebook',
//       icon: '👍',
//       url: 'https://www.facebook.com/profile.php?id=61590282911943',
//       label: 'Follow on Facebook',
//     },
//     {
//       name: 'Instagram',
//       icon: '📸',
//       url: 'https://www.instagram.com/hitha_tours_travels/',
//       label: 'Follow on Instagram',
//     },
//     {
//       name: 'WhatsApp',
//       icon: '💬',
//       url: `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20driver%20from%20Hitha%20Tours%20and%20Travels.`,
//       label: 'Chat on WhatsApp',
//     },
//   ];

//   return (
//     <section id="contact" className="contact-section" ref={sectionRef}>
//       <div className="contact-divider">
//         <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
//           <path d="M0,0 L1440,40 L1440,60 L0,60 Z" fill="#0A0A0A"/>
//         </svg>
//       </div>
//       <div className="contact-container">
//         <div className="section-header reveal">
//           <span className="section-eyebrow">Get In Touch</span>
//           <h2 className="section-title display-font">
//             Book Your <span className="text-gold">Ride Today</span>
//           </h2>
//           <p className="section-subtitle">
//             Reach out to us for bookings, enquiries, or custom tour planning.
//             We respond within minutes!
//           </p>
//         </div>
//         <div className="contact-body">
//           <div className="contact-info reveal-left">
//             {contactInfo.map((c, i) => (
//               <div key={i} className="info-card" style={{ transitionDelay: `${i * 0.1}s` }}>
//                 <span className="info-icon">{c.icon}</span>
//                 <div className="info-content">
//                   <strong>{c.title}</strong>
//                   {c.lines.map((l, j) => (
//                     c.link && j === 0
//                       ? <a key={j} href={c.link} className="info-link" target="_blank" rel="noopener noreferrer">{l}</a>
//                       : <span key={j}>{l}</span>
//                   ))}
//                 </div>
//               </div>
//             ))}

//             <div className="social-row">
//               {socialLinks.map((s, i) => (
//                 <a
//                   key={i}
//                   href={s.url}
//                   className="social-btn"
//                   aria-label={s.label}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   title={s.label}
//                 >
//                   <span className="social-icon">{s.icon}</span>
//                   <span>{s.name}</span>
//                 </a>
//               ))}
//             </div>

//             <a
//               href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20driver%20from%20Hitha%20Tours%20and%20Travels.`}
//               className="whatsapp-cta"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div>
//               </div>
//             </a>
//           </div>

//           <div className="contact-form-wrap reveal-right">
//             {submitted ? (
//               <div className="success-msg">
//                 <span className="success-icon">✅</span>
//                 <h3>Booking Request Sent!</h3>
//                 <p>Your booking has been sent to our WhatsApp and email. We will contact you within 10 minutes. Thank you for choosing Hitha Travels!</p>
//               </div>
//             ) : (
//               <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
//                 <h3 className="form-title">Quick Booking</h3>
//                 <div className="form-grid">
//                   <div className="form-group">
//                     <label>Your Name *</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={form.name}
//                       onChange={handleChange}
//                       placeholder="Enter your name"
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Phone Number *</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={form.phone}
//                       onChange={handleChange}
//                       placeholder="+91 9344270077"
//                       required
//                     />
//                   </div>
//                   <div className="form-group full-width">
//                     <label>Service Required *</label>
//                     <select name="service" value={form.service} onChange={handleChange} required>
//                       <option value="">Select a service</option>
//                       <option>Local Acting Driver</option>
//                       <option>Outstation Acting Driver</option>
//                       <option>Night Duty Driver</option>
//                       <option>One-Way Drop</option>
//                       <option>Event & Wedding Driver</option>
//                       <option>Corporate & Business Driver</option>
//                       <option>Monthly / Long-Term Driver</option>
//                     </select>
//                   </div>
//                   <div className="form-group full-width">
//                     <label>Message / Trip Details</label>
//                     <textarea
//                       name="message"
//                       value={form.message}
//                       onChange={handleChange}
//                       placeholder="Describe your trip: pickup, destination, date, number of passengers..."
//                       rows={5}
//                     ></textarea>
//                   </div>
//                 </div>
//                 {error && <p className="form-error">⚠️ {error}</p>}
//                 <button type="submit" className="submit-btn" disabled={loading}>
//                   {loading ? 'Sending...' : 'Send Booking Request'}
//                   {!loading && <span className="btn-arrow">→</span>}
//                 </button>
//                 <p className="form-note">
//                   📩 Sent to WhatsApp & Email instantly.
//                 </p>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Contact;

import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY  = '5koff7Zp6wLXda_Ct';
const EMAILJS_SERVICE_ID  = 'service_bf0a5w5';
const EMAILJS_TEMPLATE_ID = 'template_hyfr7po';

const WHATSAPP_NUMBER = '919344270077';

const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          phone:     form.phone,
          service:   form.service,
          message:   form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setForm({ name: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send. Please call +91 9344270077 directly.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      lines: ['+91 9344270077'],
      link: 'tel:+919344270077',
    },
    {
      icon: '✉️',
      title: 'Email',
      lines: ['hithatourstravels@gmail.com'],
      link: 'mailto:hithatourstravels@gmail.com',
    },
    {
      icon: '🕐',
      title: 'Working Hours',
      lines: ['24/7 Available', 'No holidays'],
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: '👍',
      url: 'https://www.facebook.com/profile.php?id=61590282911943',
      label: 'Follow on Facebook',
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://www.instagram.com/hitha_tours_travels/',
      label: 'Follow on Instagram',
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20driver%20from%20Hitha%20Tours%20and%20Travels.`,
      label: 'Chat on WhatsApp',
    },
  ];

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
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

            <div className="social-row">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  className="social-btn"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                >
                  <span className="social-icon">{s.icon}</span>
                  <span>{s.name}</span>
                </a>
              ))}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20driver%20from%20Hitha%20Tours%20and%20Travels.`}
              className="whatsapp-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
          
              <div>
              </div>
            </a>
          </div>

          <div className="contact-form-wrap reveal-right">
            {submitted ? (
              <div className="success-msg">
                <span className="success-icon">✅</span>
                <h3>Booking Request Sent!</h3>
                <p>Your booking email has been sent to hithatourstravels@gmail.com. We will contact you within 10 minutes. Thank you for choosing Hitha Travels!</p>
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
                      placeholder="+91 9344270077"
                      required
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Service Required *</label>
                    <select name="service" value={form.service} onChange={handleChange} required>
                      <option value="">Select a service</option>
                      <option>Local Acting Driver</option>
                      <option>Outstation Acting Driver</option>
                      <option>Night Duty Driver</option>
                      <option>One-Way Drop</option>
                      <option>Event & Wedding Driver</option>
                      <option>Corporate & Business Driver</option>
                      <option>Monthly / Long-Term Driver</option>
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
                {error && <p className="form-error">⚠️ {error}</p>}
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Booking Request'}
                  {!loading && <span className="btn-arrow">→</span>}
                </button>
                <p className="form-note">
                  📩 Booking details sent directly to our email.
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