import { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import { sliderData } from "../slider-data";
import "./Slider.scss";

const Slider = () => {


 


  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (

 
           
              <div>

                <div className="row">
                <div className="col-7 wowo">
              
                <div className="content"  style={{backgroundImage:`url("http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/pattern-1.png")`}}>
                <Fade  >
                <span className="spnx">Engage with Staffing</span>
                  </Fade>
                  <br></br>
                  <br></br>
                  
                  <Fade left>
                  
                  <h1 className="txt-impot">{slide.heading}</h1>
                  
                  </Fade>
                  <Fade bottom>
               
                    
                  <h5 className="text-dark">{slide.desc}</h5>
                    
                
                  
                  </Fade>
                  <button type="button" class="btn btn-danger">Danger</button>
                  
                 
                </div>
                </div>
                <div className="col-5 wowo">
                <div class="zoom-in-zoom-out">
  
  {/* <img  src={slide.image} alt="slide" className="image" /> */}
  
  </div>
   <div className="header-wrapper">
  <div className="zoominheader" style={{backgroundImage:`url(${slide.image})`}}>
    <div className="zomoutheader">
      <br /><br />
      <br /><br />
       
    </div>
  </div>
</div>

                  </div>
                </div>
                
               
               


              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
