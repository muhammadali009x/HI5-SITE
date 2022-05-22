import Awardsmajor from '../../InnerSections/AwardsMajor';
import Ourteam from '../../InnerSections/OurTeam';
import PageBanner from '../../InnerSections/PageBanner';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './AboutMedia.css';
import './About.css';
import right from "../Images/right_arrow.png"

 const About = () => {
     return (
         <div>
           <Navbar></Navbar>
         
         {/* Top section Banner Here */}
         <PageBanner  PageTitile={'About Company'} PageDes={'Reliable & Cost Efficient Recruitment Agency Based On Los Angeles'} PageName={'ABOUT COMPANY'} ></PageBanner>
            {/* Top section Banner Here */}

       {/* Reliable & Cost Efficiant */}

      <section className="about-style-two about-page mt-5" id="about">
  <div className="auto-container">
    <div className="inner-container">
      <div className="row clearfix">
        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
          <div id="image_block_1">
            <div className="image-box">
              <div className="pattern-layer" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/pattern-14.png)'}} />
              <div className="video-inner" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/video-bg-1.jpg)'}}>
                <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image video-btn" data-caption>
                <i style={{color:"#534293"}} class="fa-solid fa-play"></i>
                </a>
                <div className="border" />
              </div>
              <figure className="image-1"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/about-2.jpg" alt /></figure>
              <Fade left>
              <figure className="image-2 wow slideInLeft animated animated animated" data-wow-delay="00ms" style={{visibility: 'visible', animationDelay: '0ms', animationName: 'slideInLeft'}}><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/briefcase-1.png" alt="Awesome Image" /></figure>

        </Fade>
            
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
          <div id="content_block_3">
            <div className="content-box">
              <div className="sec-title">
                <span className="top-title">About Our Agency</span>
                <h2>Reliable &amp; Cost Efficiant Recruitment Agency</h2>
              </div>
              <div className="text">
                <p>Long established fact that reader will be distracted the readable of pages when looking at its layout. The point using lorem ipsum has a more-or-less normal distribution of letters.</p>
              </div>
              <div className="author-box">
                <div className="author-text">
                  <h3>Pathway for both employer and employee.</h3>
                </div>
                <div className="author-info">
                  <figure className="author-thumb"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/author-1.png" alt="Awesome Image" /></figure>
                  <h4>Daniel Primera</h4>
                  <span className="designation">Founder</span>
                  <figure className="signature"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/signature-1.png" alt="Awesome Image" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       {/* Reliable & Cost Efficiant */}


       {/* Our Plan and working style */}

      <section className="process-style-two alternet-2 mt-5">
  <div className="auto-container">
    <div className="inner-container">
      <div className="pattern-layer" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/pattern-36.png)'}} />                    <div className="sec-title light centred">
        <span className="top-title">How We Work</span>
        <h2>Our Plan &amp; Working Style</h2>
      </div>
      <div className="row clearfix">
        <div className="col-lg-4 col-md-12 col-sm-12 single-column">
          <div className="single-item">
            <div className="inner-box">
              <span>Step</span>
              <h2>01...</h2>
              <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-51.png" alt="Awesome Image" /></figure>
              <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/payrolling/">Application Screening &amp; Scheduling</a></h3>
              <p>Indignation and dislike men who are so beguiled and ...</p>
              <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/payrolling/"><img src={right} alt="" width={30} /> More Details</a></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 single-column">
          <div className="single-item">
            <div className="inner-box">
              <span>Step</span>
              <h2>02...</h2>
              <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-52.png" alt="Awesome Image" /></figure>
              <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/our-solutions/">Employee On-Boarding Checklist</a></h3>
              <p>Desire that they cannot foresee the pain and trouble ...</p>
              <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/our-solutions/"><img src={right} alt="" width={30} /> More Details</a></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 single-column">
          <div className="single-item">
            <div className="inner-box">
              <span>Step</span>
              <h2>03...</h2>
              <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-53.png" alt="Awesome Image" /></figure>
              <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/payrolling/">Take Care of Employee’s Benefits</a></h3>
              <p>Frequently occur that pleasures have to be repudiated and ...</p>
              <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/payrolling/"><img src={right} alt="" width={30} /> More Details</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       {/* Our Plan and working style */}

       {/* history-section */}
      <section className="history-section ">
  <figure className="image-layer"><img className='supermany' src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/history-1.png" alt="Awesome Image" /></figure>
  <div className="auto-container">
    <div className="row clearfix">
      <div className="col-lg-4 col-md-12 col-sm-12 column">
        <div className="sec-title">
          <span className="top-title">Our History</span>
          <h2>Taking a Look Back of Our History</h2>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 column">
        <div className="inner-box">
          <figure className="image-box">
            <img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/history-1.jpg" alt="Awesome Image" />
            <div className="dots-box" />
          </figure>
          <div className="content-box">
            <div className="dots-box active" />
            <div className="year-box">
              <h3>2010</h3>
              <div className="pattern-1" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-37.png)'}} />
              <div className="pattern-2" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-38.png)'}} />
            </div>
            <div className="text">
              <h3>Fast Growing Company</h3>
              <p>To take a trivial example, which of us ever undertake laborius physical exercise except to obtain some advantage from it.</p>
            </div>
          </div>
          <figure className="image-box">
            <img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/history-2.jpg" alt="Awesome Image" />
            <div className="dots-box" />
          </figure>
          <div className="content-box">
            <div className="dots-box active" />
            <div className="year-box">
              <h3>2014</h3>
              <div className="pattern-1" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-37.png)'}} />
              <div className="pattern-2" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-38.png)'}} />
            </div>
            <div className="text">
              <h3>1000 Companies Tie-up</h3>
              <p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and account.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 column">
        <div className="inner-box">
          <div className="content-box">
            <div className="year-box">
              <h3>2008</h3>
              <div className="pattern-1" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-37.png)'}} />
              <div className="pattern-2" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-38.png)'}} />
            </div>
            <div className="text">
              <h3>Started in Houston</h3>
              <p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and account.</p>
            </div>
          </div>
          <figure className="image-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/history-3.jpg" alt="Awesome Image" /></figure>
          <div className="content-box">
            <div className="year-box">
              <h3>2011</h3>
              <div className="pattern-1" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-37.png)'}} />
              <div className="pattern-2" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-38.png)'}} />
            </div>
            <div className="text">
              <h3>Best Staffing Talent Award</h3>
              <p>To take a trivial example, which of us ever undertake laborius physical exercise except to obtain some advantage from it.</p>
            </div>
          </div>
          <figure className="image-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/history-4.jpg" alt="Awesome Image" /></figure>
        </div>
      </div>
    </div>
  </div>
</section>

         {/* history-section */}


        {/* Experiance */}
     
        <Ourteam></Ourteam>

{/* Experiance */}


{/* Awards & Major Achievements */}
      
<Awardsmajor></Awardsmajor>
        {/* Awards & Major Achievements */}


<Footer></Footer>
         </div>
     );
 }
 
 export default About;
