import { useEffect } from "react"
import "./About.css";
import react from 'react'
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
const About = () => {
  return (
   
    <div>
    <div className="about-section">
        <div className='about-text'>
            <h1 className='our-story'> Our Story</h1>
            <p>Launched in 2015,Exclusive in South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range tailored marketing, data and service solutions. Markets has 14,500 seller and 300 brands and serves 3million customers across the world</p>
            <p className='p-market'>Market has more than 1million product to offer,growing at a very fast rate. Market offers a diverse assotment in categories ranging from customers.</p>
    
         
        </div>
        <div className="about-image">
            <img src="src/assets/Side Image.png" alt="happy customers shopping" />

        </div>
     </div>       
    
    
        <div className='card-container'>
       <div>
        <img src="src/assets/Services.png.png" alt=""/>
        <h3>10.5k</h3>
        <p>Sellers active on our site</p>
       </div>
       <div>
         <img src="src/assets/Services.png 2.png" alt=""/>
         <h3>33k</h3>
         <p>Monthly Product Sales</p>
       </div>
       <div >
        <img src="src/assets/Services.png 3.png" alt="" />
        <h3>45.5k</h3>
        <p>Customers active on our site</p>
       </div>
       <div >
        <img src="src/assets/services.png 4.png"  alt=""/>
        <h3>25k</h3>
        <p>Annual gross sale on our site</p>
       </div>
       </div>
       
        <section className='customer'>
            <div>
                <img src="src/assets/image 46.png"  alt="" className='custom'/>
                <h3>Tom Cruise</h3>
                <p>Founder & Chairman</p>
                <div>
                   <CiTwitter  className='App' /> 
                   <CiInstagram className='App' />
                   <RiLinkedinLine className='App' />
                </div>
            </div>
            <div>
               <img src="src/assets/image 51.png"  alt="" className='custom'/>
                <h3>Emma Watson</h3>
                <p>Managing Director</p>
                <div>
                   <CiTwitter  className='App' />
                   <CiInstagram className='App' />
                   <RiLinkedinLine className='App' />
                </div>
            </div>

             <div>
               <img src="src/assets/image 47.png"  alt="" className='custom'/>
                <h3>Will Smith</h3>
                <p>Product Designer</p>
                <div>
                   <CiTwitter  className='App' /> 
                   <CiInstagram className='App' />
                   <RiLinkedinLine className='App' />
                </div>
            </div>
        </section>


        <section className="category">


          <div>
         <img src="src/assets copy/services.pnjj.png" alt="" />
         <h3>FREE AND FAST DELIVERY</h3>
        <p>free delivery for all orders over $140</p>
          </div>
        

        
        <div>
          <img src="src/assets/services.pngg.png" alt=""/>
         <h3>24/7 CUSTOMER SERVICE</h3>
        <p>friendly 24/7 customer support</p>
        </div>

        <div>
          <img src="src/assets/Services (3).png" alt="" />
         <h3>24/7 CUSTOMER SERVICE</h3>
        <p>friendly 24/7 customer support</p>
        </div>
        </section>
    </div>



  
  );
}

export default About;