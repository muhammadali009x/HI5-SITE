import '../Industries/Industries.css'
import '../Industries/IndustriesMedia.css'
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Navbar from '../Navbar/Navbar';
import right from "../Images/right_arrow.png"

import WebDeve from "../Images/Web-Applications.jpg"
import Softwaresdeve from "../Images/Softwares.jpg"
import MobApplicationszxc from "../Images/Mob-Applications.jpeg"
import Footer from '../Footer/Footer';
import PageBanner from '../../InnerSections/PageBanner';

export default function Industries() {
  const [statemobile, setmobile] = useState(null);
  const [show, setShow] = useState();

  const [perone, peroneShow] = useState();
  const [pertow, pertowShow] = useState(true);
  const [perthree, perthreeShow] = useState();



  // SECTION DEVELOPMENT HERE 
  const [useWebApp, SetWebApp] = useState(true);
  const [useSoftware, SetSoftware] = useState();
  const [useMobApp, SetMobApp] = useState();
  // SECTION DEVELOPMENT HERE 

  const webApplicationpp = () => {
    SetWebApp(true)
    SetSoftware(false)
    SetMobApp(false)
    console.log(useWebApp);
  }

  const software = () => {
    SetSoftware(true)
    SetWebApp(false)
    SetMobApp(false)
    console.log(useSoftware);
  }

  const MobApp = () => {
    SetMobApp(true)
    SetWebApp(false)
    SetSoftware(false)
    console.log(useMobApp);
  }



  const iffunc = (x) => {
    peroneShow(x);
    pertowShow(false)
    perthreeShow(false)
  }

  const iffunc2 = (x) => {
    peroneShow(false);
    pertowShow(x)
    perthreeShow(false)
  }

  const iffunc3 = (x) => {
    peroneShow(false);
    perthreeShow(x)
    pertowShow(false)
  }



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
    <PageBanner  PageTitile={'Development'} PageDes={'Our Team Moves Faster, Keeping you Current on Whats Hot'} PageName={'TEMPORARY STAFFING'} ></PageBanner>
            {/* Top section Banner Here */}

            {/* Service Details Section Here */}
            <section className="service-details">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="service-details-content">
                <div className="content-one">

                  {/* ALL WEB DEVELOPMENT CONTENT HERE */}
                  {useWebApp ?
                    <div className='web-development'>
                      <div className="sec-title">
                        <span className="top-title">Development for</span>
                        <h2>Web Applications</h2>
                      </div>
                      <figure className="image-box"><img className='induximage' src={WebDeve} alt="Awesome Image" /></figure>
                      <div className="text">
                        <p>As the world evolves, businesses have to adapt and grow with the times in order to stay on top of things. Web applications have become an integral part of any business in order to connect with clients or gather potential ones.</p>
                        <p>In order to run a successful business in the current technological world, you need to have a web presence through which potential customers can learn about you. With a web application, people understand what your company offers and think about if they want to work with you or not.</p>
                        <p>It is critical that your web application is smooth, clean, informative, and puts forwards your company’s best. No lag, no dead ends, and no dull work!</p>
                        <p>At Hi5 consulting, our goal is to provide you with top-notch service. We collaborate with businesses to create a web applications that fits your company’s needs and works smoothly. We want your company to have a web presence that not only makes a great first impression but also, makes sure your customers are connected with your business.</p>
                      </div>
                    </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }

                  {/* ALL SOFTWARE DEVELOPMENT CONTENT HERE */}

                  {useSoftware ?
                    <div className='SOFTWARE-development'>
                      <div className="sec-title">
                        <span className="top-title">Development for</span>
                        <h2>Software</h2>
                      </div>
                      <figure className="image-box"><img className='induximage' src={Softwaresdeve} alt="Awesome Image" /></figure>
                      <div className="text">
                        <p>In this day and age of modern technology, software is the backbone of any business. Whether it be for the development of an application, or improvement for company’s own internal IT affairs- Different software comes with different demands of expertise.</p>
                        <p> At Hi5 consulting, we have a team of experts who make sure to provide you with our excellent service. Developing software and working with them requires a certain level of skill and capability, our team is more than capable to handle it and deliver our best!</p>
                      </div>
                    </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }

                  {/* ALL MOBILE DEVELOPMENT CONTENT HERE */}

                  {useMobApp ?
                    <div className='SOFTWARE-development'>
                      <div className="sec-title">
                        <span className="top-title">Development for</span>
                        <h2>Mobile Applications</h2>
                      </div>
                      <figure className="image-box"><img className='induximage' src={MobApplicationszxc} alt="Awesome Image" /></figure>
                      <div className="text">
                        <p>With times changing, businesses have to keep up with the current trends, which includes- mobile applications. Simply put, customers need quick and easy service right in their hands!</p>
                      </div>
                    </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }
                </div>






                <div className="content-two">
                  <div className="inner-box clearfix">
                    <div className="single-column">
                      <div className="content-box">
                        <h5>01</h5>
                        <h3>Administration Roles</h3>
                        <div className="link"><a href="#"><i className="flaticon-right-arrow" /></a></div>
                        <div className="icon-box"><i className="icon flaticon-businessman-1" /></div>
                      </div>
                      <div className="overlay-box">
                        <div className="icon-box"><i className="icon flaticon-businessman-1" /></div>
                        <h5>Roles</h5>
                        <ul className="list clearfix">
                          <li>&gt; Office Coordinator</li>
                          <li>&gt; Receptionist</li>
                          <li>&gt; Facilities</li>
                          <li>&gt; Data Entry</li>
                        </ul>
                        <div className="link"><a href="#"><i className="flaticon-right-arrow" />More Details</a></div>
                      </div>
                    </div>
                    <div className="single-column">
                      <div className="content-box">
                        <h5>02</h5>
                        <h3>Human Resources Roles</h3>
                        <div className="link"><a href="#"><i className="flaticon-right-arrow" /></a></div>
                        <div className="icon-box"><i className="icon flaticon-human-resources" /></div>
                      </div>
                      <div className="overlay-box">
                        <div className="icon-box"><i className="icon flaticon-human-resources" /></div>
                        <h5>Role</h5>
                        <ul className="list clearfix">
                          <li>&gt; Office Coordinator</li>
                          <li>&gt; Receptionist</li>
                          <li>&gt; Facilities</li>
                          <li>&gt; Data Entry</li>
                        </ul>
                        <div className="link"><a href="#"><i className="flaticon-right-arrow" />More Details</a></div>
                      </div>
                    </div>
                    <div className="single-column">
                      <div className="content-box">
                        <h5>03</h5>
                        <h3>Customer Suport Roles</h3>
                        <div className="link"><a href="#"><i className="flaticon-right-arrow" /></a></div>
                        <div className="icon-box"><i className="icon flaticon-customer-service" /></div>
                      </div>
                      <div className="overlay-box">
                        <div className="icon-box"><i className="icon flaticon-customer-service" /></div>
                        <h5>Role</h5>
                        <ul className="list clearfix">
                          <li>&gt; Office Coordinator</li>
                          <li>&gt; Receptionist</li>
                          <li>&gt; Facilities</li>
                          <li>&gt; Data Entry</li>
                        </ul>
                        <div className="link"><a href="#"><i className="flaticon-right-arrow" />More Details</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-three">
                  <div className="upper-box">
                    <h3>Finding You The Leaders Of Tomorrow</h3>
                    <p>Trouble that are bound to ensue; and equaly blame belongs those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain.</p>
                  </div>
                  <div className="tabs-box">
                    <div className="row clearfix">
                      <div className="col-lg-3 col-md-12 col-sm-12 btn-column">
                        <div className="tab-btn-box">

                          <ul className="tab-btns tab-buttons clearfix">

                            <li onClick={() => iffunc(true)} className={perone ? "tab-btn active-btn" : "tab-btn"} data-tab="#tab-1">
                              <div className="icon-box"><i class="fa-solid fa-circle-check"></i></div>
                              <h6>Short Term Hiring</h6>
                            </li>

                            <li onClick={() => iffunc2(true)} className={pertow ? "tab-btn active-btn" : "tab-btn"} data-tab="#tab-2">
                              <div className="icon-box"><i class="fa-solid fa-circle-check"></i></div>
                              <h6>Last Minute Hiring</h6>
                            </li>


                            <li onClick={() => iffunc3(true)} className={perthree ? "tab-btn active-btn" : "tab-btn"} data-tab="#tab-3">
                              <div className="icon-box"><i class="fa-solid fa-circle-check"></i></div>
                              <h6>Immediate Hiring</h6>
                            </li>

                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-12 col-sm-12 content-column">
                        <div className="tabs-content">
                          <div className={perone ? "tab active-tab " : "tab"} id="tab-1" style={{ display: 'none' }}>
                            <div className="inner-box">
                              <figure className="image-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/details-2.jpg" alt="Awesome Image" /></figure>
                              <div className="text">
                                <h3>First Section Here</h3>
                                <p>Many variations of passage of lorem Ipsum available but the majority have suffered alterations in some form injected humour, or randomised words slightly.</p>
                                <a href="#"><img src={right} alt="" width={30} /> More Details</a>
                              </div>
                            </div>
                          </div>
                          <div className={pertow ? "tab active-tab " : "tab"} id="tab-2" style={{ display: 'none' }}>
                            <div className="inner-box">
                              <figure className="image-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/details-2.jpg" alt="Awesome Image" /></figure>
                              <div className="text">
                                <h3>Second Section Here</h3>
                                <p>Many variations of passage of lorem Ipsum available but the majority have suffered alterations in some form injected humour, or randomised words slightly.</p>
                                <a href="#"><img src={right} alt="" width={30} /> More Details</a>
                              </div>
                            </div>
                          </div>
                          <div className={perthree ? "tab active-tab " : "tab"} id="tab-3" style={{ display: 'none' }}>
                            <div className="inner-box">
                              <figure className="image-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/details-2.jpg" alt="Awesome Image" /></figure>
                              <div className="text">
                                <h3>Third Section Here</h3>
                                <p>Many variations of passage of lorem Ipsum available but the majority have suffered alterations in some form injected humour, or randomised words slightly.</p>
                                <a href="#"><img src={right} alt="" width={30} /> More Details</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-four">
                  <div className="upper-box">
                    <h3>Service Advantages</h3>
                    <p>Trouble that are bound to ensue; and equaly blame belongs those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain.</p>
                  </div>
                  <div className="inner-box">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <ul className="list-item clearfix">
                          <li>
                            <div className="icon-box"><i className="icon flaticon-short-tie" /></div>
                            <h5>Qualified Candidates</h5>
                            <div className="more-content">
                              <div className="menu-icon"><i className="flaticon-menu" /><i className="flaticon-menu" /></div>
                              <div className="text">
                                <p>Beguiled and demoralized by the charms of pleasure of the moment.</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="icon-box"><i className="icon flaticon-money-bag" /></div>
                            <h5>Save Your Money</h5>
                            <div className="more-content">
                              <div className="menu-icon"><i className="flaticon-menu" /><i className="flaticon-menu" /></div>
                              <div className="text">
                                <p>Beguiled and demoralized by the charms of pleasure of the moment.</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="icon-box"><i className="icon flaticon-google-maps" /></div>
                            <h5>Broad Network</h5>
                            <div className="more-content">
                              <div className="menu-icon"><i className="flaticon-menu" /><i className="flaticon-menu" /></div>
                              <div className="text">
                                <p>Beguiled and demoralized by the charms of pleasure of the moment.</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <ul className="list-item clearfix">
                          <li>
                            <div className="icon-box"><i className="icon flaticon-hourglass" /></div>
                            <h5>Save Your Time</h5>
                            <div className="more-content">
                              <div className="menu-icon"><i className="flaticon-menu" /><i className="flaticon-menu" /></div>
                              <div className="text">
                                <p>Beguiled and demoralized by the charms of pleasure of the moment.</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="icon-box"><i className="icon flaticon-lightbulb" /></div>
                            <h5>Increase Flexibility</h5>
                            <div className="more-content">
                              <div className="menu-icon"><i className="flaticon-menu" /><i className="flaticon-menu" /></div>
                              <div className="text">
                                <p>Beguiled and demoralized by the charms of pleasure of the moment.</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="icon-box"><i className="icon flaticon-google-maps" /></div>
                            <h5>Improve Productivity</h5>
                            <div className="more-content">
                              <div className="menu-icon"><i className="flaticon-menu" /><i className="flaticon-menu" /></div>
                              <div className="text">
                                <p>Beguiled and demoralized by the charms of pleasure of the moment.</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="service-sidebar">
                <div id="eazyrecruitz_services_sidebar-2" className="service-widget widget_eazyrecruitz_services_sidebar">
                  <div className="categories-widget">
                    <ul className="categories-list clearfix">
                      {/* Title */}
                      <li onClick={() => webApplicationpp()}><a  className={useWebApp ? "active" : "unactive"} >Web Applications </a></li>
                      <li onClick={() => software()} ><a className={useSoftware ? "active" : "unactive"}>Software's</a></li>
                      <li onClick={() => MobApp()}><a className={useMobApp ? "active" : "unactive"}>Mob Applications</a></li>
                    </ul>
                  </div>
                </div><div id="eazyrecruitz_place_a_job-2" className="service-widget widget_eazyrecruitz_place_a_job">
                  <div className="recruitment-widget">
                    <div className="widget-content">
                      <div className="text">
                        <div className="pattern-layer" style={{ backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/pattern-43.png)' }} />
                        <figure className="image-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/men-1.png" alt="Awesome Image" /></figure>
                        <h3>Recruitment Solutions for All Industries...</h3>
                      </div>
                      <div className="link">
                        <a href="#"><i className="flaticon-right-arrow" />Place a Job Order</a>
                      </div>
                    </div>
                  </div>
                </div>                                                  </div>
            </div>
          </div>
        </div>
      </section>


             {/* Service Details Section Here */}


            {/* Our Related Project */}
           <section className="service-details-content related-projects">
  <div className="auto-container">
    <div className="content-five">
      <div className="upper-box">
        <h3>Our Related Projects</h3>
      </div>
     
        {/* Caresol Box here */}
        <Slider {...settings3}>
                <div className='col-sm-12 col-sm-12 col-sm-12 col-sm-12 col-sm-12 client_col2'>
                <div className="owl-item active" style={{width: 370, marginRight: 30}}><div className="project-block-two">
    <div className="inner-box">
      <figure className="image-box"><img width={348} height={348} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3.jpg" className="attachment-eazyrecruitz_370x370 size-eazyrecruitz_370x370 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3.jpg 348w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3-300x300.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3-150x150.jpg 150w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3-60x60.jpg 60w" sizes="(max-width: 348px) 100vw, 348px" /></figure>
      <div className="content-box">
        <div className="text">
          <span>Our Projects</span>
          <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/fullwidth-view-01/">Helping Bigbasket Scale Up</a></h3>
        </div>
        <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/fullwidth-view-01/"><i class="fa-solid fa-angle-right"></i></a></div>
      </div>
    </div>
  </div></div>

          </div>
          <div className='col-sm-12 client_col2'>
 <div className="owl-item active" style={{width: 370, marginRight: 30}}><div className="project-block-two">
    <div className="inner-box">
      <figure className="image-box"><img width={348} height={348} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3.jpg" className="attachment-eazyrecruitz_370x370 size-eazyrecruitz_370x370 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3.jpg 348w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3-300x300.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3-150x150.jpg 150w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3-60x60.jpg 60w" sizes="(max-width: 348px) 100vw, 348px" /></figure>
      <div className="content-box">
        <div className="text">
          <span>Our Projects</span>
          <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/fullwidth-view-01/">Helping Bigbasket Scale Up</a></h3>
        </div>
        <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/fullwidth-view-01/"><i class="fa-solid fa-angle-right"></i></a></div>
      </div>
    </div>
  </div></div>

                </div>
              <div className='col-sm-12 client_col3'>
              <div className="owl-item active" style={{width: 370, marginRight: 30}}><div className="project-block-two">
    <div className="inner-box">
      <figure className="image-box"><img width={348} height={348} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3.jpg" className="attachment-eazyrecruitz_370x370 size-eazyrecruitz_370x370 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3.jpg 348w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3-300x300.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3-150x150.jpg 150w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3-60x60.jpg 60w" sizes="(max-width: 348px) 100vw, 348px" /></figure>
      <div className="content-box">
        <div className="text">
          <span>Our Projects</span>
          <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/fullwidth-view-01/">Helping Bigbasket Scale Up</a></h3>
        </div>
        <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/fullwidth-view-01/"><i class="fa-solid fa-angle-right"></i></a></div>
      </div>
    </div>
  </div></div>

                </div>

                <div className='col-sm-12 client_col4'>
                             <div className="owl-item active" style={{width: 370, marginRight: 30}}><div className="project-block-two">
    <div className="inner-box">
      <figure className="image-box"><img width={348} height={348} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3.jpg" className="attachment-eazyrecruitz_370x370 size-eazyrecruitz_370x370 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3.jpg 348w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3-300x300.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3-150x150.jpg 150w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-3-60x60.jpg 60w" sizes="(max-width: 348px) 100vw, 348px" /></figure>
      <div className="content-box">
        <div className="text">
          <span>Our Projects</span>
          <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/fullwidth-view-01/">Helping Bigbasket Scale Up</a></h3>
        </div>
        <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/fullwidth-view-01/"><i className="flaticon-right-arrow-angle" /></a></div>
      </div>
    </div>
  </div></div>
        
                </div>
        </Slider>

          {/* Caresol Box here */}
     
    </div>
  </div>
</section>

            {/* Our Related Project */}
      <Footer></Footer>

    </div>
  )
}
