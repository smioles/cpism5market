import React from 'react'
import './ProductCard.css'
import { FaStar } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa6'
import { FiEye } from 'react-icons/fi'

const ProductCard = () => {
  return (
      <div className='product-card'>
          <div className='image-wrapper'>
               <img src='/src/assets/pad.png' className='product-img'/>
              
              <div className='discountpercent'>-40%</div>
              <div className="icons-wrapper">
                  <FaRegHeart />
                  
              </div>

                <div className="icons2-wrapper">
                  <FiEye />
                  
              </div>

              <button className='addtocart'>
                  Add To Cart
              </button>
          </div>
          
         
          <h4>Gaming pad</h4>
          <div className='price-wrapper'>
              <span className='discountprice'>$120</span>
              <span className='realprice'>$160</span>
              
          </div>

          <div className='ratings'>
              <div className='ratings-star'>
                  <FaStar color='orange' />
                  <FaStar color='orange' />
                  <FaStar color='orange' />
                  <FaStar color='orange' />
                 
                  <FaStar color='gray' />

              </div>
              <span className="rating-count">(88)</span>
              
          </div>
          
    </div>
  )
}

export default ProductCard