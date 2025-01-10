import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Header from './Header';
import Footer from './Footer';

const BrowseCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const jobsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // Extract unique categories and count jobs in each category
        const categoryCount = jobsData.reduce((acc, job) => {
          if (job.category) {
            acc[job.category] = (acc[job.category] || 0) + 1;
          }
          return acc;
        }, {});
        
        // Transform into array format with icons
        const categoryData = Object.entries(categoryCount).map(([title, count]) => ({
          title,
          jobs: count,
          icon: getCategoryIcon(title)
        }));
        
        setCategories(categoryData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories: ", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const getCategoryIcon = (category) => {
    const iconMap = {
      'Web Development': 'fa-code',
      'Software Development': 'fa-laptop-code',
      'Data Science': 'fa-chart-pie',
      'Analytics': 'fa-chart-bar',
      'Accounting': 'fa-calculator',
      'Marketing': 'fa-bullhorn',
      'Design': 'fa-palette',
      'Education': 'fa-chalkboard-teacher',
      'Mobile Development': 'fa-mobile-alt',
      'UI/UX': 'fa-pencil-ruler',
      'DevOps': 'fa-server',
      'Project Management': 'fa-tasks',
      'Content Writing': 'fa-pen',
      'Sales': 'fa-handshake',
      'Customer Service': 'fa-headset',
      'HR': 'fa-users',
    };
    
    // Try to find a specific icon, otherwise return a default
    for (const [key, icon] of Object.entries(iconMap)) {
      if (category.toLowerCase().includes(key.toLowerCase())) {
        return icon;
      }
    }
    return 'fa-briefcase'; // Default icon
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.toLowerCase().replace(/\s+/g, '-')}`);
  };

  // Filter categories based on search term
  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="page-title">
        <div className="container">
          <div className="page-caption">
            <h2>Browse by Categories</h2>
            <p><a href="/">Home</a> <i className="ti-angle-double-right"></i> Browse by Categories</p>
          </div>
        </div>
      </div>

      <section className="padd-top-80 padd-bot-60">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-12">
              {loading ? (
                <div className="col-12 text-center">Loading categories...</div>
              ) : filteredCategories.length === 0 ? (
                <div className="col-12 text-center">No categories found</div>
              ) : (
                <div className="row">
                  {filteredCategories.map((category, index) => (
                    <div className="col-md-3 col-sm-6" key={index}>
                      <div 
                        className="utf_category_box_area"
                        onClick={() => handleCategoryClick(category.title)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="utf_category_desc">
                          <div className="utf_category_icon">
                            <i className={`fa-solid ${category.icon}`} aria-hidden="true"></i>
                          </div>
                          <div className="category-detail utf_category_desc_text">
                            <h4>{category.title}</h4>
                            <p>{category.jobs} {category.jobs === 1 ? 'Job' : 'Jobs'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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

export default BrowseCategory; 