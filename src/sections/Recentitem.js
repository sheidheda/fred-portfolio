import React from 'react'
import './Recentitem.css'



const items = [
    {
        id: 1,
        title: 'ASUZA GAMING',
        type: ['WEB DESIGN', 'MOBILE DESIGN', 'BRANDING'],
        description: "Asuza is an Esport Management platform that specializes in fostering the growth of gamers within and outside of Africa.",
        role: ['UI DESIGN', 'UX DESIGN', 'CONCEPT']
    },
    {
        id: 2,
        title: 'VIBE BETA',
        type: ['WEB DESIGN', 'MOBILE DESIGN'],
        description: "VIBE BETA is a cutting-edge music app that helps up-and-coming talent get discovered.",
        role: ['UI DESIGN', 'UX DESIGN', 'REDESIGN']
    },
    {
        id: 3,
        title: 'WHATSAPP STATUS',
        type: ['CASE STUDY', 'MOBILE DESIGN'],
        description: "AN IMPROVEMENT TO THE WHATSAPP STATUS UI AND A BRAND NEW FEATURE ROLE OUT.",
        role: ['UI DESIGN', 'UX DESIGN', 'REDESIGN']
    },
    {
        id: 4,
        title: 'SLEEPY APP',
        type: ['CASE STUDY', 'MOBILE DESIGN'],
        description: "Sleepy is a product designed to improve the quality of life for individuals with sleep difficulties. ",
        role: ['UI DESIGN', 'UX DESIGN']
    },
    
]
function Recentitem() {
  return (
    // rci === Recentitem
    <div className='rci'>
     <div className="rci-cover1">
        {items.map((item)=>(
            <div className="rci-cover2">
                <hr />
                <h1>{item.title}</h1>
                <div className='rci-cover3'>
                    <div className="rci-typdesc">
                        <div className="rci-type">
                            <h3>TYPE</h3>
                            <ul>
                                <li>{item.type[0]}</li>
                                <li>{item.type[1]}</li>
                                <li>{item.type[2]}</li>
                            </ul>
                        </div>
                        <div className="rci-desc">
                            <h3>DESCRIPTION</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className="rci-role">
                        {/* fix empty role button */}
                        <h3>ROLE</h3>
                        <ul>
                            <li><button>{item.role[0]}</button></li>
                            <li><button>{item.role[1]}</button></li>
                            <li><button>{item.role[2]}</button></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        ))}
      </div>
    </div>
  )
}

export default Recentitem
