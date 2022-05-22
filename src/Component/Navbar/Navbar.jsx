import React from 'react'
import "./Navbar.css"
import logo from "../Images/logo.png"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
      <div>

          <div id="DesktopHeader">

          
          <header className="main-header">
  <div className="header-top">
    <div className="top-inner">
      <ul className="left-info">
        <li>
        <i class="fa-solid fa-phone"></i>
          <p><span>call: </span><a href="tel:http://(800)%20456-1234">(800) 456-1234</a></p>
        </li>
        <li>
        <i class="fa-solid fa-envelope"></i>
          <p><span>Mail: </span><a href="mailto:http://info@example.com">info@example.com</a></p>
        </li>
      </ul>
      <div className="location-box">
        <div className="location-carousel owl-carousel owl-theme owl-dots-none owl-loaded owl-drag">
          <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-1349px, 0px, 0px)', transition: 'all 0s ease 0s', width: 3150}}><div className="owl-item cloned" style={{width: '449.987px'}}><p><span>Recent:</span> Business Development Manager, Landon, UK.</p></div><div className="owl-item cloned" style={{width: '449.987px'}}><p><span>Recent:</span> Business Development Manager, New York.</p></div><div className="owl-item" style={{width: '449.987px'}}><p><span>Recent:</span> Business Development Manager, San Fransisco, CA.</p></div><div className="owl-item active" style={{width: '449.987px'}}><p><span>Recent:</span> Business Development Manager, Landon, UK.</p></div><div className="owl-item" style={{width: '449.987px'}}><p><span>Recent:</span> Business Development Manager, New York.</p></div><div className="owl-item cloned" style={{width: '449.987px'}}><p><span>Recent:</span> Business Development Manager, San Fransisco, CA.</p></div><div className="owl-item cloned" style={{width: '449.987px'}}><p><span>Recent:</span> Business Development Manager, Landon, UK.</p></div></div></div><div className="owl-nav"><div className="owl-prev"><span className="flaticon-arrowhead-thin-outline-to-the-left" /></div><div className="owl-next"><span className="flaticon-right-arrow-2" /></div></div><div className="owl-dots"><div className="owl-dot"><span /></div><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div></div></div>
        <div className="apply-btn"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/apply-now/">Apply Online<i class="fa-solid fa-arrow-right-long"></i></a></div>
      </div>
      <div className="right-info">
        <ul className="list">
          <li><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/about-company/">About Us</a></li>
          <li><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/contact/">Locations</a></li>
          <li><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/executive-search/">Resources</a></li>                      </ul>
        <ul className="social-links">
          <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
          <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
          <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
          <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
        </ul>
      </div>
    </div>
  </div>
 
          </header>

      <nav>
        <div className='container-fluid'>
        <div className='row'>
              <div className='col-2 p-0'>
          <div className='curvex d-flex'>
          <img src={logo} alt="" />
        <div className='hi5div'>
        <h4 className='hiheader'>Hi5 Consulting</h4>

        </div>
          </div>
              </div>
              <div className='col-8 hi5div'>
              <ul class="nav justify-content-center">
              <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
              </li>

               <li className="dropdowny nav-item dropdown">
              <a class="dropbtn nav-link dropdown-toggle">Industry</a>
    <ul class="dropdowny-contenty">
      <li><Link className="dropdown-item" to="/development">Development</Link></li>
      <li> <Link className="dropdown-item" to="/rescuiting">Rescruiting</Link></li>
    
    </ul>
              </li>

              {/* <li className="nav-item">
                    <Link className="nav-link" to="services">Services</Link>
              </li> */}
              <li className="nav-item">
                    <Link className="nav-link" to="/capabilities">Capabilities</Link>
              </li>
              <li className="nav-item">
                    <Link className="nav-link" to="/job">Jobs</Link>
              </li>
              <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                    <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                    <Link className="nav-link" to="/team">Team</Link>
              </li>
              <li className="nav-item">
                    <Link className="nav-link" to="/faqs">FAQ's</Link>
              </li>
              <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
              </li>

             


</ul>

              </div>
              <div className='col-2 hi5div'>
               <div className='d-flex'>
               <button className='iconwidth'><i class="fa-solid fa-magnifying-glass"></i></button>
              <button type="button" class="btn btn-success w-100">APPOINTMENT</button>
               </div>
              </div>
        </div>
        </div>
      </nav>

          </div>
         
    </div>
  )
}
