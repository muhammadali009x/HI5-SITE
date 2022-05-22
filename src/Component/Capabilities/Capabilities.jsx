import Footer from '../Footer/Footer';
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Capabilities.css';
import './CapabilitiesMedia.css';
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import PageBanner from '../../InnerSections/PageBanner';
import right from "../Images/right_arrow.png"
import capa1 from "../Images/capa2.png"
import capa2 from "../Images/capa1.png"
import ImageSlidezx from "../Images/slide-box-ng.jpg"

const Capabilities = () => {

  const [statemobile, setmobile] = useState(null);

useEffect(() => {

  if (window.matchMedia("(max-width: 480px)").matches) {
    console.log("mobile")
    setmobile(1);


  } else {
    console.log("Desktop")
    setmobile(2);
  }

}, []);

  const settings3 = {
       dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div>

          {/* Header Section Here */}
          <Navbar></Navbar>
          {/* Header Section Here */}


            {/* Top section Banner Here */}
         <PageBanner  PageTitile={'Overview'} PageDes={'Reliable & Cost Efficient Recruitment Agency Based On Los Angeles'} PageName={'OVERVIEW'} ></PageBanner>
            {/* Top section Banner Here */}
            
            {/* Improve Your Hiring Strategies */}
           <section className="hiring-strategies">
  <div className="auto-container">
    <div className="sec-title centred">
      <span className="top-title">Welcome to Eazy Recruit</span>
      <h2>Improve Your Hiring Strategies</h2>
      <p>Long established fact that a reader will be distracted by the <br />readable content of a page.</p>
    </div>
    <div className="inner-box">
      <div className="title-inner bg-color-2">
        <div className="pattern-layer" id='tye_img' />
        <h2>Are You Looking for an Employee?...</h2>
        <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/contract-to-hire/" className="theme-btn-two">Hire Now</a>
      </div>
      <div className="funfact-inner clearfix">
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 counter-column">
            <div className="counter-block">
              <div className="count-outer count-box counted">
                <span>0</span><span className="count-text" data-speed={1500} data-stop={8}>8</span><i class="fa-solid fa-arrow-up-long"></i>
              </div>
              <h6>Years of Experience in Field</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 counter-column">
            <div className="counter-block">
              <div className="count-outer count-box counted">
                <span className="count-text" data-speed={1500} data-stop={125}>125</span><span />
              </div>
              <h6>Companies With Our Tie-up</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 counter-column">
            <div className="counter-block">
              <div className="count-outer count-box counted">
                <span className="count-text" data-speed={1500} data-stop="6.2">6.2</span><span>k</span>
              </div>
              <h6>recruitments <br />for our partners</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

             {/* Improve Your Hiring Strategies */}


             {/* solutions-problems */}
            <section className="solutions-problems">
             <div className="auto-container">

           
             <div className="upper-box">
                <div className="row clearfix">
             <div className="col-lg-6 col-md-12 col-sm-12 title-column">
              <div className="title-inner">
            <h2>Realistic &amp; <br/> Common sense <br />Solutions to HR Problems</h2>
            <p>Long established fact that reader will be distracted the readable of pages when looking at its layout.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
          <div className="inner-box">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 column">
                <div className="single-item">
                  <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-54.png" alt="Awesome Image" /></figure>
                  <h3>Understand  Your  <br /> Needs</h3>
                  <p>Indignation and dislike men who beguiled demoralized.</p>
                  <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/our-solutions/"><img src={right} alt="" width={30} /> Start Discuss</a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 column">
                <div className="single-item">
                  <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-55.png" alt="Awesome Image" /></figure>
                  <h3>Find the Perfect Candidate</h3>
                  <p>Business it will frequently occur pleasures repudiated.</p>
                  <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/our-solutions/"><img src={right} alt="" width={30} /> Post a Job</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
         
    <div className="carousel-box">
     
    <Slider {...settings3}>
                <div className='col-12 client_col2'>
                <div className="owl-item" ><div className="single-item">
    <div className="inner-box">
      <figure className="image-box"><img width={470} height={300} src={ImageSlidezx} className="attachment-eazyrecruitz_470x300 size-eazyrecruitz_470x300 wp-post-image" alt loading="lazy"  sizes="(max-width: 470px) 100vw, 470px" /></figure>
      <div className="lower-content">
        <h3>Customized Staffing Solutions and Relationship Building.</h3>
      </div>
      <div className="side-content">
        <div className="content-box">
          <span>03.</span>
          <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-56.png" alt="Awesome Image" /></figure>
        </div>
        <div className="overlay-box">
          <span>03.</span>
          <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/temporary-staffing/"><i class="fa-solid fa-angle-right"></i></a>
        </div>
      </div>
    </div>
  </div></div>

          </div>
          <div className='col-12 client_col2'>
       <div className="owl-item" ><div className="single-item">
    <div className="inner-box">
      <figure className="image-box"><img width={470} height={300} src={ImageSlidezx} className="attachment-eazyrecruitz_470x300 size-eazyrecruitz_470x300 wp-post-image" alt loading="lazy" sizes="(max-width: 470px) 100vw, 470px" /></figure>
      <div className="lower-content">
        <h3>Customized Staffing Solutions and Relationship Building.</h3>
      </div>
      <div className="side-content">
        <div className="content-box">
          <span>03.</span>
          <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-56.png" alt="Awesome Image" /></figure>
        </div>
        <div className="overlay-box">
          <span>03.</span>
          <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/temporary-staffing/"><i class="fa-solid fa-angle-right"></i></a>
        </div>
      </div>
    </div>
  </div></div>


                </div>
              <div className='col-12 client_col3'>
            <div className="owl-item" ><div className="single-item">
    <div className="inner-box">
      <figure className="image-box"><img width={470} height={300} src={ImageSlidezx} className="attachment-eazyrecruitz_470x300 size-eazyrecruitz_470x300 wp-post-image" alt loading="lazy" sizes="(max-width: 470px) 100vw, 470px" /></figure>
      <div className="lower-content">
        <h3>Customized Staffing Solutions and Relationship Building.</h3>
      </div>
      <div className="side-content">
        <div className="content-box">
          <span>03.</span>
          <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-56.png" alt="Awesome Image" /></figure>
        </div>
        <div className="overlay-box">
          <span>03.</span>
          <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/temporary-staffing/"><i class="fa-solid fa-angle-right"></i></a>
        </div>
      </div>
    </div>
  </div></div>
                </div>

                <div className='col-12 client_col4'>
            <div className="owl-item" ><div className="single-item">
    <div className="inner-box">
      <figure className="image-box"><img width={470} height={300} src={ImageSlidezx} className="attachment-eazyrecruitz_470x300 size-eazyrecruitz_470x300 wp-post-image" alt loading="lazy" sizes="(max-width: 470px) 100vw, 470px" /></figure>
      <div className="lower-content">
        <h3>Customized Staffing Solutions and Relationship Building.</h3>
      </div>
      <div className="side-content">
        <div className="content-box">
          <span>03.</span>
          <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-56.png" alt="Awesome Image" /></figure>
        </div>
        <div className="overlay-box">
          <span>03.</span>
          <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/temporary-staffing/"><i class="fa-solid fa-angle-right"></i></a>
        </div>
      </div>
    </div>
  </div></div>
                </div>

                <div className='col-12 client_col5'>
            <div className="owl-item" ><div className="single-item">
    <div className="inner-box">
      <figure className="image-box"><img width={470}
      height={300}
      src={ImageSlidezx}
      className="attachment-eazyrecruitz_470x300 size-eazyrecruitz_470x300 wp-post-image" alt loading="lazy" 
      sizes="(max-width: 470px) 100vw, 470px" /></figure>
      <div className="lower-content">
        <h3>Customized Staffing Solutions and Relationship Building.</h3>
      </div>
      <div className="side-content">
        <div className="content-box">
          <span>03.</span>
          <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-56.png" alt="Awesome Image" /></figure>
        </div>
        <div className="overlay-box">
          <span>03.</span>
          <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/temporary-staffing/"><i class="fa-solid fa-angle-right"></i></a>
        </div>
      </div>
    </div>
  </div></div>
                </div>


        </Slider>
            {/* Caresol content here */}
     </div>
  </div>
</section>

             {/*Our Increased Market Size */}
         <section className="growth-section">
         <Fade left>
         <div id='capa_img' className="pattern-layer wow slideInLeft animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'slideInLeft'}} />

        </Fade>
  
  
  <div className="auto-container">
    <div className="sec-title light centred">
      <span style={{color:"black"}} className="top-title">Recruitment Growth Rate</span>
      <h2>Our Increased Market Size</h2>
    </div>
    <div className="image-box">
      <figure className="image"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/growth-1.png" className="lightbox-image"><img className='w-100' src={capa2} alt="Awesome Image" /></a></figure>
    </div>
  </div>
</section>

             {/*Our Increased Market Size */}

             {/* pricing-section  */}
            <section className="pricing-section mt-5">
  <div className="pattern-layer" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/pattern-19.png)'}} />
  <div className="auto-container">
    <div className="sec-title">
      <span className="top-title">Our Pricing &amp; Plans</span>
      <h2>Impressive Pricing &amp; Plans</h2>
    </div>
    <div className="tabs-box">
      <div className="tab-btn-box">
        <ul className="tab-btns tab-buttons clearfix">
          <li className="tab-btn active-btn" data-tab="#tab-15">Standard</li>
          <li className="tab-btn" data-tab="#tab-16">Premium</li>
        </ul>
      </div>
      <div className="tabs-content">
        <div className="tab active-tab" id="tab-15" style={{display: 'block'}}>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
              <div className="pricing-block-one ">
                <div className="inner-box">
                  <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-35.png" alt="Awesome Image" /></figure>
                  <h3>Temprory Recruitment</h3>
                  <span className="text">Salary Level upto $50k</span>
                  <h2><span className="symble">$</span>5.5k <span className="text"> / Role</span></h2>
                  <p>Average Percentage Fee 10% / Candiadte</p>
                  <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/contact/">Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
              <div className="pricing-block-one popular">
                <div className="inner-box">
                  <div className="popular-tag">Popular</div>                                            <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-36.png" alt="Awesome Image" /></figure>
                  <h3>Contract Recruitment</h3>
                  <span className="text">Salary Level upto $50k</span>
                  <h2><span className="symble">$</span>6.5k <span className="text"> / Role</span></h2>
                  <p>Average Percentage Fee 12% / Candiadte</p>
                  <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/contact/">Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
              <div className="pricing-block-one ">
                <div className="inner-box">
                  <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-37.png" alt="Awesome Image" /></figure>
                  <h3>Direct Recruitment</h3>
                  <span className="text">Salary Level upto $50k</span>
                  <h2><span className="symble">$</span>8.5k <span className="text"> / Role</span></h2>
                  <p>Average Percentage Fee 15% / Candiadte</p>
                  <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/contact/">Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
              <div className="pricing-block-one ">
                <div className="inner-box">
                  <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-38.png" alt="Awesome Image" /></figure>
                  <h3>Training for Employee</h3>
                  <span className="text">Salary Level upto $50k</span>
                  <h2><span className="symble">$</span>12k <span className="text"> / Role</span></h2>
                  <p>Average Percentage Fee 20% / Candiadte</p>
                  <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/contact/">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab" id="tab-16" style={{display: 'none'}}>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
              <div className="pricing-block-one ">
                <div className="inner-box">
                  <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-35.png" alt="Awesome Image" /></figure>
                  <h3>Temprory Recruitment</h3>
                  <span className="text">Salary Level upto $50k</span>
                  <h2><span className="symble">$</span>10k <span className="text"> / Role</span></h2>
                  <p>Average Percentage Fee 15% / Candiadte</p>
                  <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/contact/">Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
              <div className="pricing-block-one popular">
                <div className="inner-box">
                  <div className="popular-tag">Popular</div>                                            <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-36.png" alt="Awesome Image" /></figure>
                  <h3>Contract Recruitment</h3>
                  <span className="text">Salary Level upto $50k</span>
                  <h2><span className="symble">$</span>15k <span className="text"> / Role</span></h2>
                  <p>Average Percentage Fee 20% / Candiadte</p>
                  <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/contact/">Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
              <div className="pricing-block-one ">
                <div className="inner-box">
                  <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-37.png" alt="Awesome Image" /></figure>
                  <h3>Direct Recruitment</h3>
                  <span className="text">Salary Level upto $50k</span>
                  <h2><span className="symble">$</span>18k <span className="text"> / Role</span></h2>
                  <p>Average Percentage Fee 25% / Candiadte</p>
                  <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/contact/">Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
              <div className="pricing-block-one ">
                <div className="inner-box">
                  <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-38.png" alt="Awesome Image" /></figure>
                  <h3>Training for Employee</h3>
                  <span className="text">Salary Level upto $50k</span>
                  <h2><span className="symble">$</span>20k <span className="text"> / Role</span></h2>
                  <p>Average Percentage Fee 30% / Candiadte</p>
                  <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/contact/">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

             {/* pricing-section  */}



             {/* Footer section here */}
                <Footer></Footer>
              {/* Footer section here */}
        </div>
    );
}

export default Capabilities;


