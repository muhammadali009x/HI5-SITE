import '../Component/MeetOutTeam/Team.css'


export default function PageBanner(props) {
  return (
   <div>
        {/* Team Top Section Here */}
        <section className="page-title" style={{backgroundImage: 'url("http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/background/page-title.jpg")'}}>
  <div className="pattern-layer" style={{backgroundImage: 'url(http://www.el.commonsupport.com/newwp/eazyrecruitz/wp-content/themes/eazyrecruitz/assets/images/shape/pattern-35.png)'}} />
  <div className="auto-container">
    <div className="content-box">
      <div className="title-box centred">
        <h1> {props.PageTitile}</h1>
        <p>{props.PageDes}</p>
      </div>
      <ul className="bread-crumb clearfix">
        <li className="breadcrumb-item"><a href="http://www.el.commonsupport.com/newwp/eazyrecruitz/">Home &nbsp;</a></li><li className="breadcrumb-item">{props.PageName}</li>              </ul>
    </div>
  </div>
</section>

            {/* Team Top Section Here */}
   </div>
  )
}
