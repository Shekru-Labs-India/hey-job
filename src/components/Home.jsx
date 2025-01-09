import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import company1 from "../assets/img/company_logo_1.png";
import company2 from "../assets/img/company_logo_2.png";
import company3 from "../assets/img/company_logo_3.png";
import company4 from "../assets/img/company_logo_4.png";
import company5 from "../assets/img/company_logo_5.png";
import company6 from "../assets/img/company_logo_6.png";
import company7 from "../assets/img/company_logo_7.png";
import company8 from "../assets/img/company_logo_8.png";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const jobsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setJobs(jobsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs: ", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Header />

      <section className="padd-top-80 padd-bot-80">
        <div className="container">
          <ul className="nav nav-tabs nav-advance theme-bg" role="tablist">
            <li className="nav-item active">
              {" "}
              <a
                className="nav-link"
                data-toggle="tab"
                href="#recent"
                role="tab"
              >
                {" "}
                Latest Jobs
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link" data-toggle="tab" href="#" role="tab">
                {" "}
                Recent Jobs
              </a>{" "}
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade in show active"
              id="recent"
              role="tabpanel"
            >
              <div className="row">
                {loading ? (
                  <div className="col-12 text-center">Loading jobs...</div>
                ) : (
                  jobs.map((job) => (
                    <div className="col-md-3 col-sm-6" key={job.id}>
                      <div className="utf_grid_job_widget_area pt-0">
                        <div
                          className="u-content px-0"
                          style={{ position: "relative" }}
                        >
                          <div
                            className={
                              job.image
                                ? "avatar-square box-80"
                                : "avatar box-80"
                            }
                            style={{ width: "100%" }}
                          >
                            <a href="employer-detail.html">
                              <img
                                className="img-responsive"
                                src={job.image ? job.image : company1}
                                alt={job.companyDetails}
                                style={{
                                  width: "100%",
                                  height: "200px",
                                  objectFit: "cover",
                                }}
                              />
                            </a>
                          </div>
                          <span className="job-type bg-success border-1 text-white position-absolute top-2 start-2">
                            {job.category}
                          </span>
                          <h5 className="pt-3">
                            <a href="employer-detail.html">{job.jobTitle}</a>
                          </h5>
                          <p className="text-muted mb-0">
                            <i className="fa fa-briefcase"></i>{" "}
                            {job.jobPosition}
                          </p>
                          <p className="text-muted py-0 my-0">
                            <i className="fas fa-dollar-sign"></i>{" "}
                            {job.package}+ LPA
                          </p>
                        </div>
                        <div className="utf_apply_job_btn_item">
                          <a
                            href="job-detail.html"
                            className="btn job-browse-btn btn-radius br-light"
                          >
                            Apply
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            {/* Featured Job */}
            <div className="tab-pane fade" id="featured" role="tabpanel">
              <div className="row">
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
                            src={company6}
                            alt=""
                          />{" "}
                        </a>{" "}
                      </div>
                      <h5>
                        <a href="employer-detail.html">.Net Developer</a>
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
                            src={company4}
                            alt=""
                          />{" "}
                        </a>{" "}
                      </div>
                      <h5>
                        <a href="employer-detail.html">Java Developer</a>
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
                            src={company5}
                            alt=""
                          />{" "}
                        </a>{" "}
                      </div>
                      <h5>
                        <a href="employer-detail.html">Web Maintenence</a>
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
                            src={company1}
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
                        Apply Now
                      </a>{" "}
                    </div>
                  </div>
                </div>
                {/* Single Job */}
                <div className="col-md-3 col-sm-6">
                  <div className="utf_grid_job_widget_area">
                    {" "}
                    <span className="job-type internship-type">Internship</span>
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
                            src={company7}
                            alt=""
                          />{" "}
                        </a>{" "}
                      </div>
                      <h5>
                        <a href="employer-detail.html">Custom Php Developer</a>
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
                            src={company8}
                            alt=""
                          />{" "}
                        </a>{" "}
                      </div>
                      <h5>
                        <a href="employer-detail.html">New Product Mockup</a>
                      </h5>
                      <p className="text-muted">2865 Emma Street, Lubbock</p>
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
                            src={company3}
                            alt=""
                          />{" "}
                        </a>{" "}
                      </div>
                      <h5>
                        <a href="employer-detail.html">Product Redesign</a>
                      </h5>
                      <p className="text-muted">2719 Burnside Avenue, Logan</p>
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
                            src={company6}
                            alt=""
                          />{" "}
                        </a>{" "}
                      </div>
                      <h5>
                        <a href="employer-detail.html">Front End Designer</a>
                      </h5>
                      <p className="text-muted">
                        3815 Forest Drive, Alexandria
                      </p>
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
              </div>
            </div>
          </div>
          <div className="col-md-12 mrg-top-20 text-center">
            <a href="job-layout-one.html" className="btn theme-btn btn-m">
              Browse All Jobs
            </a>
          </div>
        </div>
      </section>

      <section className="utf_job_category_area">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="heading">
                <h2>Job Categories</h2>
                <p>
                  Lorem Ipsum is simply dummy text printing and type setting
                  industry. Lorem Ipsum has been the industry <br /> standard
                  dummy text ever since an unknown printer took a galley.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              { title: "Web & Software Dev", jobs: 122, icon: "fa-chart-bar" },
              {
                title: "Data Science & Analytics",
                jobs: 155,
                icon: "fa-chart-pie",
              },
              {
                title: "Accounting & Consulting",
                jobs: 300,
                icon: "fa-briefcase",
              },
              {
                title: "Writing & Translations",
                jobs: 80,
                icon: "fa-pen-ruler",
              },
              { title: "Sales & Marketing", jobs: 120, icon: "fa-chart-line" },
              { title: "Graphics & Design", jobs: 78, icon: "fa-palette" },
              { title: "Digital Marketing", jobs: 90, icon: "fa-globe" },
              {
                title: "Education & Training",
                jobs: 210,
                icon: "fa-chalkboard-teacher",
              },
            ].map((category, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-3 mb-4">
                <a href="browse-job.html" title={category.title}>
                  <div className="utf_category_box_area">
                    <div className="utf_category_desc">
                      <div className="utf_category_icon">
                        <i
                          className={`fa-solid ${category.icon}`}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="category-detail utf_category_desc_text">
                        <h4>{category.title}</h4>
                        <p>{category.jobs} Jobs</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
            <div className="col-12 text-center mt-3">
              <a href="browse-category.html" className="btn theme-btn btn-m">
                View All Categories
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
