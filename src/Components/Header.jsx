import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('Explore Gydes');
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    const pathToLinkMap = {
      '/': 'Explore Gydes',
      '/exploreLores': 'Explore Lores',
      '/exploreUs': 'Explore Us',
    };

    const currentLink = pathToLinkMap[location.pathname] || 'Explore Gydes';
    setActiveLink(currentLink);
  }, [location.pathname]);

  useEffect(() => {
    const activeElement = document.querySelector('.navbar-link.active');
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setSliderStyle({
        left: offsetLeft - 8,
        width: offsetWidth + 16,
      });
    }
  }, [activeLink]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav style={{ boxShadow: "0 15px 68px 15px " }} className="fixed top-0 left-0 right-0 flex justify-between items-center bg-gray-900 p-4 shadow-md z-50">
      <div>
        <img style={{ height: '35px' }} src="https://gyde-webapp-reactjs.onrender.com/logo.svg" alt="Gyde Logo" />
      </div>

      <div className="relative ">
        <ul className="flex gap-[5vw] list-none m-0 p-2 border-b-4 ">
          <li
            className={`navbar-link cursor-pointer ${activeLink === 'Explore Gydes' ? 'text-yellow-400 active' : 'text-gray-400'} hover:text-white`}
            onClick={() => handleLinkClick('Explore Gydes')}
          >
            <Link to="/">Explore Gydes</Link>
          </li>
          <li
            className={`navbar-link cursor-pointer ${activeLink === 'Explore Lores' ? 'text-yellow-400 active' : 'text-gray-400'} hover:text-white`}
            onClick={() => handleLinkClick('Explore Lores')}
          >
            <Link to="/exploreLores">Explore Lores</Link>
          </li>
          <li
            className={`navbar-link cursor-pointer ${activeLink === 'Explore Us' ? 'text-yellow-400 active' : 'text-gray-400'} hover:text-white`}
            onClick={() => handleLinkClick('Explore Us')}
          >
             {/* <Link to="/exploreUs">Explore us</Link> */}
             Explore us
          </li>
        </ul>
        <span
          className="absolute h-1 bg-yellow-300 transition-all duration-300"
          style={sliderStyle}
        ></span>
      </div>
      <button className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-10 rounded-xl">
        Sign Up
      </button>
    </nav>
  );
};

export default Header;
