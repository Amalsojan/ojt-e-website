import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer '>
      <div className="container py-4 text-center">
        <div className='flex align-center justify-center text-white fw-3 fs-14'>
          <div className='header-cnt-top-l'>
            <ul className='flex top-links align-center'>
              <li>
                {/* dummy links */}
                <Link to="/seller">Seller Center</Link>
              </li>
              <li className='vert-line'></li>
              <li>
                {/* dummy links */}
                <Link to="/download">Download</Link>
              </li>
              <li className='vert-line'></li>
              <li className='flex align-center'>
                <span className='fs-13'>Follow us on</span>
                <ul className='social-links flex align-center'>
                  <li className='mx-2'>
                    <a href="www.facebook.com" className='fs-15'>
                      <i className='fab fa-facebook'></i>
                    </a>
                  </li>
                  <li className='mx-2'>
                    <a href="www.instagram.com" className='fs-15'>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='vert-line'></div>
          <Link to="/" className='text-uppercase'>Privacy policy</Link>
          <div className='vert-line'></div>
          <Link to="/" className='text-uppercase'>term of service</Link>
          <div className='vert-line'></div>
          <Link to="/" className='text-uppercase'>About E-Cart.</Link>
        </div>
        <span className='text-white copyright-text text-manrope fs-14 fw-3'>&copy; 2023 E-Cart. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer