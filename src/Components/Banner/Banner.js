import React, { useEffect } from 'react'
import "./Banner.css"

function Banner() {
    useEffect(() => {
 
    
    
    }, [])
    
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>Loram has built a decades-long partnership with the rail industry offering the most innovative portfolio.</h1>
      </div>
      <div className='fade_bottom'></div>
      
    </div>
  )
}

export default Banner
