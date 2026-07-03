import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import './App.css';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading: 3.2 seconds
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />;
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919344270077?text=Hello%20Hitha%20Acting%20Drivers!%20I%20need%20a%20booking."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff" d="M16.004 0C7.165 0 .008 7.157.008 15.997c0 2.823.737 5.47 2.028 7.778L0 32l8.418-2.01a15.937 15.937 0 007.586 1.927h.006C24.84 31.917 32 24.758 32 15.917 32 7.086 24.843-.001 16.004 0zm7.694 22.344c-.318.9-1.878 1.72-2.595 1.757-.656.034-1.273.31-4.3-.886-3.655-1.444-6.003-5.2-6.182-5.44-.18-.24-1.465-1.95-1.465-3.72 0-1.77.927-2.643 1.256-3.002.33-.36.72-.45 1.01-.45.234 0 .48.008.69.016.22.01.52-.083.81.618.3.72 1.02 2.49 1.11 2.67.09.18.15.39.02.63-.13.24-.19.39-.37.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.93 1.53 2.0 2.48 1.37 1.22 2.53 1.6 2.89 1.78.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.23 1.77z"/>
        </svg>
        <span className="fab-tooltip">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
export default App;