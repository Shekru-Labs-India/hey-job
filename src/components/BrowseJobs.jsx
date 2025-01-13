import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Header from './Header';
import Footer from './Footer';
import company1 from '../assets/img/company_logo_1.png';
import { CATEGORIES } from '../config/categories';

const BrowseJobs = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchKeywords, setSearchKeywords] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSalaryRange, setSelectedSalaryRange] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedQualification, setSelectedQualification] = useState('');
  const [sortBy, setSortBy] = useState('Most Recent');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Salary ranges for filter
  const salaryRanges = [
    { id: '1', label: 'Under $10,000', value: 'Under $10,000', count: 102 },
    { id: '2', label: '$10,000 - $15,000', value: '$10,000 - $15,000', count: 78 },
    { id: '3', label: '$15,000 - $20,000', value: '$15,000 - $20,000', count: 12 },
    { id: '4', label: '$20,000 - $30,000', value: '$20,000 - $30,000', count: 85 },
    { id: '5', label: '$30,000 - $40,000', value: '$30,000 - $40,000', count: 307 },
  ];

  // Job types for filter
  const jobTypes = [
    { id: 'a1', label: 'Full Time', count: 102 },
    { id: 'b1', label: 'Part Time', count: 78 },
    { id: 'c1', label: 'Internship', count: 12 },
    { id: 'd1', label: 'Freelancer', count: 85 },
    { id: 'e1', label: 'Contract Base', count: 307 },
  ];

  // Designations for filter
  const designations = [
    { id: 'a', label: 'Web Designer', count: 102 },
    { id: 'b', label: 'Php Developer', count: 78 },
    { id: 'c', label: 'Project Manager', count: 12 },
    { id: 'd', label: 'Human Resource', count: 85 },
    { id: 'e', label: 'CMS Developer', count: 307 },
    { id: 'f', label: 'App Developer', count: 256 },
  ];

  // Experience ranges
  const experiences = [
    { id: '11', label: '1Year To 2Year' },
    { id: '21', label: '2Year To 3Year' },
    { id: '31', label: '3Year To 4Year' },
    { id: '41', label: '4Year To 5Year' },
    { id: '51', label: '5Year To 7Year' },
    { id: '61', label: '7Year To 10Year' },
  ];

  // Qualifications
  const qualifications = [
    { id: '12', label: 'High School' },
    { id: '22', label: 'Intermediate' },
    { id: '32', label: 'Graduation' },
    { id: '42', label: 'Master Degree' },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let jobsQuery;
        const decodedCategory = decodeURIComponent(category || '').toLowerCase();
        const categoryConfig = CATEGORIES.find(cat => cat.urlSlug === decodedCategory);
        
        console.log('Original Category:', category);
        console.log('Decoded Category:', decodedCategory);
        console.log('Category Config:', categoryConfig);
        
        if (category && categoryConfig) {
          // If category is provided, query jobs with that category
          jobsQuery = query(
            collection(db, "jobs"),
            where("category", "==", categoryConfig.value)
          );
        } else {
          // If no category, get all jobs
          jobsQuery = collection(db, "jobs");
        }

        const querySnapshot = await getDocs(jobsQuery);
        const jobsData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          console.log('Job data:', data);
          return {
            id: doc.id,
            ...data,
            jobTitle: data.jobTitle || '',
            jobDescription: data.jobDescription || '',
            jobPosition: data.jobPosition || '',
            skills: data.skills || [],
            jobType: data.jobType || 'Full Time',
            package: data.package || '0',
            location: data.location || 'Not Specified',
            designation: data.designation || '',
            experience: data.experience || '',
            qualification: data.qualification || '',
            category: data.category || '',
            companyDetails: data.companyDetails || '',
            image: data.image || '',
            createdAt: data.createdAt || { seconds: 0 }
          };
        });

        console.log('Fetched jobs:', jobsData);

        const sortedJobs = jobsData.sort((a, b) => {
          if (sortBy === 'Most Recent') {
            return (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0);
          }
          return 0;
        });

        setJobs(sortedJobs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs: ", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [sortBy, category]);

  // Filter jobs based on all criteria
  const filteredJobs = jobs.filter(job => {
    const matchesKeyword = !searchKeywords || 
      job.jobTitle?.toLowerCase().includes(searchKeywords.toLowerCase()) ||
      job.jobDescription?.toLowerCase().includes(searchKeywords.toLowerCase()) ||
      job.skills?.some(skill => skill.toLowerCase().includes(searchKeywords.toLowerCase()));
    
    const matchesLocation = !selectedLocation || 
      job.location?.toLowerCase().includes(selectedLocation.toLowerCase());
    
    const matchesSalary = !selectedSalaryRange || 
      matchSalaryRange(job.package, selectedSalaryRange);
    
    const matchesJobType = !selectedJobType || 
      job.jobType?.toLowerCase() === selectedJobType.toLowerCase();

    const matchesDesignation = !selectedDesignation ||
      job.designation?.toLowerCase() === selectedDesignation.toLowerCase();

    const matchesExperience = !selectedExperience ||
      job.experience?.toLowerCase() === selectedExperience.toLowerCase();

    const matchesQualification = !selectedQualification ||
      job.qualification?.toLowerCase() === selectedQualification.toLowerCase();

    // Update category mapping to match Expo app
    const categoryMapping = {
      'wfh': 'WFH',
      'internship': 'Internship',
      'drive': 'Drive',
      'batches': 'Batches',
      'all': 'All'
    };
    
    const decodedCategory = category?.toLowerCase() || '';
    const mappedCategory = categoryMapping[decodedCategory];
    
    const matchesCategory = !category || 
      mappedCategory === 'All' ||
      job.category === mappedCategory;

    return matchesKeyword && matchesLocation && matchesSalary && 
           matchesJobType && matchesDesignation && matchesExperience && 
           matchesQualification && matchesCategory;
  });

  // Helper function to match salary range
  const matchSalaryRange = (salary, range) => {
    const salaryNum = parseFloat(salary);
    switch(range) {
      case 'Under $10,000':
        return salaryNum < 10000;
      case '$10,000 - $15,000':
        return salaryNum >= 10000 && salaryNum <= 15000;
      case '$15,000 - $20,000':
        return salaryNum >= 15000 && salaryNum <= 20000;
      case '$20,000 - $30,000':
        return salaryNum >= 20000 && salaryNum <= 30000;
      case '$30,000 - $40,000':
        return salaryNum >= 30000 && salaryNum <= 40000;
      default:
        return true;
    }
  };

  // Calculate pagination
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

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
            <h2>
              {category 
                ? `${CATEGORIES.find(cat => cat.urlSlug === category.toLowerCase())?.displayName || category} Jobs (${filteredJobs.length})`
                : 'Browse Jobs'}
            </h2>
            <p>
              <a href="/">Home</a> 
              <i className="fa fa-angle-double-right"></i> 
              {category ? (
                <>
                  <a href="/browse-jobs">Browse Jobs</a>
                  <i className="fa fa-angle-double-right"></i>
                  {CATEGORIES.find(cat => cat.urlSlug === category.toLowerCase())?.displayName || category}
                </>
              ) : (
                'Browse Jobs'
              )}
            </p>
          </div>
        </div>
      </div>

      <section className="padd-top-80 padd-bot-80">
        <div className="container">
          <div className="row">
            {/* Sidebar Start */}
            <div className="col-md-3 col-sm-5">
              <div className="widget-boxed padd-bot-0">
                <div className="widget-boxed-body">
                  <div className="search_widget_job">
                    <div className="field_w_search">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search Keywords"
                        value={searchKeywords}
                        onChange={(e) => setSearchKeywords(e.target.value)}
                      />
                    </div>
                    <div className="field_w_search">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="All Locations"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Offered Salary */}
              <div className="widget-boxed padd-bot-0">
                <div className="widget-boxed-header">
                  <h4>Offered Salary</h4>
                </div>
                <div className="widget-boxed-body">
                  <div className="side-list no-border">
                    <ul>
                      {salaryRanges.map((range) => (
                        <li key={range.id}>
                          <span className="custom-checkbox">
                            <input
                              type="checkbox"
                              id={range.id}
                              checked={selectedSalaryRange === range.value}
                              onChange={() => setSelectedSalaryRange(range.value)}
                            />
                            <label htmlFor={range.id}></label>
                          </span>
                          {range.label}
                          <span className="pull-right">{range.count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Job Type */}
              <div className="widget-boxed padd-bot-0">
                <div className="widget-boxed-header">
                  <h4>Job Type</h4>
                </div>
                <div className="widget-boxed-body">
                  <div className="side-list no-border">
                    <ul>
                      {jobTypes.map((type) => (
                        <li key={type.id}>
                          <span className="custom-checkbox">
                            <input
                              type="checkbox"
                              id={type.id}
                              checked={selectedJobType === type.label}
                              onChange={() => setSelectedJobType(type.label)}
                            />
                            <label htmlFor={type.id}></label>
                          </span>
                          {type.label}
                          <span className="pull-right">{type.count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Designation */}
              <div className="widget-boxed padd-bot-0">
                <div className="widget-boxed-header br-0">
                  <h4>
                    Designation
                    <a href="#designation" data-toggle="collapse">
                      <i className="pull-right ti-plus" aria-hidden="true"></i>
                    </a>
                  </h4>
                </div>
                <div className="widget-boxed-body collapse" id="designation">
                  <div className="side-list no-border">
                    <ul>
                      {designations.map((designation) => (
                        <li key={designation.id}>
                          <span className="custom-checkbox">
                            <input
                              type="checkbox"
                              id={designation.id}
                              checked={selectedDesignation === designation.label}
                              onChange={() => setSelectedDesignation(designation.label)}
                            />
                            <label htmlFor={designation.id}></label>
                          </span>
                          {designation.label}
                          <span className="pull-right">{designation.count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="widget-boxed padd-bot-0">
                <div className="widget-boxed-header br-0">
                  <h4>
                    Experience
                    <a href="#experience" data-toggle="collapse">
                      <i className="pull-right ti-plus" aria-hidden="true"></i>
                    </a>
                  </h4>
                </div>
                <div className="widget-boxed-body collapse" id="experience">
                  <div className="side-list no-border">
                    <ul>
                      {experiences.map((exp) => (
                        <li key={exp.id}>
                          <span className="custom-checkbox">
                            <input
                              type="checkbox"
                              id={exp.id}
                              checked={selectedExperience === exp.label}
                              onChange={() => setSelectedExperience(exp.label)}
                            />
                            <label htmlFor={exp.id}></label>
                          </span>
                          {exp.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Qualification */}
              <div className="widget-boxed padd-bot-0">
                <div className="widget-boxed-header br-0">
                  <h4>
                    Qualification
                    <a href="#qualification" data-toggle="collapse">
                      <i className="pull-right ti-plus" aria-hidden="true"></i>
                    </a>
                  </h4>
                </div>
                <div className="widget-boxed-body collapse" id="qualification">
                  <div className="side-list no-border">
                    <ul>
                      {qualifications.map((qual) => (
                        <li key={qual.id}>
                          <span className="custom-checkbox">
                            <input
                              type="checkbox"
                              id={qual.id}
                              checked={selectedQualification === qual.label}
                              onChange={() => setSelectedQualification(qual.label)}
                            />
                            <label htmlFor={qual.id}></label>
                          </span>
                          {qual.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar End */}

            {/* Job Listings */}
            <div className="col-md-9 col-sm-7">
              <div className="row mrg-bot-20">
                <div className="col-md-4 col-sm-12 col-xs-12 browse_job_tlt">
                  <h4 className="job_vacancie">
                    {filteredJobs.length} {category ? `${decodeURIComponent(category)} ` : ''}
                    Jobs & Vacancies
                  </h4>
                </div>
                <div className="col-md-8 col-sm-12 col-xs-12">
                  <div className="fl-right short_by_filter_list">
                    <div className="search-wide short_by_til">
                      <h5>Short By</h5>
                    </div>
                    <div className="search-wide full">
                      <select 
                        className="wide form-control"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        <option value="Most Recent">Most Recent</option>
                        <option value="Most Viewed">Most Viewed</option>
                        <option value="Most Search">Most Search</option>
                      </select>
                    </div>
                    <div className="search-wide full">
                      <select 
                        className="wide form-control"
                        value={itemsPerPage}
                        onChange={(e) => {
                          setItemsPerPage(parseInt(e.target.value));
                          setCurrentPage(1);
                        }}
                      >
                        <option value="10">10 Per Page</option>
                        <option value="20">20 Per Page</option>
                        <option value="30">30 Per Page</option>
                        <option value="50">50 Per Page</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Listings */}
              {loading ? (
                <div className="col-12 text-center">Loading jobs...</div>
              ) : filteredJobs.length === 0 ? (
                <div className="col-12 text-center">
                  {category 
                    ? `No jobs available in ${decodeURIComponent(category)} category` 
                    : 'No jobs found matching your criteria'}
                </div>
              ) : (
                <div className="row">
                  {currentJobs.map((job) => (
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
                  ))}
                </div>
              )}

              {/* Pagination */}
              {filteredJobs.length > itemsPerPage && (
                <div className="utf_flexbox_area padd-0">
                  <ul className="pagination">
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                      >
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    {[...Array(totalPages)].map((_, i) => (
                      <li 
                        key={i} 
                        className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </a>
                      </li>
                    ))}
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Next"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                      >
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BrowseJobs; 