import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <div className='Navbar'>
        <div className="nav---left">
          {/* I'd probably leave this as image */}
            <img src="/pif.png" alt="" />
        </div>
        <div className="nav---right">
            <ul>
                <li>Work</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar