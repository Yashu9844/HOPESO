import React, { useState } from "react";
import SignInSignUp from "./components/SigninSignUp/SignInSignUp";

import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterSignIn from "./components/home/register/signin/RegisterSignIn";
function App() {
        
     return(
      <div>
        <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
            
            <Route path="/" element={<Home/>} />
            <Route path="register_signin" element={<RegisterSignIn/>} />
            <Route path="/register_signin/:type" element={<SignInSignUp  />} />
        
        </Routes>
      </div>
    </Router>
   
        </div>

        
     )
}

export default App;