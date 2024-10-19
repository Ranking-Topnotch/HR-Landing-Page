import React from 'react';
import './App.css'; 
import Navbar from './component/nav/Nav';
import HeroSection from './component/hero/Hero';
import AboutUs from './page/about/About';
import Services from './page/services/Services';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUs/>
      <Services />
      <Footer />
    </div>
  );
}

export default App;
