import React from 'react';
import { steps } from '../data';

const HowItWorksCard = ({ icon, title, bgColor }) => (
  <div
    className="how-it-works__card flex flex-col items-center justify-center p-6"
    style={{ background: bgColor, height:'280px' }} 
  >
    <img src={icon} alt={title} className="w-12 h-12 mb-4" /> 
    <h3 className="font-semibold text-xl text-gray-800 text-center mt-4">{title}</h3>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="bg-white py-12 howitworks" >
      <div className="container py-5 mx-auto max-w-[1140px] text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">How it works?</h2>
        <p className="text-gray-600 mb-10 max-w-[800px] mx-auto">
          Buyers post their needs and review top suppliers, while suppliers complete profiles,
          connect with potential buyers, and build successful business relationships, sharing valuable feedback.
        </p>
        
        <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 lg:grid-cols-3" >
          {steps.map((step) => (
            <HowItWorksCard key={step.id} icon={step.icon} title={step.title} bgColor={step.bgColor}  />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
