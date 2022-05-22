import React from 'react'
import PageBanner from '../../InnerSections/PageBanner'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { useState, useEffect } from 'react';
import "./Job.css"
import { Link } from 'react-router-dom';

export default function Job() {
  
    const [jobsSet, setstate] = useState();

    useEffect(() => {
     fetch('https://hi5.thedatech.com/api/job')
      .then((response) => response.json())
      .then((json) => {
        setstate(json);
     console.log(json);

      });
    },[])
  return (
    <div>

        {/* Header Here */}
        <Navbar></Navbar>
      
          {/* Top section Banner Here */}
    <PageBanner  PageTitile={'Job Openings'} PageDes={'Our Team Moves Faster, Keeping you Current on Whats Hot'} PageName={'Job Openings'} ></PageBanner>
            {/* Top section Banner Here */}

            {/* Find job section here */}
            <section className="findjob-section">
  <div className="auto-container">
   
  <div className="sec-title centred">
       <div className="users">
       <div className="users">
    </div>
    </div>
      <span className="top-title">RECENTLY POSTED JOBS</span>
      <h2>Find Your Job You Deserve It</h2>
      <p>Long established fact that a reader will be distracted by the <br />readable content of a page.</p> 
    </div>
 
   
    <div className="post-jobs">

    {jobsSet
        ? jobsSet.map(item => {
            return <div key={item.id}>          
            <div className="single-job-post">
        <div className="job-header clearfix">
          <ul className="info pull-left">
            <li className="cat">{item.job} to Hire</li>
            <li><i style={{color:"black"}} class="fa-solid fa-clock"></i>Posted 1 year ago</li>
          </ul>
          <div className="number pull-right"><p>Job Num: 2017ER</p></div>
        </div>
        <div className="job-inner clearfix">
          <div className="job-title">
            <figure className="company-logo"><img width={50} height={33} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/12/logo-3.png" className="attachment-full size-full wp-post-image" alt loading="lazy" /></figure>
            <h3>{item.name}</h3>
            <p><i class="fa-solid fa-location-dot"></i>{item.city}, {item.country}</p>
            <p><i class="fa-solid fa-calendar-days"></i>{item.job_type}</p>
          </div>
          
          <div className="salary-box">
            <span>Salary</span>
            <p>${item.min} - ${item.mix} {item.per}</p>
          </div>
          <div className="experience-box">
            <span>Experience Need</span>
            <p>3-5 Yrs</p>
          </div>
          <div className="apply-btn">
            <Link to={`${item.id}`}  >Apply</Link>
          </div>
        </div>
      </div>
            </div> ;
          })
        :      <div id='loader'>
        <div class="loader"></div>
        </div>}


     


    </div>
  </div>
</section>
            {/* Find job section here */}


            {/* hiring-section */}
            <section className="hiring-section mb-5">
  <div className="image-layer">
    <figure className="image-1"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/hiring-1.png" alt="Awesome Image" /></figure>
    <figure className="image-2"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/hiring-2.png" alt="Awesome Image" /></figure>
  </div>
  <div className="outer-container clearfix">
    <div className="left-column pull-left clearfix">
      <div className="inner-box pull-right">
        <div className="icon-box"><i className="icon flaticon-factory" /></div>
        <h2>Industries Hiring</h2>
        <p>Find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.</p>
        <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/direct-hire/">Industries</a>
      </div>
    </div>
    <div className="right-column pull-right clearfix">
      <div className="inner-box pull-left">
        <div className="icon-box"><i className="icon flaticon-working-man" /></div>
        <h2>Professions Hiring</h2>
        <p>Chooses to enjoy a pleasure that has no annoying one who avoids a pain that produces.</p>
        <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/contract-to-hire/">Professions</a>
      </div>
    </div>
  </div>
</section>

            {/* hiring-section */}


          




<Footer></Footer>

    </div>
  )
}
