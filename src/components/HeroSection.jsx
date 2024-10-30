import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {

  return (
    <section className="relative hero-section">
      {/* Overlay */}
      <div className="absolute inset-0 overlay"></div>
      <div className="relative z-10 h-full text-white px-3 flex flex-col items-center justify-center">
        {/* Heading */}
        <h1 className="mb-4 text-4xl md:text-4xl lg:text-6xl font-bold leading-tight">
          Are You a Supplier?
        </h1>

        <p className="mb-8 text-2xl md:text-6xl font-normal leading-tight">
          Explore Matching Opportunities.
        </p>

        {/* Search Bar with Icons */}
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-2 mb-6 input-div">
          {/* Service Search Field */}
          <div className="relative md:mb-0 mt-3 search-field">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-600 text-lg">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            <input
              type="text"
              id="service"
              required
              placeholder="Search your service here" 
              className="search-field"
              aria-label="Service Search Field"
            />
          </div>

          {/* Location Search Field */}
          <div className="relative mb-4 md:mb-0 search-field mt-3">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-600 text-lg">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <input
              
              type="text"
              id="location"
              required
              placeholder="Search your location here" 
              className="search-field"
              aria-label="Location Search Field"
            />
          </div>

          {/* Search Button */}
          <button className=" mt-3 text-white rounded-md hover:bg-green-600 flex items-center justify-center search-button">
            Search
          </button>
        </div>

        {/* Buyer Link */}
        <div className="flex justify-center mt-4">
          <p className="text-lg md:text-xl font-semibold">
            Are you a buyer?{" "}
            <a
              className="pl-2 font-normal underline click-url"
              href="#post-requirements"
            >
              Click here if you are looking to post a requirement
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
