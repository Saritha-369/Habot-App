import React, { useState } from 'react';
import thumbnail from '../assets/img/youtubethumbnail.png';

const ReadyToDiveSection = () => {
  const [activeTab, setActiveTab] = useState('buyer');

  return (
    <section className="bg-white px-3 md:px-8 lg:px-16 second-sec">
      <div className="max-w-screen-xl mx-auto">
        
        {/* First Row: Title, Description, and Location Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 secondsec-row-first">
          
          {/* Title and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to dive into <span style={{color:'#073258'}}>HABOT?</span>
            </h2>
            <p className="text-gray-700 py-4 px-3 text-base md:text-lg leading-relaxed">
              Signing up with HABOT opens the door to a world of new opportunities and potential for business growth.
              Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step
              towards realizing your entrepreneurial dreams.
            </p>
            <button className="mt-6 text-lg w-[300px] inline-flex items-center justify-center text-white font-semibold px-4 py-3 rounded-md hover:bg-green-700 transition duration-200 signupbtn">
              Sign up Today!
              <span className="ml-2 text-xl">&rarr;</span>
            </button>
          </div>

          {/* Location Buttons in 2x3 Layout */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 locationBtns">
            {['Abu Dhabi', 'Dubai', 'Sharjah & Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'].map((location, index) => (
              <button
                key={index}
                className="relative w-full border-2 py-4 border-orange-500 text-black-800 text-lg py-1 rounded-md hover:bg-orange-500 hover:text-white transition duration-200 group"
                aria-label={`Select location ${location}`}
              >
                {location}
                <span className="absolute text-bold text-sm ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{lineHeight:'1.5rem'}}>&rarr;</span>
              </button>
            ))}
          </div>
        </div>

        {/* Second Row: Video and Buyer/Supplier Section */}
        <div className="bg-blue-900 p-8 rounded-md text-white secondsec-row-second">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Video Placeholder with Custom Thumbnail */}
            <div className="relative aspect-w-16 aspect-h-9 bg-gray-300 rounded-md overflow-hidden">
              <img
                src={thumbnail}
                alt="Video Thumbnail"
                className="w-full h-full object-cover rounded-md"
              />
              <a
                href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-75 transition duration-200"
                aria-label="Play video"
              >
                <svg
                  className="text-white youtubeicon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>

            {/* Buyer/Supplier Tabbed Information */}
            <div className="text-white tab">
              {/* Tabs */}
              <div className="flex mb-4">
                <button
                  className={`px-4 py-2 font-semibold text-2xl tab-opt ${
                    activeTab === 'buyer' ? 'border-b-4 border-orange-500 text-orange-500 text-2xl' : 'text-white'
                  }`}
                  onClick={() => setActiveTab('buyer')}
                >
                  Buyer
                </button>
                <button
                  className={`px-4 py-2 font-semibold text-2xl ml-4 tab-opt ${
                    activeTab === 'supplier' ? 'border-b-4 border-orange-500 text-orange-500 text-2xl' : 'text-white'
                  }`}
                  onClick={() => setActiveTab('supplier')}
                >
                  Supplier
                </button>
              </div>

              {/* Tab Content */}
              <div className="space-y-3 text-lg">
                {(activeTab === 'buyer' ? [
                  "Post your requirements.",
                  "Sit back for multiple suppliers to contact you.",
                  "Choose among the suppliers based on ratings and reviews."
                ] : [
                  "Browse listings posted by buyers.",
                  "Respond to relevant buyer requirements.",
                  "Build trust and earn ratings for better visibility."
                ]).map((text, index) => (
                  <div key={index} className="flex items-center">
                    <span className="flex items-center justify-center w-4 h-4 bg-green-600 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ReadyToDiveSection;
