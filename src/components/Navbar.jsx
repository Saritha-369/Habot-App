import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaBars, FaTimes, FaSearch, FaTruck, FaWarehouse, FaDollarSign, FaCheckCircle } from 'react-icons/fa';
import habotLogoBlue from '../assets/img/habot-logo-blue.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (dropdownOpen) setDropdownOpen(false); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); 
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); 
        setDropdownOpen(false); 
      }
    };

    const handleScroll = () => {
      if (!menuOpen) {
        setDropdownOpen(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]); 

  return (
    <nav className="bg-white shadow-md py-2 h-20 flex items-center" role="navigation" aria-label="Main Navigation">
      <div className="max-w-[1350px] mx-auto flex items-center justify-between w-full px-3">
        
        {/* Logo */}
        <a href="/" aria-label="Homepage" className="flex items-center">
          <img 
            src={habotLogoBlue} 
            alt="HABOT Logo" 
            className="w-[130px] h-auto md:w-[170px] lg:w-[181px] transition-all duration-300" 
          />
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu} 
          className="text-gray-700 text-2xl md:hidden focus:outline-none"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes className="transition-transform duration-300" /> : <FaBars className="transition-transform duration-300" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#find-suppliers" className="menus hover:text-blue-900 hover:no-underline transition duration-200" role="menuitem">
            Find Suppliers
          </a>
          
          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="menus hover:text-blue-900 flex items-center space-x-1 transition duration-200 "
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-controls="serviceTags"
            >
              <span>Find Service Tags</span>
              <FaChevronDown className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} style={{width:'0.7em'}} />
            </button>
            {dropdownOpen && (
              <div 
                id="serviceTags"
                className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-2 dropdown-lgscreen-style"
                role="menu" 
                aria-labelledby="serviceTags"
              >
                <a href="#source" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100" role="menuitem">
                  <FaSearch />
                  <span>Source</span>
                </a>
                <a href="#delivery" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100" role="menuitem">
                  <FaTruck />
                  <span>Delivery</span>
                </a>
                <a href="#storage" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100" role="menuitem">
                  <FaWarehouse />
                  <span>Storage</span>
                </a>
                <a href="#pricing" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100" role="menuitem">
                  <FaDollarSign />
                  <span>Pricing</span>
                </a>
                <a href="#verified" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100" role="menuitem">
                  <FaCheckCircle />
                  <span>Verified Suppliers</span>
                </a>
              </div>
            )}
          </div>
          
          <button className="border py-3 rounded-md font-semibold transition-all duration-300 ease-in-out transform hover:text-white hover:shadow-lg px-[42px] custom-loginsign-btn">
            Login / Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Modal Menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-white z-30 flex flex-col items-center justify-center space-y-8 p-4 transition-opacity duration-300 ease-in-out " 
          ref={menuRef}
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <button 
            onClick={toggleMenu} 
            className="absolute top-5 right-5 text-gray-700 text-2xl "
            aria-label="Close mobile menu"
          >
            <FaTimes />
          </button>

          <a href="#find-suppliers" className="text-gray-700 text-lg font-medium hover:text-blue-900 transition duration-200" role="menuitem">
            Find Suppliers
          </a>

          {/* Mobile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={toggleDropdown} 
              className="text-gray-700 text-lg font-medium hover:text-blue-900 flex items-center space-x-1 transition duration-200 hover:no-underline dropdown-smscreen-style"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-controls="mobileServiceTags"
            >
              <span>Find Service Tags</span>
              <FaChevronDown className={`text-gray-500 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div id="mobileServiceTags" className="absolute bg-white border border-gray-200 rounded-md shadow-lg z-20" role="menu">
                <a href="#source" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100" role="menuitem">
                  <FaSearch />
                  <span>Source</span>
                </a>
                <a href="#delivery" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100" role="menuitem">
                  <FaTruck />
                  <span>Delivery</span>
                </a>
                <a href="#storage" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100" role="menuitem">
                  <FaWarehouse />
                  <span>Storage</span>
                </a>
                <a href="#pricing" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100" role="menuitem">
                  <FaDollarSign />
                  <span>Pricing</span>
                </a>
                <a href="#verified" className="flex items-center space-x-2 block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100" role="menuitem">
                  <FaCheckCircle />
                  <span>Verified Suppliers</span>
                </a>
              </div>
            )}
          </div>

          <button className="bg-transparent py-2 rounded-md font-medium hover:text-white transition duration-200 px-[42px] custom-loginsign-btn">
            Login / Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
