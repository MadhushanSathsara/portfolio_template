import React from 'react'
import './index.css';

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-about">
          <h2>John Medusa</h2>
          <p>Web Developer | Designer | Freelancer</p>
          <p>"Crafting elegant and functional web experiences."</p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:msathsara839@gmail.com">johnmedusa839@gmail.com</a></p>
          <p>Phone: <a href="tel:+94719810539">+96 195586374</a></p>
          <p>Location: Colombo, Sri Lanka</p>
        </div>

        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-link">
           <box-icon type='logo' name='facebook-circle'></box-icon>
           <box-icon type='logo' className='whatsapp' name='whatsapp-square'></box-icon>
           <box-icon type='logo' name='instagram-alt'></box-icon>
        </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Madushan Sathsara | All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
