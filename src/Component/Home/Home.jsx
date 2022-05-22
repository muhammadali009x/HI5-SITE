import React from 'react'
import "./Home.css"
import "./HomeMedia.css"
import Slider from "react-slick";
import Sliderxx from '../slider/Slider';
import Fade from 'react-reveal/Fade';
import Navbar from '../Navbar/Navbar'
import img1 from "../Images/img1.png"
import img2 from "../Images/img2.png"
import icon1 from "../Images/icon1.png"
import icon2 from "../Images/icon2.png"
import icon3 from "../Images/icon3.png"
import icon4 from "../Images/icon4.png"
import icon5 from "../Images/icon-5.png"
import staff from "../Images/pic1.jpg"
import sign from "../Images/sign.png"
import daniel from "../Images/daniel.png"
import { useState, useEffect } from 'react';
import card1 from "../Images/card1.jpg"
import card2 from "../Images/card2.png"
import card3 from "../Images/card3.jpg"
import card4 from "../Images/card4.jpg"
import card5 from "../Images/card5.jpg"
import card6 from "../Images/card6.jpg"
import sec1 from "../Images/sec1.png"
import sec2 from "../Images/sec2.png"
import sec3 from "../Images/sec3.png"
import item1 from "../Images/item1.png"
import item2 from "../Images/item2.png"
import item3 from "../Images/item3.png"
import item4 from "../Images/item4.png"
import item5 from "../Images/item5.png"
import item6 from "../Images/item6.png"
import team1 from "../Images/team1.jpg"
import team2 from "../Images/team2.jpg"
import team3 from "../Images/team3.jpg"
import news1 from "../Images/news-1.jpg"
import news2 from "../Images/news-2.jpg"
import news3 from "../Images/news-3.jpg"
import client1 from "../Images/client1.png"
import client2 from "../Images/client2.png"
import Footer from '../Footer/Footer';
import Ourteam from '../../InnerSections/OurTeam';
import Awardsmajor from '../../InnerSections/AwardsMajor';
import InspriImage from  "../Images/homesec1.jpg"
import bg1 from "../Images/10.png"
import bg2 from "../Images/11.png"
import bg3 from "../Images/12.png"
export default function Home() {
  const [change, setchange] = useState(false)
  const [statemobile, setmobile] = useState(null);
  const [statemobiletwo, setmobiletwo] = useState(null);

 
  // MAIN IMAGE SCROLL HERE START
let constrain = 300;
let ex1Layer = document.getElementById("ex1-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

 function onmousemovexxx  (e)  {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer, position);
  });
};
// MAIN IMAGE SCROLL HERE END

 // MAIN IMAGE SCROLL HERE START
 let constrainOP = 300;
 let ex1LayerOP = document.getElementById("ex1-layer2");
 
 function transforms(x, y, el) {
   let boxOP = el.getBoundingClientRect();
   let calcXOP = -(y - boxOP.y - (boxOP.height / 2)) / constrainOP;
   let calcYOP = (x - boxOP.x - (boxOP.width / 2)) / constrainOP;
   
   return "perspective(100px) "
     + "   rotateX("+ calcXOP +"deg) "
     + "   rotateY("+ calcYOP +"deg) ";
 };
 
  function transformElement(el, xyEl) {
   el.style.transform  = transforms.apply(null, xyEl);
 }
 
  function onmousemovexxxOP  (e)  {
   let xyOP = [e.clientX, e.clientY];
   let positionOP = xyOP.concat([ex1LayerOP]);
 
   window.requestAnimationFrame(function(){
     transformElement(ex1LayerOP, positionOP);
   });
 };
// MAIN IMAGE SCROLL HERE END








  useEffect(() => {

    if (window.matchMedia("(max-width: 480px)").matches) {
      
      setmobile(1);
  
  
    } else {
       
      setmobile(3);
    }


    if (window.matchMedia("(max-width: 480px)").matches) {
      
      setmobiletwo(1);
  
  
    } else {
       
      setmobiletwo(2);
    }
  
  }, []);

  const mobilesettings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: statemobile,
    slidesToScroll: 1,
    autoplaySpeed: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  

  const mobilesettings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: statemobiletwo,
    slidesToScroll: 1,
    autoplaySpeed: 10,
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
    <div>
      <Navbar />
      <Sliderxx />
      {/* content one */}
      <div className="container">
        <div className="content_one_head text-center pt-5 mt-5">

     <div className="sec-title centred">
  <span className="top-title">Welcome to Eazy Recruitz</span>
  <h2>Modern Day Staffing Agency</h2>
  <p>Long established fact that a reader will be distracted by the <br />readable content of a page.</p>
</div>

          <p className='para2'>Revolutionizing the hiring process by making it as hassle-free as it can be. It is our top priority to make sure we link companies with highly qualified individuals that fit their needs. We provide you recruitment industry services with the best candidates that we ensure are not only efficient and experienced but also, come with TS/SCI and FSP</p>
        </div>
        <div className="row mt-5">
          <div className="col-md-6"  >
          <div  onMouseMove={onmousemovexxx} class="containerxxx">
  <div id="ex1-layer" class="boxxxx">
  <figure  className='img_box'  >

<img  src={img1} alt="" />

</figure>
  </div>
</div>
           
          </div>
          <div className="col-md-6">
            <div className="row cont_row">  

              <div className='col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-sm-6'>
              <a onClick={()=>setchange(true)} className="col-md-6  cont_col1">
              <i class="fa-solid fa-user"></i>
              <p>For Employers</p>
              {change ? 
              <i class="fa-solid fa-arrow-down"></i>
:
              <i class="fa-solid fa-arrow-up"></i>
            }
              </a>
              </div>

              <div className='col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-sm-6'>
              <a onClick={()=>setchange(false)} className="col-md-6 cont_col2">
              <i class="fa-solid fa-user"></i>
              <p>For Employees</p>
              {change ? 
              <i class="fa-solid fa-arrow-up"></i>
:
              <i class="fa-solid fa-arrow-down"></i>
            }
              </a>
              </div>

             


              


            </div>
        {/* changing */}
      {change? 
            <div className="changing_box">

           <div className="cont_one_right mt-5">

           <p className='para1'>Find the Employees</p>
           <h1>Hire Your Next Candidate On Eazy Recruitz</h1>
           <p className='para2 pt-3'>To take a trivial example which of us ever undertakes laborious physical exercise except to obtain some advantage from it but who has any right to find fault with a man who chooses.</p>
           </div>
            
            <div className="icons">
              <div className='row'>
                <div className='col-lg-6 col-sm-6 col-xxl-6 col-md-6 col-xl-6'>
                <div className="icon1">
              <img src={icon2} alt="" />
              <p>Understand Your Needs</p>
              </div>
                </div>
                <div className='col-lg-6 col-sm-6 col-xxl-6 col-md-6 col-xl-6'>
                <div className="icon2">
              <img src={icon1} alt="" />
              <p>
Find the Perfect Candidate</p>
              </div>
</div>
              </div>
      
            </div>

            </div>


            :

          
            
            <div className="changing_box2">
              
              <div className="cont_one_right mt-5">
   
              <p className='para1'>Find Your Right Place</p>
              <h1>Explore Your Career Path With Eazy Recruitz</h1>
              <p className='para2 pt-3'>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and we will give you a complete account of the system, and expound the actual teachings.</p>
              </div>
               <div className="icons">

                <div className='row'>
                  <div className='col-lg-6 col-sm-6 col-xxl-6 col-md-6 col-xl-6'>
                  <div className="icon1">
                 <img src={icon4} alt="" />
                 <p>Executive Opportunities</p>
                 </div>
                  </div>
                  <div className='col-lg-6 col-sm-6 col-xxl-6 col-md-6 col-xl-6'>
                  <div className="icon2">
                 <img src={icon3} alt="" />
                 <p>
   
                  Non Excecutive Opportunities</p>
                 </div>
                  </div>
                </div>

                


                 




               </div>
   
               </div>
              }
            {/* check */}

    

            <div class="link mt-4"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/about-company/">
              <i class="fa-solid fa-arrow-right-long"></i>Your Required Talent</a></div>
          

          </div>
        </div>
      </div>
      {/* content one */}



      {/* staffing partners */}
     
    <section className="about-section mt-3">
  <div className="pattern-layer"  />
  <div className="auto-container">
    <div className="inner-container">
      <div className="row clearfix">
        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
          <div id="content_block_2">
            <div className="content-box centred">
              <figure className="image-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/about-1.jpg" alt="Awesome Image" /></figure>
              <div className="inner-box">
                <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-3.png" alt="Awesome Image" /></figure>
                <h3>Educational Resources <br />for Job Seekers</h3>
                <a href="#">Guides &amp; E-books<i className="flaticon-direct-download" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
          <div id="content_block_3">
            <div className="content-box">
              <div className="sec-title">
                <span className="top-title">About Our Agency</span>
                <h2>Staffing Partners: Reliable &amp; Cost Efficiant Recruitment Agency</h2>
              </div>
              <div className="text">
                <p>Long established fact that reader will be distracted the readable of pages when looking at its layout. The point using lorem ipsum has a more-or-less normal distribution of letters.</p>
              </div>
              <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/about-company/"><i class="fa-solid fa-arrow-right-long"></i> More About Us</a></div>
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


      {/* staffing partners */}

      {/* inspiring */}
      <div className="container-fluid inspiring">

    
                <div className="container mt-5 pt-5">
                  <div className="inspiring_head text-center">
                        <p className='para1'>SOLUTIONS WE PROVIDE</p>
                        <h1>Inspiring Staffing Solutions</h1>
                        <p className='para2'>Long established fact that a reader will be distracted by the <br /> readable content of a page.</p>
                  </div>
                  <div className='row'>

                    
                 

               
                <Slider {...mobilesettings2}>
          <div className='card_main_box' >
           
          <div className="owl-item active" style={{width: 370, marginRight: 30}}><div className="service-block-one">
    <div className="inner-box">
      <figure className="image-box"><img width={370} height={300} src={InspriImage} className="attachment-eazyrecruitz_370x300 size-eazyrecruitz_370x300 wp-post-image" alt loading="lazy"  sizes="(max-width: 370px) 100vw, 370px" /></figure>
      <div className="lower-content">
        <div className="content-box">
          <div className="inner">
            <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/Execitive_serach.png" alt="Awesome Image" /></figure>
            <h4>Training</h4>
          </div>
          <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/training/">More Details</a></div>
        </div>
        <div className="overlay-content">
          <p>Explain to you how this idea denouncing pleasure &amp; praising pain was ...</p>
          <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/training/"><i class="fa-solid fa-arrow-right-long"></i> More Details</a>
        </div>
      </div>
    </div>
  </div></div>


          </div>
          
          <div className='card_main_box'>
           <div className="owl-item active" style={{width: 370, marginRight: 30}}><div className="service-block-one">
    <div className="inner-box">
      <figure className="image-box"><img width={370} height={300} src={InspriImage} sizes="(max-width: 370px) 100vw, 370px" /></figure>
      <div className="lower-content">
        <div className="content-box">
          <div className="inner">
            <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/Execitive_serach.png" alt="Awesome Image" /></figure>
            <h4>Training</h4>
          </div>
          <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/training/">More Details</a></div>
        </div>
        <div className="overlay-content">
          <p>Explain to you how this idea denouncing pleasure &amp; praising pain was ...</p>
          <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/training/"><i class="fa-solid fa-arrow-right-long"></i> More Details</a>
        </div>
      </div>
    </div>
  </div></div>
          </div>
          <div className='card_main_box'>
           <div className="owl-item active" style={{width: 370, marginRight: 30}}><div className="service-block-one">
    <div className="inner-box">
      <figure className="image-box"><img width={370} height={300} src={InspriImage} className="attachment-eazyrecruitz_370x300 size-eazyrecruitz_370x300 wp-post-image" alt loading="lazy" sizes="(max-width: 370px) 100vw, 370px" /></figure>
      <div className="lower-content">
        <div className="content-box">
          <div className="inner">
            <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/Execitive_serach.png" alt="Awesome Image" /></figure>
            <h4>Training</h4>
          </div>
          <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/training/">More Details</a></div>
        </div>
        <div className="overlay-content">
          <p>Explain to you how this idea denouncing pleasure &amp; praising pain was ...</p>
          <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/training/"><i class="fa-solid fa-arrow-right-long"></i> More Details</a>
        </div>
      </div>
    </div>
  </div></div>
          </div>
          <div className='card_main_box'>
           <div className="owl-item active" style={{width: 370, marginRight: 30}}><div className="service-block-one">
    <div className="inner-box">
      <figure className="image-box"><img width={370} height={300} src={InspriImage} className="attachment-eazyrecruitz_370x300 size-eazyrecruitz_370x300 wp-post-image" alt loading="lazy" sizes="(max-width: 370px) 100vw, 370px" /></figure>
      <div className="lower-content">
        <div className="content-box">
          <div className="inner">
            <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/Execitive_serach.png" alt="Awesome Image" /></figure>
            <h4>Training</h4>
          </div>
          <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/training/">More Details</a></div>
        </div>
        <div className="overlay-content">
          <p>Explain to you how this idea denouncing pleasure &amp; praising pain was ...</p>
          <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/training/"><i className="flaticon-right-arrow" />More Details</a>
        </div>
      </div>
    </div>
  </div></div>
          </div>
          <div className='card_main_box'>
           <div className="owl-item active" style={{width: 370, marginRight: 30}}><div className="service-block-one">
    <div className="inner-box">
      <figure className="image-box"><img width={370} height={300} src={InspriImage} className="attachment-eazyrecruitz_370x300 size-eazyrecruitz_370x300 wp-post-image" alt loading="lazy"  sizes="(max-width: 370px) 100vw, 370px" /></figure>
      <div className="lower-content">
        <div className="content-box">
          <div className="inner">
            <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/Execitive_serach.png" alt="Awesome Image" /></figure>
            <h4>Training</h4>
          </div>
          <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/training/">More Details</a></div>
        </div>
        <div className="overlay-content">
          <p>Explain to you how this idea denouncing pleasure &amp; praising pain was ...</p>
          <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/training/"><i className="flaticon-right-arrow" />More Details</a>
        </div>
      </div>
    </div>
  </div></div>
          </div>
          <div className='card_main_box'>
           <div className="owl-item active" style={{width: 370, marginRight: 30}}><div className="service-block-one">
    <div className="inner-box">
      <figure className="image-box"><img width={370} height={300} src={InspriImage} className="attachment-eazyrecruitz_370x300 size-eazyrecruitz_370x300 wp-post-image" alt loading="lazy" sizes="(max-width: 370px) 100vw, 370px" /></figure>
      <div className="lower-content">
        <div className="content-box">
          <div className="inner">
            <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/Execitive_serach.png" alt="Awesome Image" /></figure>
            <h4>Training</h4>
          </div>
          <div className="link"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/training/">More Details</a></div>
        </div>
        <div className="overlay-content">
          <p>Explain to you how this idea denouncing pleasure &amp; praising pain was ...</p>
          <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/training/"><i className="flaticon-right-arrow" />More Details</a>
        </div>
      </div>
    </div>
  </div></div>
          </div>
        </Slider>
                
        


                  </div>
                </div>
                </div>
      {/* inspiring */}

      {/* Solve Tech */}
     
     <section className="recruitment-technology">
  <div className="auto-container">
    <div className="row clearfix">
      <div className="col-lg-6 col-md-12 col-sm-12 image-column">

      <div  onMouseMove={onmousemovexxxOP} class="containerxxx">
  <div id="ex1-layer2" class="boxxxx">
  <figure id='tuop' className="image-box js-tilt clearfix" style={{willChange: 'transform', transform: 'perspective(700px) rotateX(0deg) rotateY(0deg)'}}><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/recruitment-1.png" alt="Awesome Image" />
        </figure>
  </div>
</div>

  
  
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 content-column">
        <div id="content_block_4">
          <div className="content-box">
            <div className="sec-title">
              
              <span className="top-title">Recruitment technologies</span><h2>Solving Recruitment Using Technology</h2>
              <p>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form.</p>
            </div>
            <div className="inner-box">

            <Fade right>
            <div className="single-item wow fadeInRight animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInRight'}}>
                <div className="inner">
                  <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-7.png" alt="Awesome Image" /></figure>
                  <h3><span>01</span><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/contract-to-hire/">Sourcing the Best<i className="flaticon-right-arrow" /></a></h3>
                  <p>All the lorem ipsum generators on the Internet tend.</p>
                </div>
              </div>
        </Fade>
          

        <Fade right>
        <div className="single-item wow fadeInRight animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInRight'}}>
                <div className="inner">
                  <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-8.png" alt="Awesome Image" /></figure>
                  <h3><span>02</span><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/direct-hire/">Volume Hiring<i className="flaticon-right-arrow" /></a></h3>
                  <p>On the other hand, we denounce with righteous.</p>
                </div>
              </div>
        </Fade>
            

              <Fade right>
              <div className="single-item wow fadeInRight animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInRight'}}>
                <div className="inner">
                  <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-9.png" alt="Awesome Image" /></figure>
                  <h3><span>03</span><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/training/">Partners in Team Building<i className="flaticon-right-arrow" /></a></h3>
                  <p>Man therefore always holds in these matters to this.</p>
                </div>
              </div>

        </Fade>
              


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Solve Tech */}
        
        {/* Industries */}
     
       <section className="industries-section bg-color-1">
  <div className="pattern-layer" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/pattern-7.png)'}} />
  <div className="auto-container">
    <div className="tabs-box">
      <div className="row clearfix">
        <div className="col-xl-4 col-lg-12 col-sm-12 btn-column">
          <div className="sec-title light">
                    <span style={{ color: "black" }} className="top-title our-service-area">Our Service areas</span>
            <h2>Industries Hiring</h2>
          </div>
          <div className="tab-btn-box">
            <ul className="tab-btns tab-buttons clearfix">
              <li className="tab-btn active-btn" data-tab="#tab-3">
                <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-10.png" alt="Awesome Image" /></figure>
                <h3>Logistics &amp; Services</h3>
              </li>
              <li className="tab-btn " data-tab="#tab-4">
                <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-11.png" alt="Awesome Image" /></figure>
                <h3>Hospitality</h3>
              </li>
              <li className="tab-btn " data-tab="#tab-5">
                <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-12.png" alt="Awesome Image" /></figure>
                <h3>Manufacturing</h3>
              </li>
              <li className="tab-btn " data-tab="#tab-6">
                <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-13.png" alt="Awesome Image" /></figure>
                <h3>Education &amp; Government</h3>
              </li>
              <li className="tab-btn " data-tab="#tab-7">
                <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-14.png" alt="Awesome Image" /></figure>
                <h3>Software/IT</h3>
              </li>
              <li className="tab-btn " data-tab="#tab-8">
                <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-15.png" alt="Awesome Image" /></figure>
                <h3>Front Line Support</h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-8 col-lg-12 col-sm-12 content-column">
          <div className="tabs-content">
            <div className="tab active-tab" id="tab-3">
              <div className="inner-box">
                <figure className="image-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/industries-1.jpg" alt="Awesome Image" /></figure>
                <div className="content-box">
                  <div className="text">
                    <h2>Logistics &amp; Services Industries</h2>
                    <span>26 Jobs in 10 Different Companies</span>
                  </div>
                  <div className="line" />
                  <div className="link"><a href="#"><i className="flaticon-right-arrow-angle" /></a></div>
                </div>
              </div>
            </div>
            <div className="tab " id="tab-4">
              <div className="inner-box">
                <figure className="image-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/industries-2.jpg" alt="Awesome Image" /></figure>
                <div className="content-box">
                  <div className="text">
                    <h2>Hospitality</h2>
                    <span>26 Jobs in 10 Different Companies</span>
                  </div>
                  <div className="line" />
                  <div className="link"><a href="#"><i className="flaticon-right-arrow-angle" /></a></div>
                </div>
              </div>
            </div>
            <div className="tab " id="tab-5">
              <div className="inner-box">
                <figure className="image-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/industries-3.jpg" alt="Awesome Image" /></figure>
                <div className="content-box">
                  <div className="text">
                    <h2>Manufacturing</h2>
                    <span>26 Jobs in 10 Different Companies</span>
                  </div>
                  <div className="line" />
                  <div className="link"><a href="#"><i className="flaticon-right-arrow-angle" /></a></div>
                </div>
              </div>
            </div>
            <div className="tab " id="tab-6">
              <div className="inner-box">
                <figure className="image-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/industries-4.jpg" alt="Awesome Image" /></figure>
                <div className="content-box">
                  <div className="text">
                    <h2>Education &amp; Government</h2>
                    <span>26 Jobs in 10 Different Companies</span>
                  </div>
                  <div className="line" />
                  <div className="link"><a href="#"><i className="flaticon-right-arrow-angle" /></a></div>
                </div>
              </div>
            </div>
            <div className="tab " id="tab-7">
              <div className="inner-box">
                <figure className="image-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/industries-5.jpg" alt="Awesome Image" /></figure>
                <div className="content-box">
                  <div className="text">
                    <h2>Software/IT</h2>
                    <span>26 Jobs in 10 Different Companies</span>
                  </div>
                  <div className="line" />
                  <div className="link"><a href="#"><i className="flaticon-right-arrow-angle" /></a></div>
                </div>
              </div>
            </div>
            <div className="tab " id="tab-8">
              <div className="inner-box">
                <figure className="image-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/industries-6.jpg" alt="Awesome Image" /></figure>
                <div className="content-box">
                  <div className="text">
                    <h2>Front Line Support</h2>
                    <span>26 Jobs in 10 Different Companies</span>
                  </div>
                  <div className="line" />
                  <div className="link"><a href="#"><i className="flaticon-right-arrow-angle" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Industries */}

              {/* Three Steps Section */}
              <Fade bottom>
              <section className="process-section centred">
  <div className="auto-container">
    <div className="sec-title">
      <span className="top-title">How it’s Possible</span>
      <h2>Three Steps of Eazy Recruitz</h2>
      <p>Long established fact that a reader will be distracted by the <br />readable content of a page.</p>
    </div>
    <div className="row clearfix">
      <div className="col-lg-4 col-md-6 col-sm-12 process-block">
       
        <div className="process-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">
            <figure className="icon-box">
              <img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-16.png" alt="Awesome Image" />
              <span>01</span>
              <div className="anim-icon">
                <div className="icon-1" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-8.png)'}} />
                <div className="icon-2 rotate-me" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/icons/anim-icon-2.png)'}} />
                <div className="icon-3 rotate-me" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/icons/anim-icon-2.png)'}} />
              </div>
            </figure>
            <div className="lower-content">
              <h3>Initiation</h3>
              <p>Choice is untrammelled when nothing prevents our being best.</p>
              <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/temporary-staffing/">More Details</a>
            </div>
          </div>
        </div>
        
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 process-block">
        
        <div className="process-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">
            <figure className="icon-box">
              <img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-17.png" alt="Awesome Image" />
              <span>02</span>
              <div className="anim-icon">
                <div className="icon-1" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-8.png)'}} />
                <div className="icon-2 rotate-me" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/icons/anim-icon-2.png)'}} />
                <div className="icon-3 rotate-me" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/icons/anim-icon-2.png)'}} />
              </div>
            </figure>
            <div className="lower-content">
              <h3>Scheduling</h3>
              <p>Power of choiced is untrammelled and when nothing prevents.</p>
              <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/temporary-staffing/">More Details</a>
            </div>
          </div>
        </div>

      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 process-block">
       
        <div className="process-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
          <div className="inner-box">dsa
            <figure className="icon-box">
              <img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-18.png" alt="Awesome Image" />
              <span>03</span>
              <div className="anim-icon">
                <div className="icon-1" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-8.png)'}} />
                <div className="icon-2 rotate-me" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/icons/anim-icon-2.png)'}} />
                <div className="icon-3 rotate-me" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/icons/anim-icon-2.png)'}} />
              </div>
            </figure>
            <div className="lower-content">
              <h3>Contracts &amp; Pay</h3>
              <p>Every pleasure is to be welcomed pain avoided but in certain.</p>
              <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/temporary-staffing/">More Details</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
        </Fade>
       

              {/* Three Steps Section */}




        {/* Experiance */}
     
              <Ourteam></Ourteam>

        {/* Experiance */}

        {/* News Update */}
        <div className="container news pt-5 mt-5">
          <div className="news_head text-center">
          <p className='para1'>NEWS & UPDATES</p>
          <h1>Featured News and Updates</h1>
          <p className='para2'>Long established fact that a reader will be distracted by the <br /> readable content of a page.</p>
          </div>
            <div className="row pt-3">
            <div className="col-md-4">
              <div className='news_main_col1'>
              <div className="news_col1">
                <img src={news1} alt="" />
              </div>
              <div className="news_col1_inner">
                <i class="fa-solid fa-book"></i>
                <a href="">HUMAN RESOURCE</a>
                <h4>5 Effective Ways to Hire More Workers</h4>
                  <div className="news_col1_inner_user_sec">
                <i class="fa-solid fa-user"></i>
                <a href="">Harley Reuban</a>
                    <a style={{padding:"0px" , fontWeight:"100"}} href="">||</a> 
                <i style={{paddingLeft:"15px"}} class="fa-solid fa-comment"></i>
                <a href="">3 Cmnts</a>
                </div>
              </div>

              </div>

            </div>
            <div className="col-md-4">
            <div className='news_main_col1'>
              <div className="news_col1">
                <img src={news2} alt="" />
              </div>
              <div className="news_col1_inner">
                <i class="fa-solid fa-book"></i>
                <a href="">TECHIQUES</a>
                <h4>Does My Business Need a Director of Training?</h4>
                  <div className="news_col1_inner_user_sec">
                <i class="fa-solid fa-user"></i>
                <a href="">Harley Reuban</a>
                    <a style={{padding:"0px" , fontWeight:"100"}} href="">||</a> 
                <i style={{paddingLeft:"15px"}} class="fa-solid fa-comment"></i>
                <a href="">3 Cmnts</a>
                </div>
              </div>

              </div>
            </div>
            <div className="col-md-4">
            <div className='news_main_col1'>
              <div className="news_col1">
                <img src={news3} alt="" />
              </div>
              <div className="news_col1_inner">
                <i class="fa-solid fa-book"></i>
                <a href="">RECRUITMENT</a>
                <h4>What are the 2020 Staffing Trends in USA</h4>
                  <div className="news_col1_inner_user_sec">
                <i class="fa-solid fa-user"></i>
                <a href="">Harley Reuban</a>
                    <a style={{padding:"0px" , fontWeight:"100"}} href="">||</a> 
                <i style={{paddingLeft:"15px"}} class="fa-solid fa-comment"></i>
                <a href="">3 Cmnts</a>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
        {/* News Update */}

        {/* Client */}
      <section className="testimonial-section bg-color-2 mt-4">
  <div className="auto-container">
    <div className="sec-title">
      <span className="top-title">Client Testimonials</span>
      <h2>Highest Client Satisfaction Rate</h2>
    </div>
    
    
    
  
  
    <div className="row">
            <Slider {...mobilesettings3}>
                <div className='col-sm-12 col-sm-12 col-sm-12 col-sm-12 col-sm-12 client_col2'>
                <div className="testimonial-block-one">
  <div className="inner-box">
    <div className="border-shap" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/border-1.png)'}} />
    <figure className="quote-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/icons/quote-1.png" alt /></figure>
    <div className="author-box">
      <figure className="author-thumb"><img width={60} height={60} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/testimonial-2.png" className="attachment-eazyrecruitz_60x60 size-eazyrecruitz_60x60 wp-post-image" alt loading="lazy" /></figure>
      <ul className="rating clearfix">
        <li><i className="flaticon-star" /></li><li><i className="flaticon-star" /></li><li><i className="flaticon-star" /></li><li><i className="fa fa-star-half-alt" /></li><li><i className="fa fa-star-half-alt" /></li>                              </ul>
      <h3>Freddie Esther - <span>VP, Daily News</span></h3>
    </div>
    <div className="text">
      <p>I really appreciated the outstanding time, work, and effort that the entire staff put into finding me an excellent job placement. Thank you very much.</p>
    </div>
  </div>
</div>
          </div>
          <div className='col-sm-12 client_col2'>
        <div className="testimonial-block-one">
  <div className="inner-box">
    <div className="border-shap" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/border-1.png)'}} />
    <figure className="quote-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/icons/quote-1.png" alt /></figure>
    <div className="author-box">
      <figure className="author-thumb"><img width={60} height={60} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/testimonial-2.png" className="attachment-eazyrecruitz_60x60 size-eazyrecruitz_60x60 wp-post-image" alt loading="lazy" /></figure>
      <ul className="rating clearfix">
        <li><i className="flaticon-star" /></li><li><i className="flaticon-star" /></li><li><i className="flaticon-star" /></li><li><i className="fa fa-star-half-alt" /></li><li><i className="fa fa-star-half-alt" /></li>                              </ul>
      <h3>Freddie Esther - <span>VP, Daily News</span></h3>
    </div>
    <div className="text">
      <p>I really appreciated the outstanding time, work, and effort that the entire staff put into finding me an excellent job placement. Thank you very much.</p>
    </div>
  </div>
</div>

                </div>
              <div className='col-sm-12 client_col3'>
              <div className="testimonial-block-one">
  <div className="inner-box">
    <div className="border-shap" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/border-1.png)'}} />
    <figure className="quote-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/icons/quote-1.png" alt /></figure>
    <div className="author-box">
      <figure className="author-thumb"><img width={60} height={60} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/testimonial-2.png" className="attachment-eazyrecruitz_60x60 size-eazyrecruitz_60x60 wp-post-image" alt loading="lazy" /></figure>
      <ul className="rating clearfix">
        <li><i className="flaticon-star" /></li><li><i className="flaticon-star" /></li><li><i className="flaticon-star" /></li><li><i className="fa fa-star-half-alt" /></li><li><i className="fa fa-star-half-alt" /></li>                              </ul>
      <h3>Freddie Esther - <span>VP, Daily News</span></h3>
    </div>
    <div className="text">
      <p>I really appreciated the outstanding time, work, and effort that the entire staff put into finding me an excellent job placement. Thank you very much.</p>
    </div>
  </div>
</div>
                </div>
        </Slider>
          




            </div>
  
  </div>
</section>






        
        {/* Client */}

        {/* Awards & Major Achievements */}
      
              <Awardsmajor></Awardsmajor>
        {/* Awards & Major Achievements */}





        <Footer></Footer>

    </div>
    
    </div>


              
              
  )
}
