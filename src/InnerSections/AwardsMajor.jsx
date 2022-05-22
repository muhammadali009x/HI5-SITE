import "../Component/Home/Home.css";


const Awardsmajor = () => {

// MAIN IMAGE SCROLL HERE START
let constrainOM = 300;
let ex1LayerOM = document.getElementById("ex1-layer3");

function transforms(x, y, el) {
  let boxOM = el.getBoundingClientRect();
  let calcXOM = -(y - boxOM.y - (boxOM.height / 2)) / constrainOM;
  let calcYOM = (x - boxOM.x - (boxOM.width / 2)) / constrainOM;
  
  return "perspective(100px) "
    + "   rotateX("+ calcXOM +"deg) "
    + "   rotateY("+ calcYOM +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

 function onmousemovexxxOM  (e)  {
  let xyOM = [e.clientX, e.clientY];
  let positionOM = xyOM.concat([ex1LayerOM]);

  window.requestAnimationFrame(function(){
    transformElement(ex1LayerOM, positionOM);
  });
};
// MAIN IMAGE SCROLL HERE END

    return (
        <div>
             <section className="awards-section" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/pattern-10.png)'}} >
  <div className="pattern-layer" />
  <div className="auto-container">
    <div className="sec-title centred pt-5">
      <span className="top-title">Our Excellence</span>
      <h2>Awards &amp; Major Achievements</h2>
      <p>Long established fact that a reader will be distracted by the <br />readable content of a page.</p>
    </div>
    <div className="row clearfix">
      <div className="col-lg-4 col-md-12 col-sm-12 inner-column">
        <div className="inner-block">
          <div className="single-award-block">
            <div className="inner-box">
              <div className="upper-box">
                <figure className="icon-box">
                  <img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-19.png" alt="Awesome Image" /></figure>
                <h3>Best of Staffing Talent Award</h3>
              </div>
              <ul className="lower-box">
                <li><span>Year</span>:2009-2010</li>
                <li><span>Award by</span>:Los Vegas Business Time</li>
              </ul>
            </div>
          </div>
          <div className="single-award-block">
            <div className="inner-box">
              <div className="upper-box">
                <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-19.png" alt="Awesome Image" /></figure>
                <h3>Best Companies to Work in Texas</h3>
              </div>
              <ul className="lower-box">
                <li><span>Year</span>:2012-2013</li>
                <li><span>Award by</span>:Sparks Group</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 image-column">

      <div  onMouseMove={onmousemovexxxOM} class="containerxxx">
  <div id="ex1-layer3" class="boxxxx">
  <figure className="image-box js-tilt" style={{willChange: 'transform', transform: 'perspective(700px) rotateX(0deg) rotateY(0deg)'}}><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2021/01/winners.jpg" alt="Awesome Image" />
        <div className="js-tilt-glare" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden'}}><div className="js-tilt-glare-inner" style={{position: 'absolute', top: '50%', left: '50%', pointerEvents: 'none', backgroundImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)', width: '739.988px', height: '739.988px', transform: 'rotate(180deg) translate(-50%, -50%)', transformOrigin: '0% 0%', opacity: 0}} /></div>
        </figure>
  </div>
</div>

      
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 inner-column">
        <div className="inner-block">
          <div className="single-award-block">
            <div className="inner-box">
              <div className="upper-box">
                <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-19.png" alt="Awesome Image" /></figure>
                <h3>Fast Growing Staffing Firms</h3>
              </div>
              <ul className="lower-box">
                <li><span>Year</span>:2015</li>
                <li><span>Award by</span>:Dallas Association 100</li>
              </ul>
            </div>
          </div>
          <div className="single-award-block">
            <div className="inner-box">
              <div className="upper-box">
                <figure className="icon-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/08/icon-19.png" alt="Awesome Image" /></figure>
                <h3>Best of Staffing Client Satisfaction</h3>
              </div>
              <ul className="lower-box">
                <li><span>Year</span>:2018-2019</li>
                <li><span>Award by</span>:Forbes International</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default Awardsmajor;
