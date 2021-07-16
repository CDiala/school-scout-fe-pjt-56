// import React from "react";
import './Footer.css'
import { Link } from "react-router-dom"
import logo from '../../pages/Scholarship/images/logo.svg'
import arrow from '../../pages/Scholarship/images/arrow.svg'
import ig from '../../pages/Scholarship/images/instagram.svg'
import li from '../../pages/Scholarship/images/linkedin.svg'
import tw from '../../pages/Scholarship/images/twitter.svg'
import fb from '../../pages/Scholarship/images/facebook.svg'

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-col col-1">
            <img src={logo} alt="footer-logo" />
            <p className="footer-description">
              School scout seeks to help students
              make the best educational decision
              by proviing them with all relevant
              information and also helping them
              choose a career for themselves.
            </p>
          </div>
          <div className="footer-div footer-col col-2">
            <ul>
              <li>
                <Link to="./">About us</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + '/explore-schools'}>Explore schools</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + '/compare-schools'}>Compare schools</Link>
              </li>
              <li>
                <Link to="./">Find schorlaship</Link>
              </li>
              <li>
                <Link to="./"> Career advisory</Link>
              </li>
            </ul>
          </div>
          <div className="footer-div footer-col col-3">
            <ul>
              <li>
                <Link to="./">Testimonials</Link>
              </li>
              <li>
                <Link to="./">Review</Link>
              </li>
              <li>
                <Link to="./">Articles</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col col-4">
            <p>Newsletter Sign up</p>
            <form className="footer-form" action="">
              <label for="email">
                Signup to get important information via mail
              </label>
              <br />
              <div className="footer-input-group">
                <input className="footer-input" type="email" placeholder="Enter email address" />
                <img src={ arrow } alt=""></img>
              </div>
            </form>
            <div className="footer-social-media">
              <Link to="./"><img src={ ig } alt="" /></Link>
              <Link to="./"><img src={ li } alt="" /></Link>
              <Link to="./"><img src={ tw } alt="" /></Link>
              <Link to="./"><img src={ fb } alt="" /></Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy; 2021 SchoolScout. All rights resereved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
