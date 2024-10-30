import React from 'react';
import Navbar from './components/Navbar';
import LetSuppliersFindYou from './components/LetSuppliersFindYou';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import './styles.css';
import HeroSection from './components/HeroSection';
import ReadyToDiveSection from './components/ReadyToDiveSection';

const App = () => {
  return (
    <div className="font-sans bg-white">
      <Navbar/>
      <HeroSection/>
      <ReadyToDiveSection/>
      <LetSuppliersFindYou/>
    
      <HowItWorks/>
      
      <Footer /> 
    </div>
  );
};

export default App;
