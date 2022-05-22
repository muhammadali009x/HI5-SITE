import './Blogs.css'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Blogs() {

  const [useAllBlogs, setAllBlogs] = useState();
  const [useCategories, setCategories] = useState();
 
 useEffect(() => {
  axios.get(`https://hi5.thedatech.com/api/blogs`, {})
  .then(res => {
      const data = res.data
      console.log(data);
      setAllBlogs(data)

      data.forEach(x => {
        console.log(x.category.name);
      });
})
  .catch((error) => {
      console.log(error)
  })



  axios.get(`https://hi5.thedatech.com/api/category`, {})
  .then(res => {
      const data = res.data
      console.log("this categories here",data);
      setCategories(data)  
})
  .catch((error) => {
      console.log(error)
  })

  
 }, []);
 



  return (
    <div>
    
            <Navbar></Navbar>


        <section className="sidebar-page-container blog-grid">
  <div className="auto-container">
    <div className="row clearfix">
      <div className="col-lg-8 col-md-12 col-sm-12 content-side">
        <div className="blog-grid-content">
          <div className="row clearfix">
         
       
            {useAllBlogs
        ? useAllBlogs.map(item => {
            return <div className="col-lg-6 col-md-6 col-sm-12 news-block" key={item.id}>          
             <Link to={`/api/category/${item.category_id}/blog/${item.id}`}  >  
             <div className="news-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
                <div className="inner-box">
             
                  <figure className="image-box">
                
                    <a href="#"><img width={370} height={490} src={`https://hi5.thedatech.com/${item.image}`}   /></a>
                    <span className="post-date">31<br />Aug</span>
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <div className="category"><i className="flaticon-note" /><p><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/category/latest-news/" rel="category tag">Latest News</a></p></div>
                      <h3><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/08/31/5-effective-ways-to-hire-more-workers/">{item.name}</a></h3>
                      <ul className="post-info clearfix">
                      <li><i className="far fa-user" /><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/author/admin/">Category-{item.category.name} </a></li>
                        <li><i className="far fa-user" /><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/author/admin/">admin</a></li>
                        <li><i className="far fa-comment" /><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/08/31/5-effective-ways-to-hire-more-workers/#comments">0 Comments</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
               </Link>
            </div> ;
          })
        :      <div id='loader'>
        <div class="loader"></div>
        </div>}
           
             
           
 
          </div>
          <div className="more-btn centred"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/blog-list-view/">View More</a></div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
        <div className="blog-sidebar">
          <div id="search-3" className="widget sidebar-widget widget_search">
            <div className="search-widget">
              <form action="http://www.el.commonsupport.com/newwp/eazyrecruitz/" method="get" className="search-form">
                <div className="form-group">
                  <input type="search" name="s" defaultValue placeholder="Keyword..." required />
                  <button type="submit"><i className="flaticon-loupe-1" /></button>
                </div>
              </form>
            </div>
          </div><div id="categories-2" className="widget sidebar-widget widget_categories"><div className="widget-title"><h3>Categories</h3><i className="flaticon-note" /></div>
            <ul>
            {useCategories
        ? useCategories.map(item => {
            return<>  
            <li className="cat-item cat-item-1"><Link to={`/blogs/categories/${item.id}`} >{item.name}</Link>
            </li>
            </>
            ;
          })
        :      <>
        <li className="cat-item cat-item-1"><Link to="/#">not showing</Link>
            </li>
        </>}
           

            </ul>
          </div><div id="eazyrecruitz_recently_posted-2" className="widget sidebar-widget widget_eazyrecruitz_recently_posted">		
            {/* Recently Posted */}
            <div className="post-widget">
              <div className="widget-title"><h3>Recently Posted</h3><i className="flaticon-note" /></div>            <div className="widget-content">
                {/* Title */}
                <div className="post">
                  <figure className="post-thumb" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/news-7.jpg)'}}><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/5-effective-ways-to-hire-more-workers-2/" /></figure>
                  <span className="post-date">September 9, 2020</span>
                  <h5><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/5-effective-ways-to-hire-more-workers-2/">5 Effective Ways to Hire More Workers</a></h5>
                </div>
                <div className="post">
                  <figure className="post-thumb" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/news-8.jpg)'}}><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/" /></figure>
                  <span className="post-date">September 9, 2020</span>
                  <h5><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/">Does My Business Need a Director of Training?</a></h5>
                </div>
                <div className="post">
                  <figure className="post-thumb" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/news-9.jpg)'}}><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/what-are-the-2020-staffing-trends-in-usa-2/" /></figure>
                  <span className="post-date">September 9, 2020</span>
                  <h5><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/what-are-the-2020-staffing-trends-in-usa-2/">What are the 2020 Staffing Trends in USA</a></h5>
                </div>
              </div>
            </div>
          </div><div id="tag_cloud-2" className="widget sidebar-widget widget_tag_cloud"><div className="widget-title"><h3>Tag Cloud</h3><i className="flaticon-note" /></div><div className="tagcloud"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/tag/consulting/" className="tag-cloud-link tag-link-28 tag-link-position-1" style={{fontSize: '8pt'}} aria-label="Consulting (1 item)">Consulting</a>
              <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/tag/contract/" className="tag-cloud-link tag-link-29 tag-link-position-2" style={{fontSize: '8pt'}} aria-label="Contract (1 item)">Contract</a>
              <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/tag/e-books/" className="tag-cloud-link tag-link-31 tag-link-position-3" style={{fontSize: '8pt'}} aria-label="E-books (1 item)">E-books</a>
              <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/tag/hiring/" className="tag-cloud-link tag-link-32 tag-link-position-4" style={{fontSize: '8pt'}} aria-label="Hiring (1 item)">Hiring</a>
              <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/tag/industries/" className="tag-cloud-link tag-link-34 tag-link-position-5" style={{fontSize: '22pt'}} aria-label="Industries (12 items)">Industries</a>
              <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/tag/media-kit/" className="tag-cloud-link tag-link-35 tag-link-position-6" style={{fontSize: '8pt'}} aria-label="Media Kit (1 item)">Media Kit</a>
              <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/tag/outsourcing/" className="tag-cloud-link tag-link-37 tag-link-position-7" style={{fontSize: '8pt'}} aria-label="Outsourcing (1 item)">Outsourcing</a>
              <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/tag/permanent/" className="tag-cloud-link tag-link-38 tag-link-position-8" style={{fontSize: '22pt'}} aria-label="Permanent (12 items)">Permanent</a>
              <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/tag/timesheets/" className="tag-cloud-link tag-link-39 tag-link-position-9" style={{fontSize: '21.481481481481pt'}} aria-label="Timesheets (11 items)">Timesheets</a></div>
          </div>
          <div id="eazyrecruitz_educational_resources-2" className="widget sidebar-widget widget_eazyrecruitz_educational_resources">      		
            <div className="sidebar-resource">
              <div className="inner-box centred">
                <div className="pattern-layer">
                  <div className="pattern-1" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-47.png)'}} />
                  <div className="pattern-2" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-48.png)'}} />
                </div>
                <figure className="iocn-box"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-68.png" alt="Awesome Image" /></figure>
                <h3>Educational Resources for Job Seekers</h3>
                <a href="#">Guides &amp; E-books<i className="flaticon-direct-download" /></a>
              </div>
            </div>
          </div>                                                  </div>
      </div>
    </div>
  </div>
</section>


            <Footer></Footer>

    </div>
  )
}
