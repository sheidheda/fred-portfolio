import React from 'react'
import Footnav from '../components/Footnav'
import Navbar from '../components/Navbar'
import './Section1.css'
function Section1() {
  return (
    <div className='Section1'>
        <Navbar />
        <div className='presh'>
            {/* I might change this to text later */}
            <img src="/presh.png" alt="" />
        </div>
        <div className="hello">
            <h3>Digital Designer currently based in Nigeria</h3>
            <p>Hello, I am Fred a professional digital designer. I am interested in collaborating with you on your project.</p>
            <button>SCROLL TO DISCOVER</button>
        </div>
        <div className="footnav-ting">
          <Footnav 
            left = {['BEHANCE','DRIBBLE','INSTAGRAM', 'LINKEDIN' ]}
            middle = '01/07'
            right = 'Ⓒ 2023'
          />
        </div>
        
    </div>
  )
}

export default Section1