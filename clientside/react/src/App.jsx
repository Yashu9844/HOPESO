import React, { useState } from "react";
import SignInSignUp from "../components/SigninSignUp/SignInSignUp";
import Themebutton from "../components/ThemeButton/Themebutton";


function App() {
         const [theme, setTheme] = useState('light');
     return(
      <div>
       <Themebutton setTheme={setTheme}/>
        <SignInSignUp theme={theme} />
        </div>
     )
}

export default App;