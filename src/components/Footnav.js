import React from 'react'
import './Footnav.css'


//this will help with making foot navigation unique to specific page
function Footnav({left, middle, right}) {
  return (
    <div className='Footnav'>
      <div className='ft-left'>
        <ul>
          <li> {left[0]}</li>
          <li> {left[1]}</li>
          <li> {left[2]}</li>
          <li> {left[3]}</li>
        </ul>
       
      </div>
      <div className='ft-middle'>
        {middle}
      </div>
      <div className='ft-right'>
        {right}
      </div>
    </div>
  )
}

export default Footnav