import './Blogs.css'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Singleblogs = () => {

  const [usecategory_name, Setcategory_name] = useState();
  const [useimage, Setimage] = useState();
  const [uselong_description, Setlong_description] = useState();
  const [usemeta_description, Setmeta_description] = useState();
  const [usemeta_keywords, Setmeta_keywords] = useState();
  const [usename, Setname] = useState();
  const [useCategories, setCategories] = useState();
  const param = useParams();

  // function checkit() {
  //   console.log(param);
  // }

  useEffect(() => {    
 
    const catID = param.catid
    const BlogID = param.blogid

    axios.get(`https://hi5.thedatech.com/api/category/${catID}/blog/${BlogID}`)
  .then(res => {
      const data = res.data
      console.log(data);
      Setcategory_name(data.category_name);
      Setimage(data.image);
      Setlong_description(data.long_description);
      Setmeta_description(data.meta_description);
      Setmeta_keywords(data.meta_keywords);
      Setname(data.name);
       

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
          
          {/* <button onClick={checkit}>check the function</button> */}
            <Navbar></Navbar>

          <section className="page-title" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/page-title-2.jpg)'}}>
  <div className="pattern-layer" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-35.png)'}} />
  <div className="auto-container">
    <div className="post-box">
      <div className="news-block-one">
        <div className="inner-box">
          <div className="lower-content">
            <div className="inner">
              <span className="post-date">09<br />Sep</span>
              <div className="category"><i className="flaticon-note" /><p><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/category/our-blog/" rel="category tag">Our Blog</a></p></div>                            
              <h2>{usename}</h2>
              <p>{usemeta_description}</p>
              <strong>{usemeta_keywords}</strong>
              <ul className="post-info clearfix">
                <li>
                  <img alt src="http://2.gravatar.com/avatar/e7b9b29c4fdd4d4ec28699064fe80204?s=40&d=mm&r=g" srcSet="http://2.gravatar.com/avatar/e7b9b29c4fdd4d4ec28699064fe80204?s=80&d=mm&r=g 2x" className="avatar avatar-40 photo" height={40} width={40} loading="lazy" />                                                                        <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/author/admin/">admin</a>
                </li>
                <li><i className="far fa-comment" /><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/#comments">3 Comments</a></li>
                <li><i className="far fa-comment" /><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/#comments">Category-{usecategory_name}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="sidebar-page-container blog-details">
  <div className="auto-container">
    <div className="row clearfix">
      <div className="content-side col-lg-8 col-md-12 col-sm-12">
        <div className="blog-details-content">
          <div className="thm-unit-test">    
            <div className="inner-box">
              <figure className="image-box"><img width={770} height={600} src={`https://hi5.thedatech.com/${useimage}`} sizes="(max-width: 770px) 100vw, 770px" /></figure>
              <div className="text m-b0">
                <div className="text">
            <p>{uselong_description}</p>
                </div>
                <div className="two-column">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                      <div className="content-box" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/blog-details-2.jpg)'}}>
                        <div className="pattern-layer" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/pattern-49.png)'}} />
                        <div className="inner">
                          <figure className="icon-box"><img loading="lazy" src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/icon-69.png" alt width={50} height={39} className="alignnone size-full wp-image-693" /></figure>
                          <p>Business it will frequently occur that great pleasures one repudiated pleasure.</p>
                          <h3>– Dertram Irvin</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image-box"><img loading="lazy" src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/blog-details-3.jpg" alt width={370} height={370} className="alignnone size-full wp-image-691" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/blog-details-3.jpg 370w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/blog-details-3-300x300.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/blog-details-3-150x150.jpg 150w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/blog-details-3-60x60.jpg 60w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/blog-details-3-348x348.jpg 348w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/blog-details-3-100x100.jpg 100w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/blog-details-3-270x270.jpg 270w" sizes="(max-width: 370px) 100vw, 370px" /></figure>
                    </div>
                  </div>
                </div>
                <div className="text">
                  <p>Many desktop publishing packages and web page editors now use lorem ipsum as their default model text and a search.</p>
                  <p>Uncover many web sites still in their infancy. Various versions have evolved over the years.</p>
                  <p>Accident, sometimes on purpose (injected humour and the like).</p>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old, Richard McClintock.</p>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="post-share-option">
              <div className="icon-box"><i className="flaticon-hashtag" /></div>
              <ul className="tag-list centred">
                <li><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/tag/industries/" rel="tag">Industries</a></li><li> <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/tag/permanent/" rel="tag">Permanent</a></li><li> <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/tag/timesheets/" rel="tag">Timesheets</a></li>                          </ul>
              <div className="social-box">
                <ul className="social-links clearfix">
                  <li><a className="facebook" href="http://www.facebook.com/sharer.php?u=http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/" target="_blank"><i className="fab fa-facebook-f" />Facebook</a></li>
                  <li><a className="twitter" href="https://twitter.com/share?url=http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/&text=does-my-business-need-a-director-of-training-2" target="_blank"><i className="fab fa-twitter" />Twiter</a></li>
                  <li><a className="linkedin" href="http://www.linkedin.com/shareArticle?url=http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/&title=does-my-business-need-a-director-of-training-2"><i className="fab fa-linkedin" />Linkedin</a></li>
                  <li><a className="pinterest" href="https://pinterest.com/pin/create/bookmarklet/?url=http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/&description=does-my-business-need-a-director-of-training-2"><i className="fab fa-pinterest" />Pinterest</a></li>
                </ul>
              </div>
            </div>
            <div className="author-box centred">
              <div className="inner">
                <div className="icon-layer" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/icons/icon-70.png)'}} />
                <figure className="signature"><img src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/icons/signature-2.png" alt="Awesome Image" /></figure>
                <figure className="image-box">
                  <img alt src="http://2.gravatar.com/avatar/e7b9b29c4fdd4d4ec28699064fe80204?s=100&d=mm&r=g" srcSet="http://2.gravatar.com/avatar/e7b9b29c4fdd4d4ec28699064fe80204?s=200&d=mm&r=g 2x" className="avatar avatar-100 photo" height={100} width={100} loading="lazy" />                                                                  </figure>
                <h3>admin</h3>
                <span>View all post: <a href="http://my.blog.com"> http://my.blog.com</a></span>
                <p>Denouncing pleasure and praising pain was born and I will give complete all account of the system &amp; expound.</p>
                <ul className="social-links">
                  <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><span className="fab fa-facebook" /></a></li>
                  <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><span className="fab fa-linkedin" /></a></li>
                  <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><span className="fab fa-skype" /></a></li>
                  <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(70, 43, 52)'}}><span className="fab fa-twitter" /></a></li>
                </ul>
              </div>
            </div>
            <div className="nav-btn-box">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 btn-column">
                  <div className="left-btn">
                    <figure className="image-box"><img width={770} height={600} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/news-9.jpg" className="attachment-eazyrecruitz_70x70 size-eazyrecruitz_70x70 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/news-9.jpg 770w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/news-9-300x234.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/news-9-768x598.jpg 768w" sizes="(max-width: 770px) 100vw, 770px" /></figure>
                    <div className="inner">
                      <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/what-are-the-2020-staffing-trends-in-usa-2/"><i className="flaticon-left-1" />Prev Post</a>
                      <h5><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/what-are-the-2020-staffing-trends-in-usa-2/">What are the 2020 Staffing Trends in USA</a></h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 btn-column">
                  <div className="right-btn">
                    <figure className="image-box"><img width={770} height={600} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/news-7.jpg" className="attachment-eazyrecruitz_70x70 size-eazyrecruitz_70x70 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/news-7.jpg 770w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/news-7-300x234.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/news-7-768x598.jpg 768w" sizes="(max-width: 770px) 100vw, 770px" /></figure>
                    <div className="inner">
                      <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/5-effective-ways-to-hire-more-workers-2/">Next Post<i className="flaticon-right-1" /></a>
                      <h5><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/5-effective-ways-to-hire-more-workers-2/">5 Effective Ways to Hire More Workers</a></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single blog Post*/}
            <div className="comment-box post-comments" id="comments">
              <div className="group-title">
                <h2>
                  3 Replies to “Does My Business Need a Director of Training?”    	</h2>
              </div>
              <div className="eazy-comment-item">
                <div className="comments">
                  <div className="comment even thread-even depth-1 comment" id="comment-1">
                    <figure className="thumb-box">
                      <img alt src="http://2.gravatar.com/avatar/bb6b093d6db269eabaf0de85301c1d06?s=80&d=mm&r=g" className="avatar avatar-80 photo" height={80} width={80} loading="lazy" />              </figure>
                    <div className="comment-inner">
                      <div className="comment-info">
                        <h3>Isaac Herman</h3>
                        <span className="comment-time">09 Sep 2020</span>
                      </div>
                      <p>How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                      <a rel="nofollow" className="comment-reply-link reply reply-btn" href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/?replytocom=1#respond" data-commentid={1} data-postid={680} data-belowelement="comment-1" data-respondelement="respond" data-replyto="Reply to Isaac Herman" aria-label="Reply to Isaac Herman"><i className="flaticon-reply" />Reply</a>              </div>
                  </div>
                </div>
                <div className="eazy-comment-item">
                  <div className="comments">
                    <div className="comment odd alt depth-2 comment" id="comment-3">
                      <figure className="thumb-box">
                        <img alt src="http://1.gravatar.com/avatar/dcd1ef25e108ae391338cb43b56ba8e6?s=80&d=mm&r=g" className="avatar avatar-80 photo" height={80} width={80} loading="lazy" />              </figure>
                      <div className="comment-inner">
                        <div className="comment-info">
                          <h3>Herman Cobus</h3>
                          <span className="comment-time">09 Sep 2020</span>
                        </div>
                        <p>Undertakes laborious physical exercise, except to obtain some advantage from it but who has any right to find fault.</p>
                        <a rel="nofollow" className="comment-reply-link reply reply-btn" href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/?replytocom=3#respond" data-commentid={3} data-postid={680} data-belowelement="comment-3" data-respondelement="respond" data-replyto="Reply to Herman Cobus" aria-label="Reply to Herman Cobus"><i className="flaticon-reply" />Reply</a>              </div>
                    </div>
                  </div>
                </div>{/* #comment-## */}
              </div>{/* #comment-## */}
              <div className="eazy-comment-item">
                <div className="comments">
                  <div className="comment even thread-odd thread-alt depth-1 comment" id="comment-2">
                    <figure className="thumb-box">
                      <img alt src="http://2.gravatar.com/avatar/59c82b1d2c60537f900fb191b3cb611b?s=80&d=mm&r=g" className="avatar avatar-80 photo" height={80} width={80} loading="lazy" />              </figure>
                    <div className="comment-inner">
                      <div className="comment-info">
                        <h3>William Cobus</h3>
                        <span className="comment-time">09 Sep 2020</span>
                      </div>
                      <p>Undertakes laborious physical exercise, except to obtain some advantage from it but who has any right to find fault.</p>
                      <a rel="nofollow" className="comment-reply-link reply reply-btn" href="http://www.el.commonsupport.com/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/?replytocom=2#respond" data-commentid={2} data-postid={680} data-belowelement="comment-2" data-respondelement="respond" data-replyto="Reply to William Cobus" aria-label="Reply to William Cobus"><i className="flaticon-reply" />Reply</a>              </div>
                  </div>
                </div>
              </div>{/* #comment-## */}
            </div>
            <div id="respond" className="comments-form-area">
              <div className="group-title"><h2>Leave A Comment <small><a rel="nofollow" id="cancel-comment-reply-link" href="/newwp/eazyrecruitz/2020/09/09/does-my-business-need-a-director-of-training-2/#respond" style={{display: 'none'}}>Cancel reply</a></small></h2></div>                <form action="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-comments-post.php" method="post" id="contact-form" className="default-form add-comment-form comment-form" noValidate>
                <div className="row clearfix">
                  <div className="col-md-12"><div className="row"><div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input id="author" name="author" placeholder="Name" type="text" className="form-control" defaultValue size={30} maxLength={245} aria-required="true" required="required" />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input id="email" placeholder="Email" className="form-control" name="email" type="email" defaultValue size={30} maxLength={100} /></div></div></div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group"><textarea placeholder="Type Comment here" id="comment" name="comment" className="form-control" rows={7} required="required" defaultValue={""} /></div>                        <div className="btn-send col-sm-12 col-xs-12"><div className="row"><div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn"><button name="submit" type="submit" id="submit" className="submit theme-btn-one" value="Leave a Comment">Post Comment</button></div></div> <input type="hidden" name="comment_post_ID" defaultValue={680} id="comment_post_ID" />
                    <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                  </div>                  </div>
              </form>
            </div>
          </div>
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
          </div><div id="eazyrecruitz_our_projects-2" className="widget sidebar-widget widget_eazyrecruitz_our_projects">		
            {/* Instagram Widget */}
            <div className="gallery-widget">
              <div className="widget-title"><h3>Our Projects</h3><i className="flaticon-note" /></div>            <div className="widget-content">
                <ul className="image-list clearfix">
                  {/* Title */}
                  <li>
                    <figure className="image-box">
                      <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-32.jpg" className="lightbox-image" data-fancybox="gallery">
                        <img width={100} height={100} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-32-100x100.jpg" className="attachment-eazyrecruitz_100x100 size-eazyrecruitz_100x100 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-32-100x100.jpg 100w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-32-150x150.jpg 150w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-32-60x60.jpg 60w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-32-270x270.jpg 270w" sizes="(max-width: 100px) 100vw, 100px" />                  </a>
                    </figure>
                  </li>
                  <li>
                    <figure className="image-box">
                      <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-33.jpg" className="lightbox-image" data-fancybox="gallery">
                        <img width={100} height={100} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-33-100x100.jpg" className="attachment-eazyrecruitz_100x100 size-eazyrecruitz_100x100 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-33-100x100.jpg 100w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-33-300x300.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-33-150x150.jpg 150w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-33-60x60.jpg 60w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-33-348x348.jpg 348w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-33-370x370.jpg 370w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-33-270x270.jpg 270w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-33-442x442.jpg 442w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-33.jpg 570w" sizes="(max-width: 100px) 100vw, 100px" />                  </a>
                    </figure>
                  </li>
                  <li>
                    <figure className="image-box">
                      <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-31.jpg" className="lightbox-image" data-fancybox="gallery">
                        <img width={100} height={100} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-31-100x100.jpg" className="attachment-eazyrecruitz_100x100 size-eazyrecruitz_100x100 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-31-100x100.jpg 100w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-31-150x150.jpg 150w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-31-60x60.jpg 60w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-31.jpg 270w" sizes="(max-width: 100px) 100vw, 100px" />                  </a>
                    </figure>
                  </li>
                  <li>
                    <figure className="image-box">
                      <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-30.jpg" className="lightbox-image" data-fancybox="gallery">
                        <img width={100} height={100} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-30-100x100.jpg" className="attachment-eazyrecruitz_100x100 size-eazyrecruitz_100x100 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-30-100x100.jpg 100w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-30-300x300.jpg 300w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-30-150x150.jpg 150w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-30-60x60.jpg 60w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-30-348x348.jpg 348w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-30-370x370.jpg 370w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-30-270x270.jpg 270w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-30-442x442.jpg 442w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-30.jpg 570w" sizes="(max-width: 100px) 100vw, 100px" />                  </a>
                    </figure>
                  </li>
                  <li>
                    <figure className="image-box">
                      <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-29.jpg" className="lightbox-image" data-fancybox="gallery">
                        <img width={100} height={100} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-29-100x100.jpg" className="attachment-eazyrecruitz_100x100 size-eazyrecruitz_100x100 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-29-100x100.jpg 100w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-29-150x150.jpg 150w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-29-60x60.jpg 60w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-29-270x270.jpg 270w" sizes="(max-width: 100px) 100vw, 100px" />                  </a>
                    </figure>
                  </li>
                  <li>
                    <figure className="image-box">
                      <a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-28.jpg" className="lightbox-image" data-fancybox="gallery">
                        <img width={100} height={100} src="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-28-100x100.jpg" className="attachment-eazyrecruitz_100x100 size-eazyrecruitz_100x100 wp-post-image" alt loading="lazy" srcSet="http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-28-100x100.jpg 100w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-28-150x150.jpg 150w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-28-60x60.jpg 60w, http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/uploads/2020/09/project-28-270x270.jpg 270w" sizes="(max-width: 100px) 100vw, 100px" />                  </a>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </div><div id="eazyrecruitz_educational_resources-2" className="widget sidebar-widget widget_eazyrecruitz_educational_resources">      		
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
          </div>		</div>
      </div>
    </div>
  </div>
</section>



            <Footer></Footer>
        </div>
    );
}

export default Singleblogs;
