import React, { useState } from 'react';
import './SignInSignUp.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import lightModeImg from '../../src/assets/logo/lightmodeimg.png';
import lightModeText from '../../src/assets/logo/lightmodetext.png';
import darkModeImg from '../../src/assets/logo/darkmodeimg.png';
import darkModeText from '../../src/assets/logo/darkmodetext.png';

const SignInSignUp = ({ theme }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const isDarkMode = theme === 'dark';

  return (
   
    <div className='background'  style={{
      background: isDarkMode? 'linear-gradient(to right, #0b0a2361, #001052)' : 'linear-gradient(to right, #d98b7d, #ab1b3d)',
    }} >
    <div className={`container ${isSignUp ? 'right-panel-active' : ''} ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <img id='logoimg' src={isDarkMode ? darkModeImg : lightModeImg} alt="" />
            <img id='logotext' src={isDarkMode ? darkModeText : lightModeText} alt="" />
            <button className="ghost" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <img id='logoimg' src={isDarkMode ? darkModeImg : lightModeImg} alt="" />
            <img id='logotext' src={isDarkMode ? darkModeText : lightModeText} alt="" />
            <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignInSignUp;
