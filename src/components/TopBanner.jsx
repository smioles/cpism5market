import React from 'react'
import {Link} from 'react-router-dom'
import "./TopBanner.css"
const TopBanner = () => {
  return (
      <div className='top-banner'>
          <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50% <Link to="/">Shop Now</Link>
          </p>

          <select>
              <option>English</option>
              <option>French</option>
              
          </select>
          
    </div>
  )
}

export default TopBanner