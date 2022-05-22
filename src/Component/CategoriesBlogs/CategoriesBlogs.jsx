import './CategoriesBlogs.css'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import PageBanner from '../../InnerSections/PageBanner';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CategoriesBlogs = () => {
 

  const [usecatblogs, setcatblogs] = useState();
  const param = useParams();

      useEffect(() => {
      
        const idx = param.id;
        console.log(idx)
        fetch(`https://hi5.thedatech.com/api/category/${idx}/blogs`)
        .then((response) => response.json())
        .then((json) => {
          
          const blogsData = json.blogs;
          setcatblogs(blogsData)
       console.log(blogsData);
         
          });

      }, []);







    return (
        <div>
  <Navbar></Navbar>
             {/* Top section Banner Here */}
             <PageBanner  PageTitile={'Get In Touch'} PageDes={'Smarter Business Solutions. Better Customer Relations.'} PageName={'CONTACT'} ></PageBanner>
            {/* Top section Banner Here */}
          <div className="container">

            
  <div className="row">
    <div className="col-12">
      <section className="sidebar-page-container blog-list">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-side col-lg-8 col-md-12 col-sm-12">

            {usecatblogs
        ? usecatblogs.map(item => {
            return <>
             <Link to={`/api/category/${item.category_id}/blog/${item.id}`}  >
            <div className="blog-list-content">
                <div className="thm-unit-test">
                  <div className="news-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
                    <div className="inner-box">
                      <figure className="image-box">
                        <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/5-effective-ways-to-hire-more-workers-2/"><img width={770} height={600} src={`https://hi5.thedatech.com/${item.image}`} alt loading="lazy" sizes="(max-width: 770px) 100vw, 770px" /></a>
                        <span className="post-date">09<br />Sep</span>
                      </figure>
                      <div className="lower-content">
                        <div className="inner">
                          <div className="category"><i className="flaticon-note" /><p><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/category/our-blog/" rel="category tag">Our Blog</a></p></div>                <h2><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/5-effective-ways-to-hire-more-workers-2/">{item.name}</a></h2>
<p>{item.long_description}</p>
                          <ul className="post-info clearfix">
                            <li>
                              <img alt src="http://2.gravatar.com/avatar/e7b9b29c4fdd4d4ec28699064fe80204?s=40&d=mm&r=g" srcSet="http://2.gravatar.com/avatar/e7b9b29c4fdd4d4ec28699064fe80204?s=80&d=mm&r=g 2x" className="avatar avatar-40 photo" height={40} width={40} loading="lazy" />                                            	<a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/author/admin/">
                                admin                      </a>
                            </li>
                            <li><i className="far fa-comment" /><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/5-effective-ways-to-hire-more-workers-2/#comments">0 Comments</a></li>
                          </ul>
                          <div className="share-box">
                            <a href="javascript():;" className="share-link"><i className="fas fa-share-alt" /></a>
                            <ul className="social-links clearfix">
                              <li><a href="http://www.facebook.com/sharer.php?u=http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/5-effective-ways-to-hire-more-workers-2/" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                              <li><a href="https://twitter.com/share?url=http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/5-effective-ways-to-hire-more-workers-2/&text=5-effective-ways-to-hire-more-workers-2" target="_blank"><i className="fab fa-twitter" /></a></li>
                              <li><a href="http://www.linkedin.com/shareArticle?url=http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/5-effective-ways-to-hire-more-workers-2/&title=5-effective-ways-to-hire-more-workers-2"><i className="fab fa-linkedin" /></a></li>
                              <li><a href="https://pinterest.com/pin/create/bookmarklet/?url=http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/5-effective-ways-to-hire-more-workers-2/&description=5-effective-ways-to-hire-more-workers-2"><i className="fab fa-pinterest" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>  
              </Link>
            </> 
            ;
          })
        :      <div id='loader'>
        <div class="loader"></div>
        </div>}

                



            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="blog-sidebar">
                <div id="search-2" className="widget sidebar-widget single-sidebar widget_search">
                  <div className="search-widget">
                    <form action="http://www.el.commonsupport.com/newwp/eazyrecruitz/" method="get" className="search-form">
                      <div className="form-group">
                        <input type="search" name="s" defaultValue placeholder="Keyword..." required />
                        <button type="submit"><i className="flaticon-loupe-1" /></button>
                      </div>
                    </form>
                  </div>
                </div>
                <div id="recent-posts-2" className="widget sidebar-widget single-sidebar widget_recent_entries">
                  <div className="widget-title"><h3>Recent Posts</h3><i className="flaticon-note" /></div>
                  <ul>
                    <li>
                      <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/5-effective-ways-to-hire-more-workers-2/">5 Effective Ways to Hire More Workers</a>
                    </li>
                    <li>
                      <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/">Does My Business Need a Director of Training?</a>
                    </li>
                    <li>
                      <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/what-are-the-2020-staffing-trends-in-usa-2/">What are the 2020 Staffing Trends in USA</a>
                    </li>
                    <li>
                      <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/prepare-your-recruiting-team-for-2020/">Prepare your Recruiting Team for 2020</a>
                    </li>
                    <li>
                      <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/top-10-questions-every-interviewer-must-ask/">Top 10 Questions Every Interviewer Must Ask</a>
                    </li>
                  </ul>
                </div><div id="recent-comments-2" className="widget sidebar-widget single-sidebar widget_recent_comments"><div className="widget-title"><h3>Recent Comments</h3><i className="flaticon-note" /></div><ul id="recentcomments"><li className="recentcomments"><span className="comment-author-link">Herman Cobus</span> on <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/#comment-3">Does My Business Need a Director of Training?</a></li><li className="recentcomments"><span className="comment-author-link">William Cobus</span> on <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/#comment-2">Does My Business Need a Director of Training?</a></li><li className="recentcomments"><span className="comment-author-link">Isaac Herman</span> on <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/#comment-1">Does My Business Need a Director of Training?</a></li></ul></div>		</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>

    <Footer></Footer>
        </div>
    );
}

export default CategoriesBlogs;
