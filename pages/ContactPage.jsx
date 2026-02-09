import React from 'react'
import "./ContactPage.css"


import { FiMail, FiPhoneCall } from 'react-icons/fi'
import TopBanner from '../src/components/TopBanner'
import NavComponent from '../src/components/NavComponent'
const ContactUsPage = () => {
  return (
    <div>
       <TopBanner/>
        <NavComponent/>

  {/* Contact page */}

     <div className="contact-container">
      <div className="contact-box">
        
        <div className="contact-item">
          <div className="icon-circle">
            <FiPhoneCall size={24} />
          </div>
          <h3>Call To Us</h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p className="phone">Phone: +123456789</p>
          <hr />
        </div>

        <div className="contact-item">
          <div className="icon-circle">
            <FiMail  size={24} />
          </div>
          <h3>Write To US</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p className="email">Emails: customer@exclusive.com</p>
          <p className="email">Emails: support@exclusive.com</p>
          </div>
      </div>



  {/* form area */}

         <div className="contact-container">
          <div className="form-box">
      <form className="contact-form">

        <div className="top-inputs">
          <input type="text" placeholder="Your Name " />
          <input type="email" placeholder="Your Email " />
          <input type="text" placeholder="Your Phone " />
        </div>

        <textarea
          placeholder="Your Message"
          
        ></textarea>

        <div className="btn-wrapper">
          <button type="submit">Send Massage</button>
        </div>
      </form>
     </div>
    </div>
    </div>


 </div>
  )
}

export default ContactUsPage