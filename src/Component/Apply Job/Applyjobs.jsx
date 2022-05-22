import React from 'react';
import './Applyjobs.css';
import { useState, useEffect } from 'react';
import Header from '../Navbar/Navbar';
import PageBanner from '../../InnerSections/PageBanner';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer'
import axios from 'axios';
import { Country, State, City }  from 'country-state-city';


const Applyjobs = () => {

  const [putidr, setid] = useState();
  const [postname, namepost] = useState();

  const [usecountry, setscountry] = useState();

  const param = useParams();
  const useid = param.idprm;
   
  useEffect(() => {
    const contryhere = Country.getAllCountries();
    setscountry(contryhere)

 


    fetch(`https://hi5.thedatech.com/api/job/${useid}`)
    .then((response) => response.json())
    .then((json) => {
      setid(json.id);
   console.log(json.name);
   namepost(json.name);
    });        
  }, []);
   
  
    const [statename, setname] = useState('');
    const [stateemail, setemail] = useState('');
    const [statephone, setphone] = useState('');
    const [statecountry, setcountry] = useState('');
    const [statecity, setcity] = useState('');
    const [stateclear, setclear] = useState('');
    const [stateresume, setresume] = useState('');
    const [usebycities, setbycities] = useState('');
    const [usecheckcounty, setcheckcounty] = useState('');


    // FORM SUBMITED LINE HERE
    const [UseFormSubmit, FormSubmitCheck] = useState('');
    // FORM SUBMITED LINE HERE
 


      function valemty(e) {
        e.preventDefault();
        if (statename == '' | stateemail == '' | statephone == '' | statecountry | statecity | stateclear == '' | putidr == '' | stateresume == '') {
          alert('Please Check The Fields');     
        } 
         else {

          FormSubmitCheck(true)
          setTimeout(() => {  FormSubmitCheck(false)  }, 8000);
        applyjob();
        setbycities('');
        }
      }


     
      useEffect(() => {
        
       
      }, []);

      const applyjob = ( )=>{
       
       const formData = new FormData();
       formData.append('name',statename)
       formData.append('email',stateemail)
       formData.append('phone',statephone)
       formData.append('country',statecountry)
       formData.append('city',statecity)
       formData.append('clear',stateclear)
       formData.append('job_id',putidr)
       formData.append('resume',stateresume)
       axios.post('https://hi5.thedatech.com/api/apply', formData);
 
       setname('')
       setemail('')
       setphone('')
       setclear('')
       setresume('')
       setcheckcounty('null')
       setcity('null')
       document.getElementById("fileuploadtt").value = null;
       FormSubmitCheck(true)
    };

    
   
   

   function name() {

    console.log(Country.getAllCountries())
   }
      
  function Popupmy(e) {
    console.log(e.target.value);

    const Contrybyhim = Country.getCountryByCode(e.target.value)
    console.log(Contrybyhim.name);
    setcountry(Contrybyhim.name);
    setcheckcounty(e.target.value)

    const CheckTheCity = City.getCitiesOfCountry(e.target.value)
    console.log(CheckTheCity);
    setbycities(CheckTheCity)

  }

     function GetCityBy(e) {
       console.log(e.target.value);
       setcity(e.target.value)
     }

    return (
<div>
<Header></Header>

     

        {/* Top section Banner Here */}
        <PageBanner  PageTitile={'Get In Touch'} PageDes={'Smarter Business Solutions. Better Customer Relations.'} PageName={'CONTACT'} ></PageBanner>
            {/* Top section Banner Here */}

            {/* Apply Contact Form Here */}

       <form>

   <div className='container' id='form-con'>

   <h1>{postname}</h1>
     
   <div className='row'>
            <div className='col-lg-6 col-xxl-6 col-sm-6 colmd-6 col-xl-6'>
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" value={statename}  onChange={e => setname(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
            </div>
            <div className='col-lg-6 col-xxl-6 col-sm-6 colmd-6 col-xl-6'>
            <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input  value={stateemail} onChange={e => setemail(e.target.value)} type="email" className="form-control" id="exampleInputPassword1" />
  </div>
            </div>
            <div className='col-lg-6 col-xxl-6 col-sm-6 colmd-6 col-xl-6'>
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
    <input value={statephone} onChange={e => setphone(e.target.value)} type="phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
            </div>
            <div className='col-lg-6 col-xxl-6 col-sm-6 colmd-6 col-xl-6'>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Country</label>

            <select className="form-control form-OP" value={usecheckcounty} onChange={Popupmy}>
            <option selected="selected"  value="IN" >Select Option</option>
            {usecountry ?  usecountry.map((option) => (
              <>
              <option value={option.isoCode}>{option.name}</option>
              </>
            ))
            :
            <option selected="selected">Select Option</option>
          }
          </select>
    
  </div>
            </div>
            <div className='col-lg-6 col-xxl-6 col-sm-6 colmd-6 col-xl-6'>
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">City</label>


    <select className="form-control form-OP" value={statecity} onClick={GetCityBy}>
            
            {usebycities ?  usebycities.map((option) => (
              <>
              <option value={option.name}>{option.name}</option>
              </>
            ))
            :
            <option selected="selected">Please Sellect the Country First</option>
          }
          </select>

  </div>
            </div>
            <div className='col-lg-6 col-xxl-6 col-sm-6 colmd-6 col-xl-6'>
            <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Clear</label>
    <input value={stateclear} onChange={e => setclear(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" />
  </div>
            </div>
            <div className='col-lg-6 col-xxl-6 col-sm-6 colmd-6 col-xl-6'>
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Resume</label>
    <input  onChange={e => setresume(e.target.files[0])} type="file" className="form-control" id="fileuploadtt" aria-describedby="emailHelp" />
    
  </div>
            </div>
        </div>

  
  
 
  <button type="submit" onClick={valemty} className="btn btn-primary">Submit</button>

 

{UseFormSubmit? 
           <div className='formSubmit mt-3'>
           <div className='submit-line'>
             <p className='text-white'>Form has been submited</p>
           </div>
           </div>


            :

          
            
            <h1 className='text-white'>dsadsda</h1>
              }
            {/* check */}

   </div>


</form>

             {/* Apply Contact Form Here */}


             <Footer></Footer>

        </div>



    );
}

export default Applyjobs;
