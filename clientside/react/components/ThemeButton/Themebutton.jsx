import React from 'react'
import './Themebutton.css'
const Themebutton = ({setTheme}) => {
  return (
    <div className='themeContainer'>
      <input onChange={()=>{
        setTheme((prev)=>prev==='light'?"dark":"light")
      }} type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" />
	      <label htmlFor="themeSwitch" className="theme-switch__label">
		    <span></span>
	</label>
    </div>
  )
}

export default Themebutton
