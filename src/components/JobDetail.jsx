import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { db } from '../config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { CATEGORIES } from '../config/categories'
import company1 from '../assets/img/company_logo_1.png'
import JobMeta from './JobMeta'

const JobDetail = () => {
  const { id, title } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const jobDoc = await getDoc(doc(db, "jobs", id));
        if (jobDoc.exists()) {
          const jobData = { id: jobDoc.id, ...jobDoc.data() };
          console.log('Job data loaded:', jobData);
          setJob(jobData);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job details: ", error);
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [id, title]);

  if (loading) {
    return <div className="text-center p-5">Loading...</div>;
  }

  if (!job) {
    return <div className="text-center p-5">Job not found</div>;
  }

  return (
    <>
      {job && console.log('Rendering JobMeta with:', job)}
      <JobMeta job={job} />
      <Header />
      <div className="page-title">
        <div className="container">
          <div className="page-caption">
            <h2>Job Detail</h2>
            <p>
              <a href="/">Home</a> <i className="fa fa-angle-double-right"></i> Job
              Detail
            </p>
          </div>
        </div>
      </div>

      <section className="padd-top-80 padd-bot-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-7">
              <div className="row">
                <div className="col-md-4">
                  <div className="utf_grid_job_widget_area pt-0 pb-0">
                    <div className="u-content px-0" style={{ position: "relative" }}>
                      <div className="avatar-square box-80" style={{ width: "100%", position: "relative" }}>
                        <a>
                          <div 
                            className="category-icon-fallback"
                            style={{
                              display: 'flex',
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
                              zIndex: 1
                            }}
                          >
                            <i className="fa-solid fa-house" style={{ fontSize: "3.5rem" }}></i>
                          </div>
                         
                          <img
                            className="img-responsive"
                            src={job.image}
                            alt={job.companyDetails}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "cover",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              borderRadius: "8px",
                              zIndex: 2
                            }}
                          />
                        </a>
                      </div>
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 3 }}>
                        <span className="job-type bg-success border-1 text-white position-absolute top-2 start-2">
                          {CATEGORIES.find(cat => cat.value === job.category)?.displayName || job.category}
                        </span>
                      </div>
                      <h5 className="pt-3">
                        <a>{job.jobTitle}</a>
                      </h5>
                      <p className="text-muted mb-0">
                        <i className="fa fa-briefcase"></i> {job.jobPosition}
                      </p>
                      <p className="text-muted py-0 my-0">
                        <i className="fas fa-wallet"></i> {job.package}+ LPA
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="detail-wrapper">
                    <div className="detail-wrapper-body">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="col-sm-12 mrg-bot-10">
                            <i className="fas fa-wallet padd-r-10" />
                            Package: {job.package}+ LPA
                          </div>
                          <div className="col-sm-12 mrg-bot-10">
                            <i className="fas fa-list padd-r-10" />
                            Category: {job.category}
                          </div>
                          <div className="col-sm-12 mrg-bot-10">
                            <i className="fas fa-briefcase padd-r-10" />
                            Position: {job.jobPosition}
                          </div>
                          <div className="col-sm-12 mrg-bot-10">
                            <i className="fas fa-building padd-r-10" />
                            Company: {job.companyDetails}
                          </div>
                          <div className="col-sm-12 mrg-bot-10">
                            <i className="fas fa-map-marker-alt padd-r-10" />
                            Location: {job.location}
                          </div>

                          <div className="col-sm-12 mrg-bot-10">
                            <i className="fas fa-clock padd-r-10" />
                            Posted On:{" "}
                            {job.createdAt
                              ? new Date(job.createdAt.seconds * 1000)
                                  .toLocaleDateString("en-US", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                  })
                                  .replace(/\s/, " ")
                              : "N/A"}
                          </div>
                        </div>
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
                  <p>{job.jobDescription || "No description available"}</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-4 col-sm-5">
              <div className="sidebar">
                <div className="widget-boxed">
                  <div className="widget-boxed-header">
                    <h4>
                      <i className="ti-location-pin padd-r-10" />
                      Company Details
                    </h4>
                  </div>
                  <div className="widget-boxed-body">
                    <div className="side-list no-border">
                      <ul>
                        <li>
                          <i className="ti-credit-card padd-r-10" />
                          Package: {job.package}+ LPA
                        </li>
                        <li>
                          <i className="ti-briefcase padd-r-10" />
                          Position: {job.jobPosition}
                        </li>
                        <li>
                          <i className="ti-mobile padd-r-10" />
                          Category: {job.category}
                        </li>
                        <li>
                          <i className="ti-time padd-r-10" />
                          Status: {job.status}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JobDetail;