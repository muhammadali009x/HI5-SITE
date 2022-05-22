import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
      <footer className="main-footer bg-color-1">
  <div className="pattern-layer" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/pattern-11.png)'}} />
  <div className="auto-container">
    <div className="footer-top">
      <div className="widget-section">
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 footer-column"><div id="eazyrecruitz_about_company-2" className="footer-widget widget_eazyrecruitz_about_company">      		
              {/*Footer Column*/}
              <div className="about-widget">
                <div className="widget-title"><h3>About Hi5 Consulting</h3></div>                <div className="text">
                 <p>We are a Recruiting and Web Development company. Our founders have extensive experience in industries like Recruiting and Staffing, Web Design and Development, Graphic Designing, Sales and Marketing. We work with a problem solving mindset for our customers and have a goal to deliver good quality work at a fair price. We’re customer focused, customer obsessed and work as your partner to achieve a common goal.</p>
                    </div>
                <ul className="social-links clearfix">
                  <li><h5 className='text-white'>Connected:</h5></li>
                  <li><a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="https://www.facebook.com/" target="_blank"><i class="fa-solid fa-envelope"></i></a></li>


                </ul>
              </div>
            </div></div><div className="col-lg-4 col-md-6 col-sm-12 footer-column"><div id="pages-2" className="footer-widget widget_pages"><div className="widget-title"><h3>Useful Links</h3></div>
              <ul>
                <li className="page_item page-item-383 current_page_item"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/about-company/" aria-current="page">About Company</a></li>
                <li className="page_item page-item-899"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/apply-now/">Apply Now</a></li>
                <li className="page_item page-item-797"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/award-block/">Award Block</a></li>
                <li className="page_item page-item-546"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/blog-grid-view/">Blog Grid View</a></li>
                <li className="page_item page-item-659"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/blog-list-view/">Blog List View</a></li>
                <li className="page_item page-item-514"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/contract-to-hire/">Contract to Hire</a></li>
                <li className="page_item page-item-513"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/direct-hire/">Direct Hire</a></li>
                <li className="page_item page-item-517"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/executive-search/">Executive Search</a></li>
                <li className="page_item page-item-419"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/meet-our-team/">Meet Our Team</a></li>
                <li className="page_item page-item-483"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/our-solutions/">Our Solutions</a></li>
              </ul>
            </div></div><div className="col-lg-4 col-md-6 col-sm-12 footer-column"><div id="eazyrecruitz_for_employers-2" className="footer-widget widget_eazyrecruitz_for_employers">      		
              {/*Footer Column*/}
              <div className="contact-widget">
               
                <div className="single-info-box">
                  <div className="widget-title">
                    <h3>Get in touch</h3>
                  </div>
                  <ul className="info-box clearfix">
                    <li><a href="tel:http://(800)%20789-0123">(571) 549-7519</a></li>
                    <li><a href="mailto:http://info@example.com">info@hi5-consulting.com</a></li>
                    <li><a href="#">Timing: Mon - Fri: 9am - 6pm</a></li>
                  </ul>
                </div>
              </div>
            </div></div>                  </div>
      </div>
    </div>
    <div className="footer-subscribe">
      <div className="text centred"><h3>Subscribe to receive latest news and notifications</h3></div>
      <div className="subscribe-form">
        {/* Mailchimp for WordPress v4.8.1 - https://wordpress.org/plugins/mailchimp-for-wp/ */}<form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-1128" method="post" data-id={1128} data-name="Subscribe Form"><div className="mc4wp-form-fields"><div className="form-group">
              <input type="email" name="EMAIL" placeholder="Enter your email address here ..." required />
              <button type="submit">Subscribe US</button>
            </div></div>
            
            
            
            
            <input type="hidden" name="_mc4wp_timestamp" defaultValue={1648277280} /><input type="hidden" name="_mc4wp_form_id" defaultValue={1128} /><input type="hidden" name="_mc4wp_form_element_id" defaultValue="mc4wp-form-1" /><div className="mc4wp-response" /></form>{/* / Mailchimp for WordPress Plugin */}              </div>
    </div>
    <div className="footer-bottom clearfix">
      <div className="copyright pull-left"><p>Copyright © 2022 Let's Hire. Developed by DA Tech</p></div>
      <ul className="footer-nav pull-right clearfix">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms &amp; Conditions</a></li>
        {/* <li><a href="#">Site Map</a></li>          */}
             </ul>
    </div>
  </div>
</footer>



            


        </div>
    );
}

export default Footer;
