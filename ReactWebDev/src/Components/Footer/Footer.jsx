import React from 'react';
import './Footer.css';

import footer_logo from '../Assets/logo_big.png';
import insta from '../Assets/instagram_icon.png';
import pintster from '../Assets/pintester_icon.png';
import whatsapp from '../Assets/whatsapp_icon.png';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerlogo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offers</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icos-container">
          <img src={insta} alt="Instagram" />
        </div>
        <div className="footer-icos-container">
          <img src={pintster} alt="Pinterest" />
        </div>
        <div className="footer-icos-container">
          <img src={whatsapp} alt="WhatsApp" />
        </div>
      </div>
      <div className="footer-copy-right">
        <hr />
        <p>© 2023 Shopper. All rights reserved.</p>
      </div>
    </div>
  );
};
