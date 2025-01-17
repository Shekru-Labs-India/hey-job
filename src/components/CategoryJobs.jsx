import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Header from './Header';
import Footer from './Footer';
import { CATEGORIES } from '../config/categories';
import company1 from '../assets/img/company_logo_1.png';

const CategoryJobs = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryJobs = async () => {
      try {
        // Convert URL-friendly category back to original format
        const decodedCategory = category.replace(/-/g, ' ').split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        const jobsQuery = query(
          collection(db, "jobs"),
          where("category", "==", decodedCategory)
        );
        
        const querySnapshot = await getDocs(jobsQuery);
        const jobsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setJobs(jobsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching category jobs: ", error);
        setLoading(false);
      }
    };

    fetchCategoryJobs();
  }, [category]);

  const handleJobClick = (jobId, jobTitle) => {
    const formattedTitle = jobTitle.toLowerCase().replace(/\s+/g, '+');
    navigate(`/job-detail/${formattedTitle}/${jobId}`);
  };

  return (
    <>
      <Header />
      <div className="page-title">
        <div className="container">
          <div className="page-caption">
            <h2>{category.replace(/-/g, ' ').split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')} Jobs</h2>
            <p>
              <a href="/">Home</a> <i className="fa fa-angle-double-right"></i> {category.replace(/-/g, ' ')}
            </p>
          </div>
        </div>
      </div>

      <section className="padd-top-80 padd-bot-80">
        <div className="container">
          <div className="row">
            {loading ? (
              <div className="col-12 text-center">Loading jobs...</div>
            ) : jobs.length === 0 ? (
              <div className="col-12 text-center">No jobs available in this category</div>
            ) : (
              jobs.map((job) => (
                <div className="col-md-3 col-sm-6" key={job.id}>
                  <div
                    className="utf_grid_job_widget_area pt-0"
                    onClick={() => handleJobClick(job.id, job.jobTitle)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="u-content px-0" style={{ position: "relative" }}>
                      <div className="avatar-square box-80" style={{ width: "100%", position: "relative" }}>
                        <a onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleJobClick(job.id, job.jobTitle);
                        }}>
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
                        <a onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleJobClick(job.id, job.jobTitle);
                        }}>
                          {job.jobTitle}
                        </a>
                      </h5>
                      <p className="text-muted mb-0">
                        <i className="fa fa-briefcase"></i> {job.jobPosition}
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
      </section>
      <Footer />
    </>
  );
};

export default CategoryJobs; 