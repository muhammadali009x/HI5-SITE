import PageBanner from "../../InnerSections/PageBanner";
import "./Team.css"
import "./TeamMedia.css"
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Slider from "react-slick";

const Team = () => {

  const [statemobile, setmobile] = useState(null);

  useEffect(() => {

    if (window.matchMedia("(max-width: 480px)").matches) {
      console.log("mobile")
      setmobile(1);
  
  
    } else {
      console.log("Desktop")
      setmobile(3);
    }
  
  }, []);


    const settings3 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: statemobile,
        slidesToScroll: 1,
        autoplaySpeed: 10000,
      };
    return (
        <div>

            <Navbar></Navbar>

            {/* Top section Banner Here */}
                <PageBanner  PageTitile={'Meet Our Team'} PageDes={'Thanks to our team, it is now possible for us to get the finest & services'} PageName={'MEET OUR TEAM'} ></PageBanner>
            {/* Top section Banner Here */}

            {/* Board Of Director Section */}
            <section className="team-style-three">
  <div className="auto-container">
    <div className="sec-title centred">
      <span className="top-title">Our leadership Team</span>
      <h2>Board of Directors &amp; Senior Executives</h2>
      <p>Long established fact that a reader will be distracted by the <br />readable content of a page.</p>
    </div>
  
            {/* Caresol Section Here */}
            <Slider {...settings3}>

                <div className='col-sm-12 col-sm-12 col-sm-12 col-sm-12 col-sm-12 client_col2'>
                <div className="owl-item" style={{width: 370, marginRight: 30}}><div className="team-block-one">
    <div className="inner-box">
      <figure className="image-box">
        <img width={370} height={274} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10.jpg" className="attachment-eazyrecruitz_370x274 size-eazyrecruitz_370x274 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10.jpg 370w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10-300x222.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10-270x200.jpg 270w" sizes="(max-width: 370px) 100vw, 370px" />                                <span className="singature">Our Champ</span>
        <div className="share-box">
          <p><i className="fas fa-share-alt" />Share</p>
          <ul className="social-links clearfix">
            <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
            <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
            <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
            <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
          </ul>
        </div>
      </figure>
      <div className="lower-content">
        <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Isaac Herman</a></h3>
        <span className="designation">Senior Consultant</span>
      </div>
    </div>
  </div></div>
          </div>

          <div className='col-sm-12 client_col2'>
         <div className="owl-item" style={{width: 370, marginRight: 30}}><div className="team-block-one">
    <div className="inner-box">
      <figure className="image-box">
        <img width={370} height={274} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10.jpg" className="attachment-eazyrecruitz_370x274 size-eazyrecruitz_370x274 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10.jpg 370w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10-300x222.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10-270x200.jpg 270w" sizes="(max-width: 370px) 100vw, 370px" />                                <span className="singature">Our Champ</span>
        <div className="share-box">
          <p><i className="fas fa-share-alt" />Share</p>
          <ul className="social-links clearfix">
            <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
            <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
            <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
            <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
          </ul>
        </div>
      </figure>
      <div className="lower-content">
        <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Isaac Herman</a></h3>
        <span className="designation">Senior Consultant</span>
      </div>
    </div>
  </div></div>

                </div>

              <div className='col-sm-12 client_col3'>
             <div className="owl-item" style={{width: 370, marginRight: 30}}><div className="team-block-one">
    <div className="inner-box">
      <figure className="image-box">
        <img width={370} height={274} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10.jpg" className="attachment-eazyrecruitz_370x274 size-eazyrecruitz_370x274 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10.jpg 370w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10-300x222.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10-270x200.jpg 270w" sizes="(max-width: 370px) 100vw, 370px" />                                <span className="singature">Our Champ</span>
        <div className="share-box">
          <p><i className="fas fa-share-alt" />Share</p>
          <ul className="social-links clearfix">
            <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
            <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
            <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
            <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
          </ul>
        </div>
      </figure>
      <div className="lower-content">
        <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Isaac Herman</a></h3>
        <span className="designation">Senior Consultant</span>
      </div>
    </div>
  </div></div>

                </div>

                <div className='col-sm-12 client_col4'>
       <div className="owl-item" style={{width: 370, marginRight: 30}}><div className="team-block-one">
    <div className="inner-box">
      <figure className="image-box">
        <img width={370} height={274} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10.jpg" className="attachment-eazyrecruitz_370x274 size-eazyrecruitz_370x274 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10.jpg 370w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10-300x222.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10-270x200.jpg 270w" sizes="(max-width: 370px) 100vw, 370px" />                                <span className="singature">Our Champ</span>
        <div className="share-box">
          <p><i className="fas fa-share-alt" />Share</p>
          <ul className="social-links clearfix">
            <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
            <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
            <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
            <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
          </ul>
        </div>
      </figure>
      <div className="lower-content">
        <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Isaac Herman</a></h3>
        <span className="designation">Senior Consultant</span>
      </div>
    </div>
  </div></div>

                </div>

                <div className='col-sm-12 client_col5'>
            <div className="owl-item" style={{width: 370, marginRight: 30}}><div className="team-block-one">
    <div className="inner-box">
      <figure className="image-box">
        <img width={370} height={274} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10.jpg" className="attachment-eazyrecruitz_370x274 size-eazyrecruitz_370x274 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10.jpg 370w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10-300x222.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10-270x200.jpg 270w" sizes="(max-width: 370px) 100vw, 370px" />                                <span className="singature">Our Champ</span>
        <div className="share-box">
          <p><i className="fas fa-share-alt" />Share</p>
          <ul className="social-links clearfix">
            <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
            <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
            <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
            <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
          </ul>
        </div>
      </figure>
      <div className="lower-content">
        <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Isaac Herman</a></h3>
        <span className="designation">Senior Consultant</span>
      </div>
    </div>
  </div></div>

                </div>

                <div className='col-sm-12 client_col6'>
            <div className="owl-item" style={{width: 370, marginRight: 30}}><div className="team-block-one">
    <div className="inner-box">
      <figure className="image-box">
        <img width={370} height={274} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10.jpg" className="attachment-eazyrecruitz_370x274 size-eazyrecruitz_370x274 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10.jpg 370w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10-300x222.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-10-270x200.jpg 270w" sizes="(max-width: 370px) 100vw, 370px" />                                <span className="singature">Our Champ</span>
        <div className="share-box">
          <p><i className="fas fa-share-alt" />Share</p>
          <ul className="social-links clearfix">
            <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
            <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
            <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
            <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
          </ul>
        </div>
      </figure>
      <div className="lower-content">
        <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Isaac Herman</a></h3>
        <span className="designation">Senior Consultant</span>
      </div>
    </div>
  </div></div>

                </div>

        </Slider>

  </div>
</section>

             {/* Board Of Director Section */}
             
             {/* Team Behind Our Successful Service */}
             <section className="team-style-four bg-color-2">
  <div className="auto-container">
    <div className="sec-title centred">
      <span className="top-title">Our Executive Team</span>
      <h2>Team Behind Our Successful Service</h2>
      <p />
    </div>
    <div className="row clearfix">

    <Fade bottom>
    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
        <div className="team-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">
            <figure className="image-box">
              <img width={270} height={200} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/team-1.jpg" className="attachment-eazyrecruitz_270x200 size-eazyrecruitz_270x200 wp-post-image" alt loading="lazy" />                                    <span className="singature">Our Champ</span>
              <div className="share-box">
                <p><i className="fas fa-share-alt" />Share</p>
                <ul className="social-links clearfix">
                  <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
                  <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
                  <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
                  <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
                </ul>
              </div>
            </figure>
            <div className="lower-content">
              <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Garrett Barnie</a></h3>
              <span className="designation">Founder</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 team-block">
        <div className="team-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">
            <figure className="image-box">
              <img width={270} height={200} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/team-2.jpg" className="attachment-eazyrecruitz_270x200 size-eazyrecruitz_270x200 wp-post-image" alt loading="lazy" />                                    <span className="singature">Our Champ</span>
              <div className="share-box">
                <p><i className="fas fa-share-alt" />Share</p>
                <ul className="social-links clearfix">
                  <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
                  <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
                  <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
                  <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
                </ul>
              </div>
            </figure>
            <div className="lower-content">
              <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Isaac Herman</a></h3>
              <span className="designation">VP, Finance</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 team-block">
        <div className="team-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">
            <figure className="image-box">
              <img width={270} height={200} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/team-3.jpg" className="attachment-eazyrecruitz_270x200 size-eazyrecruitz_270x200 wp-post-image" alt loading="lazy" />                                    <span className="singature">Our Champ</span>
              <div className="share-box">
                <p><i className="fas fa-share-alt" />Share</p>
                <ul className="social-links clearfix">
                  <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
                  <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
                  <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
                  <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
                </ul>
              </div>
            </figure>
            <div className="lower-content">
              <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Joel Lou</a></h3>
              <span className="designation">Senior Consultant</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 team-block">
     
      <div className="team-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">
            <figure className="image-box">
              <img width={270} height={200} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-4.jpg" className="attachment-eazyrecruitz_270x200 size-eazyrecruitz_270x200 wp-post-image" alt loading="lazy" />                                    <span className="singature">Our Champ</span>
              <div className="share-box">
                <p><i className="fas fa-share-alt" />Share</p>
                <ul className="social-links clearfix">
                  <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
                  <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
                  <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
                  <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
                </ul>
              </div>
            </figure>
            <div className="lower-content">
              <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Garrett Barnie</a></h3>
              <span className="designation">Founder</span>
            </div>
          </div>
        </div>
        
       
      </div>
        </Fade>
  

      <Fade bottom>
      <div className="col-lg-3 col-md-6 col-sm-12 team-block">
      
      <div className="team-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">
            <figure className="image-box">
              <img width={270} height={200} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-5.jpg" className="attachment-eazyrecruitz_270x200 size-eazyrecruitz_270x200 wp-post-image" alt loading="lazy" />                                    <span className="singature">Our Champ</span>
              <div className="share-box">
                <p><i className="fas fa-share-alt" />Share</p>
                <ul className="social-links clearfix">
                  <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
                  <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
                  <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
                  <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
                </ul>
              </div>
            </figure>
            <div className="lower-content">
              <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Joel Lou</a></h3>
              <span className="designation">Consultant</span>
            </div>
          </div>
        </div>
         
      
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 team-block">
        <div className="team-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">
            <figure className="image-box">
              <img width={270} height={200} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-6.jpg" className="attachment-eazyrecruitz_270x200 size-eazyrecruitz_270x200 wp-post-image" alt loading="lazy" />                                    <span className="singature">Our Champ</span>
              <div className="share-box">
                <p><i className="fas fa-share-alt" />Share</p>
                <ul className="social-links clearfix">
                  <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
                  <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
                  <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
                  <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
                </ul>
              </div>
            </figure>
            <div className="lower-content">
              <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Garrett Barnie</a></h3>
              <span className="designation">Consultant</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 team-block">
        <div className="team-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">
            <figure className="image-box">
              <img width={270} height={200} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-7.jpg" className="attachment-eazyrecruitz_270x200 size-eazyrecruitz_270x200 wp-post-image" alt loading="lazy" />                                    <span className="singature">Our Champ</span>
              <div className="share-box">
                <p><i className="fas fa-share-alt" />Share</p>
                <ul className="social-links clearfix">
                  <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
                  <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
                  <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
                  <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
                </ul>
              </div>
            </figure>
            <div className="lower-content">
              <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Isaac Herman</a></h3>
              <span className="designation">Consultant</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 team-block">
        <div className="team-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">
            <figure className="image-box">
              <img width={270} height={200} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/team-18.jpg" className="attachment-eazyrecruitz_270x200 size-eazyrecruitz_270x200 wp-post-image" alt loading="lazy" />                                    <span className="singature">Our Champ</span>
              <div className="share-box">
                <p><i className="fas fa-share-alt" />Share</p>
                <ul className="social-links clearfix">
                  <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-facebook" /></a></li>
                  <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-linkedin" /></a></li>
                  <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-skype" /></a></li>
                  <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><i className="fab fa-twitter" /></a></li>
                </ul>
              </div>
            </figure>
            <div className="lower-content">
              <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Joel Lou</a></h3>
              <span className="designation">Consultant</span>
            </div>
          </div>
        </div>
      </div>
        </Fade>

     




    </div>
  </div>
</section>

             {/* Team Behind Our Successful Service */}


                    {/* Footer Section hERE */}
                        <Footer></Footer>
                     {/* Footer Section hERE */}

           
        </div>
    );
}

export default Team;
