import React from 'react'
import Footnav from '../components/Footnav'
import Recentitem from './Recentitem'
import './RecentWorks.css'






function RecentWorks() {
  return (
    <div className='RecentWorks'>
      <h3 className="rctwks">RECENT WORKS</h3>
      <Recentitem />
      <div className="momw-cover">
        <button className='momw'>MORE OF MY WORKS</button>
      </div>
      <Footnav 
            left = {['BEHANCE','DRIBBLE','INSTAGRAM', 'LINKEDIN' ]}
            middle = '03/07'
            right = 'BACK TO TOP'
          />
    </div>
  )
}

export default RecentWorks
