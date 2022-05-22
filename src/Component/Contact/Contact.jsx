import './Contact.css';
import './ContactMedia.css';
import Slider from "react-slick";
import Footer from '../Footer/Footer';
import Fade from 'react-reveal/Fade';
import Navbar from '../Navbar/Navbar';
import PageBanner from '../../InnerSections/PageBanner';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Country, State, City }  from 'country-state-city';



const Contact = () => {

  const [UseFormSubmited, CheckFormSubmited] = useState();

  const [UseCountries, AllCountries] = useState();
  const [UseCitywow, AllCity] = useState();

  const [useselectCountry, setSelectCountry] = useState();

  const [UseFirstName, SetFirstName] = useState();
  const [UseLastName, SetLastName] = useState();
  const [UseEmail, SetEmail] = useState();
  const [UsePhone, SetxPhone] = useState();
  const [UseIndustry, SetIndustry] = useState();
  const [UseCountry, SetCountry] = useState();
  const [UseCity, SetCity] = useState();
  const [UseMessage, SetMessage] = useState();
  
  useEffect(() => {
    AllCountries(Country.getAllCountries())
  }, []);

 

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 10000,
  };

    function ValuesCheck() {
      console.log('First Name',UseFirstName);
      console.log('last Name',UseLastName);
      console.log('Email',UseEmail);
      console.log('phone','032132133');
      console.log('Industry',UseIndustry);
      console.log('Country',UseCountry);
      console.log('City',UseCity);
      console.log('Message',UseMessage);

      setSelectCountry('null');
      SetCity('null');
    
      
    }

    function CountryValueCheck(e) {
      const Contrybyhim = Country.getCountryByCode(e.target.value)
      SetCountry(Contrybyhim.name);
      setSelectCountry(e.target.value);

      
      const CheckTheCity = City.getCitiesOfCountry(e.target.value)
      AllCity(CheckTheCity);

    }

    function formSP(e) {
      e.preventDefault();
    
        if( UseFirstName == "" | UseLastName == "" | UseEmail == "" | UseIndustry == "" | UseCountry == null | UseCity == null | UseMessage == ""){
         alert('Please Check the all fields')
        }else{

          setTimeout(() => {  CheckFormSubmited(false)  }, 8000);
          ApplyApi()
          AllCity('');
        }
    }

    function ApplyApi() {
      const formData = new FormData();
      formData.append('first_name',UseFirstName)
      formData.append('last_name',UseLastName)
      formData.append('email',UseEmail)
      formData.append('phone',UsePhone)
      formData.append('industry',UseIndustry)
      formData.append('country',UseCountry)
      formData.append('city',UseCity)
      formData.append('message',UseMessage)
      axios.post('https://hi5.thedatech.com/api/contact', formData);

      ValuesCheck();
      CheckFormSubmited(true);

SetFirstName('');
SetLastName('');
SetEmail('');
SetxPhone('');
SetIndustry('');
SetCountry('null');
SetCity('null');
SetMessage('');

    }
   

    
    return (
        <div>
            {/* Header Section Here */}
 
              <Navbar></Navbar>

            {/* Header Section Here */}

                {/* Top section Banner Here */}
                <PageBanner  PageTitile={'Get In Touch'} PageDes={'Smarter Business Solutions. Better Customer Relations.'} PageName={'CONTACT'} ></PageBanner>
            {/* Top section Banner Here */}
          
                {/* EndLess Opportunity Section */}
                <section className="contactinfo-section contact-page-section">
  <div className="auto-container">
    <div className="row clearfix">
      <div className="col-lg-4 col-md-12 col-sm-12 content-column">
        <div id="content_block_6">
          <div className="content-box">
            <div className="sec-title">
              <span className="top-title">Endless Opportunities</span>
              <h2>It’s Your Turn</h2>
              <p>Visit our <span>Employer FAQ</span> or <span>Employee FAQ</span> page for answers to common questions.</p>
            </div>
            <ul className="info-list clearfix">
              <li>
                <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-39.png" alt="Awesome Image" /></figure>
                <div className="inner">
                  <h4>Location</h4>
                  <p>United States <br />866 Wilshire, 2nd Street <br />Los Angeles 90024.</p>
                </div>
              </li>
              <li>
                <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-40.png" alt="Awesome Image" /></figure>
                <div className="inner">
                  <h4>Call or Email</h4>
                  <p><a href="tel:8004561234">(800) 456-1234</a><br />
                    <a href="mailto:contact@example.com">contact@example.com</a></p>
                </div>
              </li>
              <li>
                <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-41.png" alt="Awesome Image" /></figure>
                <div className="inner">
                  <h4>Office Hrs</h4>
                  <p>Mon - Sat: 9.00am to 7.00pm<br />Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-md-12 col-sm-12 form-column">
        <div className="form-inner">
          <h2>What are you looking for?</h2>
           
          <div className="default-form"> 
            <div role="form" className="wpcf7" id="wpcf7-f497-p642-o1" lang="en-US" dir="ltr">
              <div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true" /> <ul /></div>
              <form action="/newwp/eazyrecruitz/contact/#wpcf7-f497-p642-o1" method="post" className="wpcf7-form init" noValidate="novalidate" data-status="init">
                <div style={{display: 'none'}}>
                  <input type="hidden" name="_wpcf7" defaultValue={497} />
                  <input type="hidden" name="_wpcf7_version" defaultValue="5.3.2" />
                  <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
                  <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f497-p642-o1" />
                  <input type="hidden" name="_wpcf7_container_post" defaultValue={642} />
                  <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue />
                </div>
                <div className="row clearfix">

                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="wpcf7-form-control-wrap text-941"><input type="text"  value={UseFirstName} onChange={e => SetFirstName(e.target.value)}  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"   placeholder="First Name" /></span>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="wpcf7-form-control-wrap email-196"><input type="text" value={UseLastName} onChange={e => SetLastName(e.target.value)}   className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"   placeholder="Last Name" /></span>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="wpcf7-form-control-wrap text-941"><input type="email" value={UseEmail}  onChange={e => SetEmail(e.target.value)}  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"   placeholder="Email" /></span>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="wpcf7-form-control-wrap email-196"><input type="text" value={UsePhone} onChange={e => SetxPhone(e.target.value)}   className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"   placeholder="Phone" /></span>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="wpcf7-form-control-wrap text-941"><input type="text" value={UseIndustry} onChange={e => SetIndustry(e.target.value)}   className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"   placeholder="Industry" /></span>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group d-grid">
                  <select className="sellect-D" value={useselectCountry} onChange={CountryValueCheck}>
                  <option selected="selected">Select Option</option>
            {UseCountries ?  UseCountries.map((option) => (
              <>
              <option value={option.isoCode}>{option.name}</option>
              </>
            ))
            :
            <option selected="selected">Select Option</option>
          }
          </select>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 form-group d-grid">
 
 <select className="sellect-D" value={UseCity} onChange={e => SetCity(e.target.value)}>
            <option> Select the option </option>
            {UseCitywow ?  UseCitywow.map((option) => (
              <>
            <option value={option.name}>{option.name}</option>
              </>
            ))
            :
            <option style={{display:'hidden'}}> </option>
          }
          </select>

                   </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <span className="wpcf7-form-control-wrap email-196">
                      <textarea value={UseMessage}  onChange={e => SetMessage(e.target.value)} id="w3review" name="w3review" rows="140" cols="50">
                      </textarea></span>
                  </div>
                  <button type="submit" onClick={formSP} className="btn btn-primary">Submit</button>



{UseFormSubmited? 
          <div className='fromsub mt-3'>
          <p>Form Has Been Submitted</p>
          </div>


            :

          
            
            <h1 className='text-white'>dsadsda</h1>
              }
                </div>
                <div className="wpcf7-response-output" aria-hidden="true" /></form></div>                          </div>
        </div>
      </div>
    </div>
  </div>
</section>

                {/* EndLess Opportunity Section */}



                    {/* Location Area Content Here */}
                 <section className="locations-section bg-color-2">
  <div className="pattern-layer" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/pattern-50.png)'}} />
  <div className="auto-container">
    <div className="row clearfix">
    <Fade bottom>
    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
        <div className="single-item wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">
            <div className="upper-box">
              <h3>Philadelphia</h3>
              <p>United States, 205 Wilshire, 2nd Str Philadelphia 19019.</p>
            </div>
            <ul className="info-list clearfix">
              <li>
              <i class="fa-solid fa-envelope"></i>
                <p>Email</p>
                <a href="mailto:http://info@example.com">info@example.com</a>
              </li>
              <li>
              <i class="fa-solid fa-phone"></i>
                <p>Phone</p>
                <a href="tel:http://(267)%20456-1234">(267) 456-1234</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 single-column">
        <div className="single-item wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">
            <div className="upper-box">
              <h3>New Orleans</h3>
              <p>United States, 102 Wilshire, 3rd Str New Orleans 70032.</p>
            </div>
            <ul className="info-list clearfix">
              <li>
              <i class="fa-solid fa-envelope"></i>
                <p>Email</p>
                <a href="mailto:http://info@example.com">info@example.com</a>
              </li>
              <li>
              <i class="fa-solid fa-phone"></i>
                <p>Phone</p>
                <a href="tel:http://(504)%20456-1234">(504) 456-1234</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 single-column">
        <div className="single-item wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">
            <div className="upper-box">
              <h3>Minneapolis</h3>
              <p>United States, 405 Wilshire, 2nd Str Minneapolis 55111.</p>
            </div>
            <ul className="info-list clearfix">
              <li>
              <i class="fa-solid fa-envelope"></i>
                <p>Email</p>
                <a href="mailto:http://info@example.com">info@example.com</a>
              </li>
              <li>
              <i class="fa-solid fa-phone"></i>
                <p>Phone</p>
                <a href="tel:http://(504)%20456-1234">(504) 456-1234</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        </Fade>
  

    </div>
  </div>
</section>

                       {/* Location Area Content Here */}


                       {/* Employeee Qualified Section */}
                     <section className="clients-style-two" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/clients-1.jpg)'}}>
  <div className="auto-container">
    <div className="title-inner centred">
      <h2>Need of Highly Qualified HR Personnel or Employment Opportunities</h2>
      <div className="btn-box">
        <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/direct-hire/" className="btn-one">Hire</a>
        <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/apply-now/" className="btn-two">Apply</a>
      </div>
    </div>
    
    <Slider {...settings3}>
                <div className='col-sm-12 col-sm-12 col-sm-12 col-sm-12 col-sm-12 client_col2'>
               
                <div className="owl-item active" style={{width: 195}}><figure className="clients-logo-box">
    <a href="#"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/clients-logo-10.png" alt="Awesome Image" /></a>
  </figure></div>

          </div>
          <div className='col-sm-12 client_col2'>
       
          <div className="owl-item active" style={{width: 195}}><figure className="clients-logo-box">
    <a href="#"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/clients-logo-10.png" alt="Awesome Image" /></a>
  </figure></div>


                </div>
              <div className='col-sm-12 client_col3'>
              <div className="owl-item active" style={{width: 195}}><figure className="clients-logo-box">
    <a href="#"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/clients-logo-10.png" alt="Awesome Image" /></a>
  </figure></div>


                </div>

                <div className='col-sm-12 client_col3'>
              <div className="owl-item active" style={{width: 195}}><figure className="clients-logo-box">
    <a href="#"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/clients-logo-10.png" alt="Awesome Image" /></a>
  </figure></div>


                </div>

                <div className='col-sm-12 client_col4'>
              <div className="owl-item active" style={{width: 195}}><figure className="clients-logo-box">
    <a href="#"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/clients-logo-10.png" alt="Awesome Image" /></a>
  </figure></div>


                </div>

                <div className='col-sm-12 client_col5'>
              <div className="owl-item active" style={{width: 195}}><figure className="clients-logo-box">
    <a href="#"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/clients-logo-10.png" alt="Awesome Image" /></a>
  </figure></div>
</div>

<div className='col-sm-12 client_col6'>
              <div className="owl-item active" style={{width: 195}}><figure className="clients-logo-box">
    <a href="#"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/clients-logo-10.png" alt="Awesome Image" /></a>
  </figure></div>
</div>
                
        </Slider>

  </div>
</section>

                            {/* Employeee Qualified Section */}


        {/* Footer Section Here */}
          <Footer></Footer>
        {/* Footer Section Here */}

        </div>
    );
}

export default Contact;
