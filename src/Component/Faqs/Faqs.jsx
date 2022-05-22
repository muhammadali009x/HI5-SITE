import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../../InnerSections/PageBanner';
import '../Faqs/Faqs.css';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import FaqqsImage from "../Images/FAQ.jpg"

const Faqs = () => {

    const [showCap1, setCap1] = useState(true);
    const [showCap2, setCap2] = useState();
    const [showCap3, setCap3] = useState();
    const [showCap4, setCap4] = useState();
    const [showCap5, setCap5] = useState();


    const Cap1 = () =>{
        setCap1(true)
        setCap2(false)
        setCap3(false)
        setCap4(false)
        setCap5(false)
    
    }

    const Cap2 = () =>{
        setCap1(false)
        setCap2(true)
        setCap3(false)
        setCap4(false)
        setCap5(false)
    }

    const Cap3 = () =>{
        setCap1(false)
        setCap2(false)
        setCap3(true)
        setCap4(false)
        setCap5(false)
    }

    const Cap4 = () =>{
        setCap1(false)
        setCap2(false)
        setCap3(false)
        setCap4(true)
        setCap5(false)
    }

    const Cap5 = () =>{
        setCap1(false)
        setCap2(false)
        setCap3(false)
        setCap4(false)
        setCap5(true)
    }

    return (
        <div>
           {/* Header Section Here */}
           <Navbar></Navbar>
          {/* Header Section Here */}

           {/* Top section Banner Here */}
         <PageBanner  PageTitile={`FAQ` + `'s`} PageDes={'Reliable & Cost Efficient Recruitment Agency Based On Los Angeles'} PageName={'FAQS'}  ></PageBanner>
            {/* Top section Banner Here */}


            <div className='container Collapse mt-5 mb-5'>

                <div className='cop1 coptop'>
                    <button onClick={() => Cap1()} className='btttn-d' >
                        <ul className={showCap1 ? "pluscop active" : "pluscop"}>
                            <li className='grd-dv'><i class="fa-solid fa-plus icn-szs"></i></li>
                            <li className='grd-dv'><h4>What Does Hi5 Consulting Do?</h4></li>
                        </ul>
                    </button>
                    <div  className={showCap1 ? "contenxt active" : "contenxt unactive"}>
                        <br />
        <p>Our goal at Hi5 consulting is to provide business with top-notch services available at the lowest price. Our services include recruitment, so your company can hire capable and skilled individuals best suited for your company from our large and diverse pool of candidates.</p>
        <p>We also offer development services for your company’s needs, which includes developing web applications, mobile applications, and other software.</p>

                    </div>
                </div>

                <div className='cop2 coptop'>
                    <button onClick={() => Cap2()} className='btttn-d'>
                        <ul className={showCap2 ? "pluscop active" : "pluscop"}>
                            <li className='grd-dv'><i class="fa-solid fa-plus icn-szs"></i></li>
                            <li className='grd-dv'><h4> What Industries Have You Recruited For?</h4></li>
                        </ul>
                    </button>
                    <div className={showCap2 ? "contenxt active" : "contenxt unactive"}>
                        <br />
                        <p>We have helped recruit across multiple industries, these include:</p>
                        <br />
                        <ul className='uixxadd'>
                            <li>Aerospace & Defense</li>
                            <li>US Federal Government</li>
                            <li>Information Technology/Software</li>
                            <li>Health Care</li>
                            <li>Energy</li>
                            <li>Commercial Construction</li>
                            <li>Education</li>
                            <li>Agriculture</li>
                        </ul>
                        <br />
                        <p>You can read about these in more detail at our ‘Industries’ page.
</p>
<p>We have also placed candidates in the following agencies:
</p>

<br />

            <ul className='uixxadd'>
                <li>Department of Defense
</li>
                <li>Department of Labor
</li>
                <li>Department of Justice
</li>
                <li>Department of Health
</li>
                <li>Department of Homeland Security
</li>
                <li>Department of Energy
</li>
            </ul>
            <br />
<p>Our team includes experienced individuals who are qualified to place highly capable candidates in hard to fill positions. We provide cleared recruiting that includes:
</p>
<br />

<ul className='uixxadd'>
    <li>Public Trust
</li>
    <li>Secret Clearance
</li>
    <li>Top Secret Clearance
</li>
    <li>Top Secret SCI Clearance
</li>
    <li>CI Polygraph
</li>
    <li>Full Scope Polygraph
</li>
</ul>
<br />


                    </div>
                </div>

                <div className='cop3 coptop'>
                    <button onClick={() => Cap3()} className='btttn-d'>
                        <ul className={showCap3 ? "pluscop active" : "pluscop"}>
                            <li className='grd-dv'><i class="fa-solid fa-plus icn-szs"></i></li>
                            <li className='grd-dv'><h4> Why Would We Hire Through Hi5 Consulting?</h4></li>
                        </ul>
                    </button>
                    <div className={showCap3 ? "contenxt active" : "contenxt unactive"}>
                        <br />
      <p>At Hi5 consulting, our goal is to make your hiring process easier for you. We make sure to connect businesses with individuals who would not only fit right into your company, but also help you unlock your company’s potential. Our pool of candidates consists of people who are highly skilled and multi-faceted.
</p>
<p>We want you to be fully satisfied with your hiring process and in doing so, we will collaborate with you to get you the best fit for your company.
</p>
                    </div>
                </div>

                <div className='cop4 coptop'>
                    <button onClick={() => Cap4()} className='btttn-d'>
                        <ul className={showCap4 ? "pluscop active" : "pluscop"}>
                            <li className='grd-dv'><i class="fa-solid fa-plus icn-szs"></i></li>
                            <li className='grd-dv'><h4> What Other Services Do You Offer?</h4></li>
                        </ul>
                    </button>
                    <div className={showCap4 ? "contenxt active" : "contenxt unactive"}>
                        <br />
        <p>Here is a list of our services: </p>
        <br />
        <ul className='uixxadd'>
            <li>Web Development and Designing
</li>
            <li>Social Media Marketing
</li>
            <li>Graphic Designing
</li>
            <li>Search Engine Optimization
</li>
        </ul>
        <br />
        <p>We are basically your one stop to taking your business to the next level!
</p>
                    </div>
                </div>

                <div className='cop5 coptop'>
                    <button onClick={() => Cap5()} className='btttn-d'>
                        <ul className={showCap5 ? "pluscop active" : "pluscop"}>
                            <li className='grd-dv'><i class="fa-solid fa-plus icn-szs"></i></li>
                            <li className='grd-dv'><h4> How Do We Connect?</h4></li>
                        </ul>
                    </button>
                    <div className={showCap5 ? "contenxt active" : "contenxt unactive"}>
                    <br />
                    Make an appointment with us! Visit our website’s Contact Us page and submit your details in order to start your journey with us.

<p>Make an appointment with us! Visit our website’s <Link to="contact">Contact Us</Link> page and submit your details in order to start your journey with us.
</p>
                    </div>
                </div>






            </div>



                {/* Footer Section Here */}
          <Footer></Footer>
        {/* Footer Section Here */}

        </div>
    );
}

export default Faqs;
