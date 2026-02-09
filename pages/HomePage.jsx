import React from "react";
import "./Homepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";


import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";


import TopBanner from "../src/components/TopBanner";
import NavComponent from "../src/components/NavComponent";
import SectionHeader from "../src/components/SectionHeader";
import ProductCard from "../src/components/ProductCard";

const Homepage = () => {
  return (
    <div className="homepage">
      <TopBanner/>
      <NavComponent />

      {/* Sction hero */}

      <section className="home-hero">
        <ul>
          <li>
            <select>
              <option>Woman's Fashion</option>
              <option>Accessories</option>
              <option>Wears</option>
              <option>Cosmetics</option>
            </select>
          </li>

          <li>
            <select>
              <option>Men's Fashion</option>
              <option>Accessories</option>
              <option>Wears</option>
              <option>Cosmetics</option>
            </select>
          </li>

          <li>
            <Link to="/">Electronics</Link>
          </li>
          <li>
            <Link to="/">Home and Lifestyle</Link>
          </li>
          <li>
            <Link to="/">Medicine</Link>
          </li>
          <li>
            <Link to="/">Electronics</Link>
          </li>
          <li>
            <Link to="/">Sport and Outdoor</Link>
          </li>
          <li>
            <Link to="/">Babies and toys</Link>
          </li>
          <li>
            <Link to="/">Groceries and pet</Link>
          </li>
          <li>
            <Link to="/">Health and Beauty</Link>
          </li>
        </ul>

        <div className="swiper-container">
          <Swiper
            className="main-slide"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="slider-item">
                <div className="slider-item-left">
                  <div className="slider-left-header">
                    <FaApple color="white" size={40} />
                    iphone 14 series
                  </div>

                  <div className="slider-center">
                    Up to 10% <br />
                    off voucher
                  </div>

                  <div className="slider-bottom">
                    <button>
                      Shop Now <FaArrowRight color="white" />
                    </button>
                  </div>
                </div>

                <img src="/src/assets/iphoneimg.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <div className="slider-item-left">
                  <div className="slider-left-header">
                    <FaApple color="white" size={40} />
                    iphone 14 series
                  </div>

                  <div className="slider-center">
                    Up to 10% <br />
                    off voucher
                  </div>

                  <div className="slider-bottom">
                    <button>
                      Shop Now <FaArrowRight color="white" />
                    </button>
                  </div>
                </div>

                <img src="/src/assets/iphoneimg.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <div className="slider-item-left">
                  <div className="slider-left-header">
                    <FaApple color="white" size={40} />
                    iphone 14 series
                  </div>

                  <div className="slider-center">
                    Up to 10% <br />
                    off voucher
                  </div>

                  <div className="slider-bottom">
                    <button>
                      Shop Now <FaArrowRight color="white" />
                    </button>
                  </div>
                </div>

                <img src="/src/assets/iphoneimg.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <div className="slider-item-left">
                  <div className="slider-left-header">
                    <FaApple color="white" size={40} />
                    iphone 14 series
                  </div>

                  <div className="slider-center">
                    Up to 10% <br />
                    off voucher
                  </div>

                  <div className="slider-bottom">
                    <button>
                      Shop Now <FaArrowRight color="white" />
                    </button>
                  </div>
                </div>

                <img src="/src/assets/iphoneimg.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <div className="slider-item-left">
                  <div className="slider-left-header">
                    <FaApple color="white" size={40} />
                    iphone 14 series
                  </div>

                  <div className="slider-center">
                    Up to 10% <br />
                    off voucher
                  </div>

                  <div className="slider-bottom">
                    <button>
                      Shop Now <FaArrowRight color="white" />
                    </button>
                  </div>
                </div>

                <img src="/src/assets/iphoneimg.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <div className="slider-item-left">
                  <div className="slider-left-header">
                    <FaApple color="white" size={40} />
                    iphone 14 series
                  </div>

                  <div className="slider-center">
                    Up to 10% <br />
                    off voucher
                  </div>

                  <div className="slider-bottom">
                    <button>
                      Shop Now <FaArrowRight color="white" />
                    </button>
                  </div>
                </div>

                <img src="/src/assets/iphoneimg.png" />
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </section>


      <section className="todays-section">

        <SectionHeader headerContent="Today's" />
        
        
        <div className="flashsales">
          <h2>Flash Sales</h2>
          <div className="countdown">

          </div>

        </div>

        <div className="product-cards-wrapper">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard />
          <ProductCard/>

        </div>


      </section>
    </div>
  );
};

export default Homepage;