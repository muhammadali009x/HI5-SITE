
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import Sliderxx from './Component/slider/Slider';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import Capabilities from './Component/Capabilities/Capabilities';
import Rescuiting from './Component/Rescuiting/Rescuiting';
import Development from './Component/Development/Development';
import Job from './Component/Job/Job';
import Contact from './Component/Contact/Contact';
import Header from './Component/Navbar/Navbar';

// Pages
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Component/About/About';
import Team from './Component/MeetOutTeam/Team';
import Industries from './Component/Industries/Industries';
import Navbar from './Component/Navbar/Navbar';
import Jobsingle from './Component/Job/JobSingle';
import Applyjobs from './Component/Apply Job/Applyjobs';
import Blogs from './Component/Blogs/Blogs';
import Singleblogs from './Component/Blogs/SingleBlogs';
import Faqs from './Component/Faqs/Faqs';
import CategoriesBlogs from './Component/CategoriesBlogs/CategoriesBlogs';

function App() {
  return (
    <div>


      <Router>
        <Switch>
          <Route   exact path="/">
            <Home />
          </Route> <Route exact path="/services">
            <Services />
          </Route> <Route   exact path="/capabilities">
            <Capabilities />
          </Route> <Route exact path="/rescuiting">
            <Rescuiting />
          </Route> <Route exact path="/demodevelopment">
            <Development />
          </Route> <Route exact path="/job">
            <Job />
          </Route> <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/development">
            <Industries />
          </Route>
          <Route exact path="/blog">
            <Blogs />
          </Route>
          <Route exact path="/blogs/categories/:id">
            <CategoriesBlogs />
          </Route>
          <Route exact path="/faqs">
            <Faqs />
          </Route>
          <Route exact path="/api/category/:catid/blog/:blogid">
            <Singleblogs />
          </Route>
          <Route exact path="/:idprm">
            <Applyjobs />
          </Route>
          <Route exact path="/:id">
            <Jobsingle />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
