import React from 'react'
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

    </div>
  )
}

export default RecentWorks
