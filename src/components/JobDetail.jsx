import React from 'react'
import Footer from './Footer'
import company1 from '../assets/img/company_logo_1.png'
import company2 from '../assets/img/company_logo_2.png'
import company3 from '../assets/img/company_logo_3.png'
import company4 from '../assets/img/company_logo_4.png'
import Header from './Header'

const JobDetail = () => {
  return (
    
   <>

   <Header/>
    
    <div className="page-title">
  <div className="container">
    <div className="page-caption">
      <h2>Job Detail</h2>
      <p>
        <a href="#" title="Home">
          Home
        </a>{" "}
        <i className="ti-angle-double-right" /> Job Detail
      </p>
    </div>
  </div>
</div>


   <section className="padd-top-80 padd-bot-60">
  <div className="container">
    {/* row */}
    <div className="row">
      <div className="col-md-8 col-sm-7">
        <div className="detail-wrapper">
          <div className="detail-wrapper-body">
            <div className="row">
              <div className="col-md-4 text-center user_profile_img">
                {" "}
                <img
                  src={company1}
                  className="width-100"
                  alt=""
                />
                <h4 className="meg-0">Web Designer</h4>
                <span>512 Big Tower, New Delhi</span>
                <div className="text-center">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#signin"
                    className="btn-job theme-btn job-apply"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="col-md-8 user_job_detail">
                <div className="col-sm-12 mrg-bot-10">
                  {" "}
                  <i className="ti-credit-card padd-r-10" />
                  20K To 50K/Month{" "}
                </div>
                <div className="col-sm-12 mrg-bot-10">
                  {" "}
                  <i className="ti-mobile padd-r-10" />
                  91 234 567 8765{" "}
                </div>
                <div className="col-sm-12 mrg-bot-10">
                  {" "}
                  <i className="ti-email padd-r-10" />
                  mail@example.com{" "}
                </div>
                <div className="col-sm-12 mrg-bot-10">
                  {" "}
                  <i className="ti-calendar padd-r-10" />
                  <span className="full-type">Full Time</span>{" "}
                </div>
                <div className="col-sm-12 mrg-bot-10">
                  {" "}
                  <i className="ti-user padd-r-10" />
                  <span className="cl-danger">7 Open Position</span>{" "}
                </div>
                <div className="col-sm-12 mrg-bot-10">
                  {" "}
                  <i className="ti-shield padd-r-10" />3 Year Exp.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-wrapper">
          <div className="detail-wrapper-header">
            <h4>Job Description</h4>
          </div>
          <div className="detail-wrapper-body">
            <p>
              "On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue.
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
          </div>
        </div>
        <div className="detail-wrapper">
          <div className="detail-wrapper-header">
            <h4>Job Skill</h4>
          </div>
          <div className="detail-wrapper-body">
            <ul className="detail-list">
              <li>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text{" "}
              </li>
              <li>Latin professor at Hampden-Sydney College in Virginia </li>
              <li>
                looked up one of the more obscure Latin words, consectetur, from
                a Lorem Ipsum passage ideas{" "}
              </li>
              <li>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced{" "}
              </li>
              <li>
                accompanied by English versions from the 1914 translation by H.
                Rackham{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="detail-wrapper">
          <div className="detail-wrapper-header">
            <h4>Location</h4>
          </div>
          <div className="detail-wrapper-body">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.566512514854!2d76.8192921147794!3d30.702470481647698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fecca1d6c0001%3A0xe4953728a502a8e2!2sChandigarh!5e0!3m2!1sen!2sin!4v1520136168627"
              width="100%"
              height={320}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
            />
          </div>
        </div>
        <div className="detail-wrapper">
          <div className="detail-wrapper-header">
            <h4>Requirements</h4>
          </div>
          <div className="detail-wrapper-body">
            <ul className="detail-list">
              <li>
                There are many variations of passages of Lorem Ipsum available
              </li>
              <li>
                the majority have suffered alteration in some form slightly
              </li>
              <li>
                you need to be sure there isn't anything embarrassing hidden
              </li>
              <li>
                generators on the Internet tend to repeat predefined chunks as
                necessary
              </li>
              <li>
                making this the first true generator on the Internet It uses a
                dictionary
              </li>
              <li>Ability to solve problems creatively and effectively</li>
              <li>combined with a handful of model sentence structures</li>
              <li>
                standard chunk of Lorem Ipsum used since the 1500s is reproduced
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className="col-md-4 col-sm-5">
        <div className="sidebar">
          {/* Start: Job Overview */}
          <div className="widget-boxed">
            <div className="widget-boxed-header">
              <h4>
                <i className="ti-location-pin padd-r-10" />
                Location
              </h4>
            </div>
            <div className="widget-boxed-body">
              <div className="side-list no-border">
                <ul>
                  <li>
                    <i className="ti-credit-card padd-r-10" />
                    Package: 20K To 50K/Month
                  </li>
                  <li>
                    <i className="ti-world padd-r-10" />
                    https://www.example.com
                  </li>
                  <li>
                    <i className="ti-mobile padd-r-10" />
                    91 234 567 8765
                  </li>
                  <li>
                    <i className="ti-email padd-r-10" />
                    mail@example.com
                  </li>
                  <li>
                    <i className="ti-pencil-alt padd-r-10" />
                    Bachelor Degree
                  </li>
                  <li>
                    <i className="ti-shield padd-r-10" />3 Year Exp.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End: Job Overview */}
          {/* Start: Opening hour */}
          <div className="widget-boxed">
            <div className="widget-boxed-header">
              <h4>
                <i className="ti-time padd-r-10" />
                Opening Hours
              </h4>
            </div>
            <div className="widget-boxed-body">
              <div className="side-list">
                <ul>
                  <li>
                    Monday <span>9 AM - 5 PM</span>
                  </li>
                  <li>
                    Tuesday <span>9 AM - 5 PM</span>
                  </li>
                  <li>
                    Wednesday <span>9 AM - 5 PM</span>
                  </li>
                  <li>
                    Thursday <span>9 AM - 5 PM</span>
                  </li>
                  <li>
                    Friday <span>9 AM - 5 PM</span>
                  </li>
                  <li>
                    Saturday <span>9 AM - 3 PM</span>
                  </li>
                  <li>
                    Sunday <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Start: Location */}
          <div className="widget-boxed">
            <div className="widget-boxed-header">
              <h4>
                <i className="ti-time padd-r-10" />
                Location
              </h4>
            </div>
            <div className="widget-boxed-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.566512514854!2d76.8192921147794!3d30.702470481647698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fecca1d6c0001%3A0xe4953728a502a8e2!2sChandigarh!5e0!3m2!1sen!2sin!4v1520136168627"
                width="100%"
                height={360}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Row */}
    <div className="row">
      <div className="col-md-12">
        <h4 className="mrg-bot-30">Similar Jobs</h4>
      </div>
    </div>
    <div className="row">
      {/* Single Job */}
      <div className="col-md-3 col-sm-6">
        <div className="utf_grid_job_widget_area">
          {" "}
          <span className="job-type full-type">Full Time</span>
          <div className="utf_job_like">
            <label className="toggler toggler-danger">
              <input type="checkbox" defaultChecked="" />
              <i className="fa fa-heart" />
            </label>
          </div>
          <div className="u-content">
            <div className="avatar box-80">
              {" "}
              <a href="employer-detail.html">
                {" "}
                <img
                  className="img-responsive"
                  src={company1}
                  alt=""
                />{" "}
              </a>{" "}
            </div>
            <h5>
              <a href="employer-detail.html">Product Redesign</a>
            </h5>
            <p className="text-muted">2708 Scenic Way, IL 62373</p>
          </div>
          <div className="utf_apply_job_btn_item">
            {" "}
            <a
              href="job-detail.html"
              className="btn job-browse-btn btn-radius br-light"
            >
              Apply Now
            </a>{" "}
          </div>
        </div>
      </div>
      {/* Single Job */}
      <div className="col-md-3 col-sm-6">
        <div className="utf_grid_job_widget_area">
          {" "}
          <span className="job-type full-type">Full Time</span>
          <div className="utf_job_like">
            <label className="toggler toggler-danger">
              <input type="checkbox" />
              <i className="fa fa-heart" />
            </label>
          </div>
          <div className="u-content">
            <div className="avatar box-80">
              {" "}
              <a href="employer-detail.html">
                {" "}
                <img
                  className="img-responsive"
                  src={company2}
                  alt=""
                />{" "}
              </a>{" "}
            </div>
            <h5>
              <a href="employer-detail.html">New Product Mockup</a>
            </h5>
            <p className="text-muted">2708 Scenic Way, IL 62373</p>
          </div>
          <div className="utf_apply_job_btn_item">
            {" "}
            <a
              href="job-detail.html"
              className="btn job-browse-btn btn-radius br-light"
            >
              Apply Now
            </a>{" "}
          </div>
        </div>
      </div>
      {/* Single Job */}
      <div className="col-md-3 col-sm-6">
        <div className="utf_grid_job_widget_area">
          {" "}
          <span className="job-type part-type">Full Time</span>
          <div className="utf_job_like">
            <label className="toggler toggler-danger">
              <input type="checkbox" defaultChecked="" />
              <i className="fa fa-heart" />
            </label>
          </div>
          <div className="u-content">
            <div className="avatar box-80">
              {" "}
              <a href="employer-detail.html">
                {" "}
                <img
                  className="img-responsive"
                  src={company3}
                  alt=""
                />{" "}
              </a>{" "}
            </div>
            <h5>
              <a href="employer-detail.html">Custom Php Developer</a>
            </h5>
            <p className="text-muted">3765 C Street, Worcester</p>
          </div>
          <div className="utf_apply_job_btn_item">
            {" "}
            <a
              href="job-detail.html"
              className="btn job-browse-btn btn-radius br-light"
            >
              Apply Now
            </a>{" "}
          </div>
        </div>
      </div>
      {/* Single Job */}
      <div className="col-md-3 col-sm-6">
        <div className="utf_grid_job_widget_area">
          {" "}
          <span className="job-type part-type">Part Time</span>
          <div className="utf_job_like">
            <label className="toggler toggler-danger">
              <input type="checkbox" />
              <i className="fa fa-heart" />
            </label>
          </div>
          <div className="u-content">
            <div className="avatar box-80">
              {" "}
              <a href="employer-detail.html">
                {" "}
                <img
                  className="img-responsive"
                  src={company4}
                  alt=""
                />{" "}
              </a>{" "}
            </div>
            <h5>
              <a href="employer-detail.html">Wordpress Developer</a>
            </h5>
            <p className="text-muted">2719 Duff Avenue, Winooski</p>
          </div>
          <div className="utf_apply_job_btn_item">
            {" "}
            <a
              href="job-detail.html"
              className="btn job-browse-btn btn-radius br-light"
            >
              Apply Now{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer/>
   
   </>

  )
}

export default JobDetail