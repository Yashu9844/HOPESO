// src/App.jsx
import React, { useState } from 'react';
import HeaderComponent from './header/HeaderComponent';
import SliderComponent from './slidercomponet/SliderComponent';
import SpecialtiesComponent from './SpecialtiesComponent';
import DoctorsComponent from './doctors/DoctorsComponent';
import Details from './Details';

import FooterComponent from './FooterComponent';
import Themebutton from "../ThemeButton/Themebutton";
const Home = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div className="font-sans ">
    
    <HeaderComponent theme={theme} />
      <SliderComponent theme={theme} />
      <div className="bg-gray-100 py-8">
        <SpecialtiesComponent theme={theme} />
      </div>
      <div className="bg-white py-8">
        <DoctorsComponent theme={theme} />
      </div>
        <Details/>     
      <FooterComponent theme={theme}  />
    </div>
  );
};

export default Home;
