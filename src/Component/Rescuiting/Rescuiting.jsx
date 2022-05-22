import '../Industries/Industries.css'
import '../Industries/IndustriesMedia.css'
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Navbar from '../Navbar/Navbar';
import right from "../Images/right_arrow.png"
import AerospaceImage from "../Images/Aerospace.jpg"
import SystemEngineerImage from "../Images/Systems-Engineering-Administration-1.jpg"
import NetworkDesignArchImage from "../Images/Network-Design-Architecture.jpg"
import ProgrmmangeImage from "../Images/Program-and-Project-Management-1.jpg"
import InfoSysOffiImage from "../Images/Information-Systems-Security-Officer-Engineer.jpg"
import SoftwarewwImage from "../Images/Software-Engineer.jpg"
import SharePointImgae from "../Images/SharePoint-Developer-scaled.jpeg"
import PeoPleSoftImage from "../Images/PeopleSoft-Developer.jpg"
import DatabaseAdminsImage from "../Images/Database-Administrator.jpg"
import BigDataArchImage from "../Images/BigData-Architect.jpg"
import ITSpeciatImage from "../Images/IT-Specialist.jpg"





import WebDeve from "../Images/Web-Applications.jpg"
import CyberImage from "../Images/Cybersecurity.jpg"
import Softwaresdeve from "../Images/Softwares.jpg"
import MobApplicationszxc from "../Images/Mob-Applications.jpeg"
import Footer from '../Footer/Footer';
import PageBanner from '../../InnerSections/PageBanner';


export default function Rescuiting() {

  const [statemobile, setmobile] = useState(null);
  const [show, setShow] = useState();

  const [perone, peroneShow] = useState();
  const [pertow, pertowShow] = useState(true);
  const [perthree, perthreeShow] = useState();



  // SECTION DEVELOPMENT HERE 
  const [useCybersecuritywww, SetCybersecuritywww] = useState(true);
  const [useAerospacewww, SetAerospacewww] = useState();
  const [useSystemEngineerwww, SetSystemEngineerwww] = useState();

  const [useNetworkDAwww, SetNetworkDAwww] = useState();
  const [useProgramProjectMwww, SetProgramProjectMwww] = useState();
  const [useInfoSecurityofficer, SetInfoSecurityofficer] = useState();
  const [useSoftwareEngineerwww, SetSoftwareEngineerwww] = useState();
  const [useSharePointwww, SetSharePointwww] = useState();
  const [usePeopleDeveloperwww, SetPeopleDeveloperwww] = useState();
  const [useDatabaseAdministratorwww, SetDatabaseAdministratorwww] = useState();
  const [useBigDataArchitectwww, SetBigDataArchitectwww] = useState();
  const [useItSpeciatewww, SetItSpeciatewww] = useState();
  // SECTION DEVELOPMENT HERE 

  const Cybersecuritywww = () => {
    SetCybersecuritywww(true)
    SetAerospacewww(false)
    SetSystemEngineerwww(false)
    SetNetworkDAwww(false)
    SetProgramProjectMwww(false)
    SetInfoSecurityofficer(false)
    SetSoftwareEngineerwww(false)
    SetSharePointwww(false)
    SetPeopleDeveloperwww(false)
    SetDatabaseAdministratorwww(false)
    SetBigDataArchitectwww(false)
    SetItSpeciatewww(false)
  }

  const Aerospacewww = () => {
    SetAerospacewww(true)
    SetCybersecuritywww(false)
    SetSystemEngineerwww(false)
    SetNetworkDAwww(false)
    SetProgramProjectMwww(false)
    SetInfoSecurityofficer(false)
    SetSoftwareEngineerwww(false)
    SetSharePointwww(false)
    SetPeopleDeveloperwww(false)
    SetDatabaseAdministratorwww(false)
    SetBigDataArchitectwww(false)
    SetItSpeciatewww(false)
  }

  const SystemEngineerwww = () => {
    SetSystemEngineerwww(true)
    SetCybersecuritywww(false)
    SetAerospacewww(false)
    SetNetworkDAwww(false)
    SetProgramProjectMwww(false)
    SetInfoSecurityofficer(false)
    SetSoftwareEngineerwww(false)
    SetSharePointwww(false)
    SetPeopleDeveloperwww(false)
    SetDatabaseAdministratorwww(false)
    SetBigDataArchitectwww(false)
    SetItSpeciatewww(false)
  }

  const NetworkDAwww = () => {
    SetNetworkDAwww(true)
    SetCybersecuritywww(false)
    SetAerospacewww(false)
    SetSystemEngineerwww(false)
    SetProgramProjectMwww(false)
    SetInfoSecurityofficer(false)
    SetSoftwareEngineerwww(false)
    SetSharePointwww(false)
    SetPeopleDeveloperwww(false)
    SetDatabaseAdministratorwww(false)
    SetBigDataArchitectwww(false)
    SetItSpeciatewww(false)
  }

  const ProgramProjectMwww = () => {
    SetProgramProjectMwww(true)
    SetCybersecuritywww(false)
    SetAerospacewww(false)
    SetSystemEngineerwww(false)
    SetNetworkDAwww(false)
    SetInfoSecurityofficer(false)
    SetSoftwareEngineerwww(false)
    SetSharePointwww(false)
    SetPeopleDeveloperwww(false)
    SetDatabaseAdministratorwww(false)
    SetBigDataArchitectwww(false)
    SetItSpeciatewww(false)
  }

  const InfoSecurityofficer = () => {
    SetInfoSecurityofficer(true)
    SetCybersecuritywww(false)
    SetAerospacewww(false)
    SetSystemEngineerwww(false)
    SetNetworkDAwww(false)
    SetProgramProjectMwww(false)
    SetSoftwareEngineerwww(false)
    SetSharePointwww(false)
    SetPeopleDeveloperwww(false)
    SetDatabaseAdministratorwww(false)
    SetBigDataArchitectwww(false)
    SetItSpeciatewww(false)
  }

  const SoftwareEngineerwww = () => {
    SetSoftwareEngineerwww(true)
    SetCybersecuritywww(false)
    SetAerospacewww(false)
    SetSystemEngineerwww(false)
    SetNetworkDAwww(false)
    SetProgramProjectMwww(false)
    SetInfoSecurityofficer(false)
    SetSharePointwww(false)
    SetPeopleDeveloperwww(false)
    SetDatabaseAdministratorwww(false)
    SetBigDataArchitectwww(false)
    SetItSpeciatewww(false)
  }

  const SharePointwww = () => {
    SetSharePointwww(true)
    SetCybersecuritywww(false)
    SetAerospacewww(false)
    SetSystemEngineerwww(false)
    SetNetworkDAwww(false)
    SetProgramProjectMwww(false)
    SetInfoSecurityofficer(false)
    SetSoftwareEngineerwww(false)
    SetPeopleDeveloperwww(false)
    SetDatabaseAdministratorwww(false)
    SetBigDataArchitectwww(false)
    SetItSpeciatewww(false)
  }

  const PeopleDeveloperwww = () => {
    SetPeopleDeveloperwww(true)
    SetCybersecuritywww(false)
    SetAerospacewww(false)
    SetSystemEngineerwww(false)
    SetNetworkDAwww(false)
    SetProgramProjectMwww(false)
    SetInfoSecurityofficer(false)
    SetSoftwareEngineerwww(false)
    SetSharePointwww(false)
    SetDatabaseAdministratorwww(false)
    SetBigDataArchitectwww(false)
    SetItSpeciatewww(false)
  }

  const DatabaseAdministratorwww = () => {
    SetDatabaseAdministratorwww(true)
    SetCybersecuritywww(false)
    SetAerospacewww(false)
    SetSystemEngineerwww(false)
    SetNetworkDAwww(false)
    SetProgramProjectMwww(false)
    SetInfoSecurityofficer(false)
    SetSoftwareEngineerwww(false)
    SetSharePointwww(false)
    SetPeopleDeveloperwww(false)
    SetBigDataArchitectwww(false)
    SetItSpeciatewww(false)
  }

  const BigDataArchitectwww = () => {
    SetBigDataArchitectwww(true)
    SetCybersecuritywww(false)
    SetAerospacewww(false)
    SetSystemEngineerwww(false)
    SetNetworkDAwww(false)
    SetProgramProjectMwww(false)
    SetInfoSecurityofficer(false)
    SetSoftwareEngineerwww(false)
    SetSharePointwww(false)
    SetPeopleDeveloperwww(false)
    SetDatabaseAdministratorwww(false)
    SetItSpeciatewww(false)
  }

  const ItSpeciatewww = () => {
    SetItSpeciatewww(true)
    SetCybersecuritywww(false)
    SetAerospacewww(false)
    SetSystemEngineerwww(false)
    SetNetworkDAwww(false)
    SetProgramProjectMwww(false)
    SetInfoSecurityofficer(false)
    SetSoftwareEngineerwww(false)
    SetSharePointwww(false)
    SetPeopleDeveloperwww(false)
    SetDatabaseAdministratorwww(false)
    SetBigDataArchitectwww(false)
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

      <PageBanner PageTitile={'Rescruiting'} PageDes={'Our Team Moves Faster, Keeping you Current on Whats Hot'} PageName={'TEMPORARY STAFFING'} ></PageBanner>
      {/* Top section Banner Here */}









      {/* Service Details Section Here */}
      <section className="service-details">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="service-details-content">
                <div className="content-one">


                  {useCybersecuritywww ?
                    <div className='development'>
                      <div className="sec-title">
                        <span className="top-title">Recruiting for</span>
                        <h2>Cyber Security:</h2>
                      </div>
                      <figure className="image-box"><img className='induximage' src={CyberImage} alt="Awesome Image" /></figure>
                      <div className="text">
                        <div>
                          <p>Like any company, when dealing with clients and their businesses, 
                            you want to ensure that you have a solid and secure cyber network. It
                             is necessary to have that in place for you and your client’s peace of
                              mind, especially when you are dealing with information that they have
                               shared with you in confidence.</p><p>With the pandemic happening and
                                  businesses operating online on a large scale, it is imperative 
                                  now more than ever, to ensure cyber security. In order to have 
                                  the necessary protocols in place to ensure your clients that 
                                  their business is in safe and capable hands, you need to have
                                   individuals capable of handling any and all bases of the cyber 
                                   security.</p><p>A lot of areas come in to play when we are 
                                     dealing with cyber security. There are five distinct types
                                      of cyber security, these include:</p><ul className='uixxadd' style={{color:"black", }}><li>Critical Infrastructure Security</li><li>Network Security</li><li>Cloud Security</li><li>Application Security</li><li>Internet of Things Security</li></ul><br /><p>How Do We Help?</p><p>By supporting and taking care of your recruitment hassle! To make things easier for you, we make sure you have the right candidate for your needs. Our candidates have multiple skills and come from a variety of specialized fields. Our candidates and their roles include:</p><ol className='uixxadd'><li>Information Security Analyst: Our candidates are specialized in designing and installing IT security systems that will protect your business’ computer networks from any potential cyber-attacks and make sure that your security software is up to date.</li><li>Information Assurance: This role requires individuals that are well read in terms of protective measures for information systems- and in the case of a cyber-attack, there is also a defensive system that protects your information from infiltration.</li><li>System Security IA Specialist: The role of this specialist is to ensure that the company’s information remains secured while being accessible to its employees, while being in control of what actually can be accessed. This is to monitor sensitive information that a business would want to protect and secure.</li></ol><p>In order to keep all of these areas in check, it is important to hire people who are skilled and have an expertise in this multi-faceted job.</p><p>At Hi5 consulting, with our candidates, we ensure that businesses are connected with individuals that would best suit their requirements. We have a large pool of candidates that are well equipped to fulfill any of the roles that you might require. As the technological world advances, we think it is important to have individuals on your team that are able to keep your security up to date accordingly. We believe that every business requires a different level of expertise – which is why our candidates are handpicked from a pool of thousands to fit right into your space.</p>						</div>


                      </div>
                    </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }


                  {useAerospacewww ?
                     <div className='development'>
                     <div className="sec-title">
                       <span className="top-title">Recruiting for</span>
                       <h2>Aerospace</h2>
                     </div>
                     <figure className="image-box"><img className='induximage' src={AerospaceImage} alt="Awesome Image" /></figure>
                     <div className="text">
                    <p>As the aviation industry continues to progress, it is necessary to keep up. As businesses continue to work towards a more sustainable and diverse future, it is important to foresee any new challenges that might arrive.</p>
                    <p>Our goal is to connect businesses with individuals that will not only help in making improvements to keep up with the current trends in technology, but also collaborate with your business to seek out potential opportunities and utilize your company’s hidden capabilities in order to build up your business.</p>
                    <p>How We Help:</p>
                    <p>We believe that in this new age, businesses must innovate and evolve constantly in order to meet the new challenges while being sustainable and having the right strategies in place to protect their future. Which is why we make sure our candidates are multi-faceted and versatile.</p>
                    <p>Every company requires a specific set of talent and skills, and for that we have a variety of candidates from which we handpick the one who would meet your requirements and more. In order to unlock your company’s potential; our approach is to connect you with experts who will bring in the essential tools and expertise to push boundaries like never before. </p>
                    <p>Our excellent pool of candidates contains a network of specialized individuals who will be working with you to not only improve what you have but also, create strategies that will enable your company to build and grow to bigger heights and make your company evolve with the new generation technological advancements.</p>
                     </div>
                   </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }

                  {useSystemEngineerwww ?
                     <div className='development'>
                     <div className="sec-title">
                       <span className="top-title">Recruiting for</span>
                       <h2>Systems Engineering And Administration</h2>
                     </div>
                     <figure className="image-box"><img className='induximage' src={SystemEngineerImage} alt="Awesome Image" /></figure>
                     <div className="text">
                       <p>In any business, the role of the system engineer or administrator is the most crucial of them all. System engineers manage to create and implement crucial systems and networks for your business while a system administrator manages these implemented systems so they run smoothly.</p>
                       <p>The work of a system engineer or administrator requires an individual that not only has the right technical skills, but also management skills, the ability to utilize tools, and implement policies, while working with the evolving technology.</p>
                       <p>This is a crucial position in any business and to make sure your company finds the right fit for these roles, we have a variety of individuals whose expertise falls right under this umbrella.</p>
                       <p>Our large number of candidates that are available for this job includes a network of capable and efficient individuals. These candidates are unparalleled in terms of skills and capabilities as they are evaluated at every step to make sure they fit right into your company. We provide you with individuals who are skilled in a variety of areas so you do not have to look too far to find the best system engineer or/and administrator!</p>
                     </div>
                   </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }

                  {useNetworkDAwww ?
                 <div className='development'>
                 <div className="sec-title">
                   <span className="top-title">Recruiting for</span>
                   <h2>Network Design and Architecture</h2>
                 </div>
                 <figure className="image-box"><img className='induximage' src={NetworkDesignArchImage} alt="Awesome Image" /></figure>
                 <div className="text">
                  <p>In order to have a well working company, you want to make sure your network design and architecture has a proper implemented system that covers all the bases.</p>
                <p>In creating a network design, there is a lot that goes into it. A network designer would need to assemble all of the endpoints, users, devices, LANS, and all the other relevant assets that will be contributing to the network. All of this information is gathered and a comprehensive working network is created which then connects the entire business. This network design can further evolve as other sectors of a business collaborate and integrate.</p>
                <p>On the other hand, the modern network architecture consists of two components which include: Intent-based networking (IBN) and Controller-led design. These are both great network architectures and every business can collaborate with network architectures to understand which one would work best for them.</p>
                <p>For these two roles, our aim is to connect businesses with individuals who have experience, skills, and the ability to work with the ever evolving technological world.</p>
                <p>Here at Hi5 consulting, our huge pool of candidates consists of individuals handpicked to make sure that they meet you where you want them to be. Not only are these candidates efficient and capable, they are also able to strategize and work with you to implement the right design and architecture that best fits your business.</p>
                
                 </div>
               </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }

                  {useProgramProjectMwww ?
                    <div className='development'>
                    <div className="sec-title">
                      <span className="top-title">Recruiting for</span>
                      <h2>Program and Project Management
</h2>
                    </div>
                    <figure className="image-box"><img className='induximage' src={ProgrmmangeImage} alt="Awesome Image" /></figure>
                    <div className="text">
                     <p>When leading a successful business, you always need a good program and project management team. It is not easy to find people who are capable of handling this complex role.
</p>
<p>For this role, you need to hire people who have the right management skills as well as capabilities to strategize and implement new ideas and plans. This is the key to any business’ success to create and achieve newer and ever evolving goals to continue to grow as the world progresses.
</p>
<p>So How Do We Help?
</p>
<p>To make it easier for you and save you from the hassle of searching for the right fit, hi5 consulting does it for you! Our variety of candidates is filled with exceptional individuals that will make your business unlock its potential.
</p>
<p>For this role, we make sure our candidates have the drive to plan and create strategies for new programs but also have the right technical skills to actually implement them and manage the projects. 
</p>
<p>So, trust us to find your next hire as we make sure that you have the right fit.
</p>
                    </div>
                  </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }

                  {useInfoSecurityofficer ?
                    <div className='development'>
                    <div className="sec-title">
                      <span className="top-title">Recruiting for</span>
                      <h2>Information Systems Security Officer/Engineer
</h2>
                    </div>
                    <figure className="image-box"><img className='induximage' src={InfoSysOffiImage} alt="Awesome Image" /></figure>
                    <div className="text">
                   <p>In any business, information system security officers or engineers fulfill a technical role. They have the most important position of making sure that all sensitive information of a company is kept in check and secure.
</p>
<p>To make sure that your business’ information is safe including their client’s important info, you need to make sure you have a team of experts that know what they are doing.
</p>
<p>An information systems security engineer’s job is to create security systems and foresee any potential threats to the system. They also need to figure out ways they can defend or deal with threats and if there are any vulnerabilities, they can work on them to create a more secure system and as an information systems security officer’s job is to make sure all the security protocols are implemented and they protect against any cyber-attacks that might occur in an organization.
</p>
<p>How Can We Help?
</p>
<p>This particular role in a company is a very crucial position in any company. It is necessary to hire an individual that is able to strategize and manage the highly technical system in order to keep your business’ information safe and secure.
</p>
<p>In order to make sure you have the right hire, we connect you with candidates that are highly efficient and capable. We save you from the hassle of going through hundreds of individuals, when you can just get the perfect candidate.
</p>
                    </div>
                  </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }

                  {useSoftwareEngineerwww ?
                   <div className='development'>
                   <div className="sec-title">
                     <span className="top-title">Recruiting for</span>
                     <h2>Software Engineer
</h2>
                   </div>
                   <figure className="image-box"><img className='induximage' src={SoftwarewwImage} alt="Awesome Image" /></figure>
                   <div className="text">
                    <p>In a business, you need software engineers to develop and create software that is supposed to work especially for your company. The software engineers are experts in programming language and are proper software architects.
</p>
<p>The software engineers’ work includes:
</p>

<ul className='uixxadd'>
  <li>Optimizing and designing software systems.
</li>
  <li>Managing and maintaining software programs.
</li>
  <li>Writing specific codes using programming language.
</li>
  <li>Collaborating with clients and other specialists to figure out what works for your business.
</li>
</ul>
<br />
<p>This in particular requires an individual that has specialized in software engineering and has continued to keep up with current technological advancements. As the technological world evolves, there are many so many more things to be aware of. In this case, you need a hire that has kept up with current trends.This is especially important as technological advancements occur, there is also the need to create software that is up to date and secure.
</p>

<p>At Hi5 Consulting, we help you find the perfect fit! Our pool of candidates is filled with highly qualified and capable individuals that would be the perfect for this role. Our recruitment services are unparalleled as we handpick our candidates to make sure that they are incredibly efficient and experts in their field.
</p>
                   </div>
                 </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }

                  {useSharePointwww ?
                   <div className='development'>
                   <div className="sec-title">
                     <span className="top-title">Recruiting for</span>
                     <h2>SharePoint Developer
</h2>
                   </div>
                   <figure className="image-box"><img className='induximage' src={SharePointImgae} alt="Awesome Image" /></figure>
                   <div className="text">
                 <p>SharePoint developers have a very complex and specific set of skills. Their skills are used to create portals, management systems, helpdesk systems, ticketing systems, and more according to what the business requires.
</p>
<p>Some of the skills that a SharePoint Developers have include having expertise in programming languages and the skills to work with UI/UX design processes. Besides these technical skills; communication, management, and collaborative skills are also much needed in order to be a successful SharePoint Developer.
</p>
<p>Finding the right fit for this role can be really hard. Especially since this role requires a proficient and capable candidate that can actually fulfill these duties.
</p>
<p>Our main focus is to save you from the hassle of looking for your next hire. At Hi5 Consulting, we look for the best of the best and provide you with our best candidate that would not only have all of these skills, but would also fit right into your company’s culture.
</p>
<p>It is our goal to make sure our candidates help your company in reaching its potential and reach newer heights. We make sure our candidates are exactly what you need in order for your business to thrive.
</p>
                   </div>
                 </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }

                  {usePeopleDeveloperwww ?
                    <div className='development'>
                    <div className="sec-title">
                      <span className="top-title">Recruiting for</span>
                      <h2>PeoPleSoftImage</h2>
                    </div>
                    <figure className="image-box"><img className='induximage' src={PeoPleSoftImage} alt="Awesome Image" /></figure>
                    <div className="text">
              <p>PeopleSoft software is one of the most integral software in the market today. As it is an essential tool for business to run day to day operations, seamlessly working with individual applications to manage different areas of  a business, including: Human Resources, Finance, Customer Service.</p>
                <p>It enables businesses to execute their daily goals and operations as it is integrated with multiple business applications! This can be an incredible tool for businesses who want to take their day to day work to the next level.
</p>
<p>As businesses evolve to accommodate the ever growing technical world, it is necessary to have a team of employees that will grow with you.
</p>
<p>At Hi5 consulting, we want to connect you with individuals that are not only capable of the technical skills necessary to work with this software, that includes coding and programming, but also know how to implement these skills to your business accordingly.  
</p>
<p>Every company has their own set of requirements, whether it be the skills required or the role’s demands; we make it easy for you to find the perfect hire!
</p>
<p>We have a diverse range of candidates that is guaranteed to meet your requirements and more! Our goal is to facilitate your hiring process in such a way that you find your next hire quickly, efficiently- while being confident that you are indeed making the right decision that will take your company to new heights
</p>
                
                
                
                
                
                
                
                    </div>
                  </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }

                  {useDatabaseAdministratorwww ?
                    <div className='development'>
                    <div className="sec-title">
                      <span className="top-title">Recruiting for</span>
                      <h2>Data Administrator</h2>
                    </div>
                    <figure className="image-box"><img className='induximage' src={DatabaseAdminsImage} alt="Awesome Image" /></figure>
                    <div className="text">
                      <p>For the role of a database administrator, it is necessary to hire someone capable, efficient, and responsible.
</p>
<p>A data administrator can be a great addition to your team that will help you manage your data to make sure it is accurate, and secure. This will also ensure that your data is backed up and in a case of emergency, can be recovered.
</p>
<p>This role can have variations that include:
</p>
<ul className='uixxadd'>
  <li>System Data Administrator: This job focuses on installing, configuring, or upgrading your database software to make your company’s data system works efficiently.
</li>
  <li>Task-Oriented Data Administrator: This job requires the administrator to focus on specific areas of data and work on them. This might be things like data recovery or security related.
</li>
  <li>Application Data Administrator: This job is focused on making sure your data is integrated into applications and working seamlessly.
</li>
</ul>
<br />
<p>Every business has their database requirements and demands. For you, there may or may not be a specific area where you need a database administrator to manage. Whatever the case for your company, at Hi5 Consulting- we make sure you get to hire exactly what your business needs!
</p>
<p>We take away the hassle and stress of hiring and instead, recruit for you the perfect fit that works for your company specifically! With the right skills set, the level of expertise, and capabilities- our candidates are perfectly suitable for your company.
</p>
                    </div>
                  </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }

                  {useBigDataArchitectwww ?
                     <div className='development'>
                     <div className="sec-title">
                       <span className="top-title">Recruiting for</span>
                       <h2>BigData Architect</h2>
                     </div>
                     <figure className="image-box"><img className='induximage' src={BigDataArchImage} alt="Awesome Image" /></figure>
                     <div className="text">
                    
							<p>If you are looking to set up your business in a way that is unparalleled in the market, you want to make sure you hire the best BigData Architect you can find and quickly.</p><p>This role has become an integral part of businesses that are keeping up with the latest trends in technology and upgrading their business models accordingly.</p><p>As a business, you want to hire a BigData Architect in order to strategize and design data architecture specific to what your company’s requirements are and its unique needs.</p><p>We recognize that this is essentially a job for responsible, proficient, and highly skilled people who can communicate and collaborate with your business to create a design that fits your company.</p><p>At Hi5 Consulting, our aim is to help you hire the most efficient and capable individual that will help you refine and develop new data policies, while conceptualizing a better data infrastructure.</p><p>We have made hiring easier for people across the world, no matter how specific the role- our goal is to find you the perfect hire.</p>						 
                     </div>
                   </div>
                    :
                    <h1 style={{ display: 'none' }}>Dont response</h1>
                  }

                  {useItSpeciatewww ?
                     <div className='development'>
                     <div className="sec-title">
                       <span className="top-title">Recruiting for</span>
                       <h2>IT Specialist
</h2>
                     </div>
                     <figure className="image-box"><img className='induximage' src={ITSpeciatImage} alt="Awesome Image" /></figure>
                     <div className="text">
                     
							<p>The backbone of any business includes its IT department. It is not only there to provide you with day to day solutions, but it also maintains the internal infrastructure of your business.</p><p>An IT department is responsible for a lot of things like, taking care of servers, email systems, computers, hardware that are part of the company’s everyday use. Also, making any improvements to your systems or defending any potential risks that your company’s technology might face is also a key part.</p><p>For this role, it is necessary to hire an individual who possesses the critical thinking skills to maintain essential IT operations every day.</p><p>At Hi5 Consulting, we find you the right hire by collaborating and communicating with your company to meet your demands. We save you from the stress of uncertainty and connect you with a candidate that we know would work best for your business to help reach its potential.</p>					 
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
                      <li onClick={() => Cybersecuritywww()}><a className={useCybersecuritywww ? "active" : "unactive"} >Cybersecurity</a></li>
                      <li onClick={() => Aerospacewww()} ><a className={useAerospacewww ? "active" : "unactive"}>Aerospace</a></li>
                      <li onClick={() => SystemEngineerwww()}><a className={useSystemEngineerwww ? "active" : "unactive"}>Systems Engineering & Administration</a></li>
                      <li onClick={() => NetworkDAwww()}><a className={useNetworkDAwww ? "active" : "unactive"}> Network Design & Architecture </a></li>
                      <li onClick={() => ProgramProjectMwww()}><a className={useProgramProjectMwww ? "active" : "unactive"}> Program & Project Management </a></li>
                      <li onClick={() => InfoSecurityofficer()}><a className={useInfoSecurityofficer ? "active" : "unactive"}> Information Sytems Security Officer/Engineer </a></li>
                      <li onClick={() => SoftwareEngineerwww()}><a className={useSoftwareEngineerwww ? "active" : "unactive"}> Software Engineer </a></li>
                      <li onClick={() => SharePointwww()}><a className={useSharePointwww ? "active" : "unactive"}> SharePoint Developer  </a></li>
                      <li onClick={() => PeopleDeveloperwww()}><a className={usePeopleDeveloperwww ? "active" : "unactive"}> PeopleSoft Developer </a></li>
                      <li onClick={() => DatabaseAdministratorwww()}><a className={useDatabaseAdministratorwww ? "active" : "unactive"}> Database Administrator </a></li>
                      <li onClick={() => BigDataArchitectwww()}><a className={useBigDataArchitectwww ? "active" : "unactive"}> BigData Architect </a></li>
                      <li onClick={() => ItSpeciatewww()}><a className={useItSpeciatewww ? "active" : "unactive"}> IT Specialist </a></li>
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
                <div className="owl-item active" style={{ width: 370, marginRight: 30 }}><div className="project-block-two">
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
              <div className='col-sm-12 client_col2'>
                <div className="owl-item active" style={{ width: 370, marginRight: 30 }}><div className="project-block-two">
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
              <div className='col-sm-12 client_col3'>
                <div className="owl-item active" style={{ width: 370, marginRight: 30 }}><div className="project-block-two">
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

              <div className='col-sm-12 client_col4'>
                <div className="owl-item active" style={{ width: 370, marginRight: 30 }}><div className="project-block-two">
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
