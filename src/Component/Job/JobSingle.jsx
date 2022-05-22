import { useState, useEffect } from 'react';
import PageBanner from '../../InnerSections/PageBanner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./JobSingle.css";
import "./Job.css";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Jobsingle = () => {

  const [citySet, statecity] = useState();
  const [Setcountry, statecountry] = useState();
  const [Setdescription, statedescription] = useState();
  const [Setjob, statejob] = useState();
  const [Setjob_type, statejob_type] = useState();
  const [Setmin, statemin] = useState();
  const [Setmix, statemix] = useState();
  const [Setname, statename] = useState();
  const [Setper, stateper] = useState();
  const [putidr, setid] = useState();

      const param = useParams();
      const idprm = param.id
      
      useEffect(() => {

        fetch(`https://hi5.thedatech.com/api/job/${idprm}`)
        .then((response) => response.json())
        .then((json) => {
          setid(json.id);
          statecity(json.city);
          statecountry(json.country);
          statedescription(json.description);
          statejob(json.job);
          statejob_type(json.job_type);
          statemin(json.min);
          statemix(json.mix);
          statename(json.name);
          stateper(json.per);

       console.log(json);
  
        });

            console.log(param.id);
      }, []);

    return (
        <div>
            <Navbar></Navbar>

                {/* Top section Banner Here */}
    <PageBanner  PageTitile={'Software Engineer'} PageDes={'Our Team Moves Faster, Keeping you Current on Whats Hot'} PageName={'Software Engineer'} ></PageBanner>
            {/* Top section Banner Here */}


                    {/* Singlejob Section Here */}
                   <section className="job-details">
  <div className="auto-container">
    <div className="row clearfix">
      <div className="col-lg-8 col-md-12 col-sm-12 content-side">
        <div className="job-details-content">
          <div className="upper-box">
            <div className="inner-box">
              <figure className="company-logo"><img width={50} height={33} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/12/logo-3.png" className="attachment-full size-full wp-post-image" alt loading="lazy" /></figure>
              <div className="inner">
                <span>{Setjob} to Hire</span>
                <h3>{Setname}</h3>
                <p><i className="flaticon-place" />{citySet}, {Setcountry}</p>
                <p><i className="flaticon-place" />{Setjob_type} </p>
              </div>
              <ul className="info clearfix">
                <li>
                  <span>Save this job</span>
                  <a href="#"><i className="flaticon-bookmark" /></a>
                </li>
                <li>
                  <span>Upload File</span>
                  <a href="#"><i className="flaticon-cloud-computing" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text">
            <h2>Job Description</h2>
           <p>{Setdescription}</p>
            {/* <h3>Responsibilities</h3>
            <ul className="list clearfix">
              <li>Our power of choice is untrammelled and when nothing prevents.</li>
              <li>Frequently occur that pleasures have to be repudiated and annoyances accepted.</li>
              <li>The wise man therefore always holds in these matters.</li>
              <li>Rejects pleasures to secure other greater pleasures, or else he endures.</li>
            </ul>
            <h3>Requirements</h3>
            <ul className="list clearfix">
              <li><span>Age</span>: &nbsp;28+</li>
              <li><span>Pronoun</span>: &nbsp;Male / Female</li>
              <li><span>Education</span>: &nbsp;Bachelor’s Degree in Related Field</li>
              <li><span>Experience</span>: &nbsp;1-3 Yrs of Human Resources Leadership</li>
              <li><span>Skills</span>: &nbsp;Something Related this Job</li>
            </ul> */}
          </div>
          <div className="social-box">
            <ul className="social-links clearfix">
              <li><a className="facebook" href="http://www.facebook.com/sharer.php?u=http://www.el.commonsupport.com/newwp/eazyrecruitz/eazyrecruitz_jobs/software-engineer/" target="_blank"><i className="fab fa-facebook-f" />Facebook</a></li>
              <li><a className="twitter" href="https://twitter.com/share?url=http://www.el.commonsupport.com/newwp/eazyrecruitz/eazyrecruitz_jobs/software-engineer/&text=software-engineer" target="_blank"><i className="fab fa-twitter" />Twiter</a></li>
              <li><a className="linkedin" href="http://www.linkedin.com/shareArticle?url=http://www.el.commonsupport.com/newwp/eazyrecruitz/eazyrecruitz_jobs/software-engineer/&title=software-engineer"><i className="fab fa-linkedin" />Linkedin</a></li>
              <li><a className="pinterest" href="https://pinterest.com/pin/create/bookmarklet/?url=http://www.el.commonsupport.com/newwp/eazyrecruitz/eazyrecruitz_jobs/software-engineer/&description=software-engineer"><i className="fab fa-pinterest" />Pinterest</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
        <div className="job-sidebar">
          <div className="sidebar-widget job-discription">
            <ul className="list">
              <li>
                <span>Job Number</span>
                <p>2021ER</p>
              </li>
              <li>
                <span>Location</span>
                <p>{citySet}, {Setcountry}</p>
              </li>
              <li>
                <span>Website</span>
                <p><a href="https://hi5-consulting.com/">https://hi5-consulting.com/</a></p>
              </li>
              <li>
                <span>Salary</span>
                <p>${Setmin} - ${Setmix} {Setper} </p>
              </li>
              <li>
                <span>EXPERIENCE NEED</span>
                <p>3-5 Yrs</p>
              </li>
              <li>
                <span>Apply on or Before</span>
                <p>28th June, 2020</p>
              </li>
              <li>
              <Link to={`${putidr}`}  >Apply</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>

      
      
      {/* <div className="col-lg-12 col-md-12 col-sm-12 column">
        <div className="related-job">
          <h2>Related Jobs</h2>
          <div className="single-job-post">
            <div className="job-header clearfix">
              <ul className="info pull-left">
                <li className="cat">Contract to Hire</li>
                <li><i className="flaticon-clock" />Posted 1 year ago</li>
              </ul>
              <div className="number pull-right"><p>Job Num: 2017ER</p></div>
            </div>
            <div className="job-inner clearfix">
              <div className="job-title">
                <figure className="company-logo"><img width={50} height={33} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/12/logo-3.png" className="attachment-full size-full wp-post-image" alt loading="lazy" /></figure>
                <h3>Software Engineer</h3>
                <p><i className="flaticon-place" />San Fransisco, California</p>
              </div>
              <div className="salary-box">
                <span>Salary</span>
                <p>$85,000 - $90,000 Per Year</p>
              </div>
              <div className="experience-box">
                <span>Experience Need</span>
                <p>3-5 Yrs</p>
              </div>
              <div className="apply-btn">
                <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/eazyrecruitz_jobs/software-engineer-2/">Apply</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>

                    {/* Singlejob Section Here */}






            <Footer></Footer>
        </div>
    );
}

export default Jobsingle;
