// src/components/HeaderComponent.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import lightModeImg from '../../../assets/logo/lightmodeimg.png';
import darkModeImg from '../../../assets/logo/darkmodeimg.png';

import './HeaderComponent.css'; 

const HeaderComponent = ({ theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isLightMode = theme === 'light';
  const logoImg = isLightMode ? lightModeImg : darkModeImg;

  const headerStyle = {
    background: isLightMode
      ? `linear-gradient(to right, #a91b3d, #b4052e)` // Use the background image for light mode
      : 'linear-gradient(to top, #09203f 0%, #537895 100%)',
    color: isLightMode ? 'white' : 'white',
  };

  const linkStyle = {
    color: isLightMode ? 'white' : 'lightblue',
  };

  return (
    <header style={headerStyle} className={`shadow-md ${menuOpen ? 'menu-open' : 'menu-closed'}`}>
      <div className="px-4 py-4 mx-auto h-fit flex justify-between items-center uppercase font-semibold">
        <img src={logoImg} alt="Hospital Logo" className="h-10 shadow-xl " />
        <nav className="hidden md:flex space-x-4">
          {['Home', 'Book an Appointment', 'Lab Reports', 'About Us', 'Register/Sign In'].map((text, idx) => (
            <Link
              key={idx}
              to={text=="Register/Sign In"?"register_signin":`/${text.toLowerCase().replace(/ /g, '')}`}
              style={linkStyle}
              className="relative transition-colors duration-300 link text-zinc-100 font-extrabold text-base"
            >
              {text}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="h-8 w-8 text-white" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-start space-y-4 px-4 py-2">
          {['Home', 'Book an Appointment', 'Lab Reports', 'About Us', 'Register/Sign In'].map((text, idx) => (
            <Link
              key={idx}
              to={`/${text.toLowerCase().replace(/ /g, '')}`}
              style={linkStyle}
              className="relative transition-colors duration-300 link"
              onClick={() => setMenuOpen(false)}
            >
              {text}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default HeaderComponent;
