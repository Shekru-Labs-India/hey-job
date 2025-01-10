import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { CATEGORIES } from '../config/categories';
import company1 from "../assets/img/company_logo_1.png";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobsAndCategories = async () => {
      try {
        setLoading(true);
        // Fetch all jobs
        const jobsSnapshot = await getDocs(collection(db, "jobs"));
        const jobsData = jobsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          jobTitle: doc.data().jobTitle || '',
          jobDescription: doc.data().jobDescription || '',
          jobPosition: doc.data().jobPosition || '',
          skills: doc.data().skills || [],
          jobType: doc.data().jobType || 'Full Time',
          package: doc.data().package || '0',
          location: doc.data().location || 'Not Specified',
          category: doc.data().category || '',
          companyDetails: doc.data().companyDetails || '',
          image: doc.data().image || '',
          createdAt: doc.data().createdAt || { seconds: 0 }
        }));

        // Sort jobs by date
        const sortedJobs = jobsData.sort((a, b) => 
          (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
        );

        setJobs(sortedJobs);

        // Calculate category counts using shared CATEGORIES
        const categoryCounts = CATEGORIES.map(cat => {
          const count = jobsData.filter(job => job.category === cat.value).length;
          return {
            ...cat,
            jobs: count
          };
        });

        setCategories(categoryCounts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchJobsAndCategories();
  }, []);

  const handleCategoryClick = (urlSlug) => {
    navigate(`/category/${urlSlug}`);
  };

  const handleJobClick = (jobId, jobTitle) => {
    const formattedTitle = jobTitle.toLowerCase().replace(/\s+/g, '+');
    navigate(`/job-detail/${formattedTitle}/${jobId}`);
  };

  return (
    <>
      <Header />

      <section className="padd-top-80 padd-bot-80">
        <div className="container">
          {/* <ul className="nav nav-tabs nav-advance theme-bg" role="tablist">
            <li className="nav-item active">
              <a className="nav-link" data-toggle="tab" href="#recent" role="tab">
                Latest Jobs
              </a>
            </li>
          </ul> */}
          <div className="tab-content">
            <div
              className="tab-pane fade in show active"
              id="recent"
              role="tabpanel"
            >
              <div className="row">
                {loading ? (
                  <div className="col-12 text-center">Loading jobs...</div>
                ) : jobs.length === 0 ? (
                  <div className="col-12 text-center">No jobs available</div>
                ) : (
                  jobs.map((job) => (
                    <div className="col-md-3 col-sm-6" key={job.id}>
                      <div
                        className="utf_grid_job_widget_area pt-0"
                        onClick={() => handleJobClick(job.id, job.jobTitle)}
                        style={{ cursor: "pointer" }}
                      >
                        <div
                          className="u-content px-0"
                          style={{ position: "relative" }}
                        >
                          <div
                            className="avatar-square box-80"
                            style={{ width: "100%" }}
                          >
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleJobClick(job.id, job.jobTitle);
                              }}
                            >
                              <div
                                className="category-icon-fallback"
                                style={{
                                  display: "flex",
                                  width: "100%",
                                  height: "200px",
                                  backgroundColor: "#f8f9fa",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  fontSize: "4rem",
                                  color: "#26ae61",
                                  borderRadius: "8px",
                                  padding: "2rem",
                                  position: "relative",
                                  zIndex: 1,
                                }}
                              >
                                <i
                                  className="fa-solid fa-house"
                                  style={{ fontSize: "3.5rem" }}
                                ></i>
                              </div>

                              <img
                                className="img-responsive"
                                src={job.image}
                                alt={job.companyDetails}
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                                style={{
                                  width: "100%",
                                  height: "200px",
                                  objectFit: "cover",
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  borderRadius: "8px",
                                  zIndex: 2,
                                }}
                              />
                            </a>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              zIndex: 3,
                            }}
                          >
                            <span className="job-type bg-success border-1 text-white position-absolute top-2 start-2">
                              {CATEGORIES.find(
                                (cat) => cat.value === job.category
                              )?.displayName || job.category}
                            </span>
                          </div>
                          <h5 className="pt-3 px-3 ">
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleJobClick(job.id, job.jobTitle);
                              }}
                            >
                              {job.jobTitle}
                            </a>
                          </h5>
                          <p className="text-muted mb-0">
                            <i className="fa fa-briefcase"></i>{" "}
                            {job.jobPosition}
                          </p>
                          <p className="text-muted py-0 my-0">
                            <i className="fas fa-wallet"></i> {job.package}+ LPA
                          </p>
                        </div>
                        <div className="utf_apply_job_btn_item">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleJobClick(job.id, job.jobTitle);
                            }}
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
                  Browse jobs by category and find the perfect position for your
                  next career move
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {loading ? (
              <div className="col-12 text-center">Loading categories...</div>
            ) : categories.length === 0 ? (
              <div className="col-12 text-center">No categories available</div>
            ) : (
              categories.map((category, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-3 mb-4">
                  <div
                    className="utf_category_box_area"
                    onClick={() => handleCategoryClick(category.urlSlug)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="utf_category_desc">
                      <div className="utf_category_icon">
                        <i
                          className={`fa-solid ${category.icon}`}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="category-detail utf_category_desc_text">
                        <h4>{category.displayName}</h4>
                        <p>
                          {category.jobs} {category.jobs === 1 ? "Job" : "Jobs"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
            {categories.length > 0 && (
              <div className="col-12 text-center mt-3">
                <button
                  onClick={() => navigate("/categories")}
                  className="btn theme-btn btn-m"
                >
                  View All Categories
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
