import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { CATEGORIES } from '../config/categories';
import Header from './Header';
import Footer from './Footer';

const Categories = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const jobsSnapshot = await getDocs(collection(db, "jobs"));
        const jobsData = jobsSnapshot.docs.map(doc => doc.data());

        // Calculate job counts for each category
        const categoriesWithCounts = CATEGORIES.map(cat => {
          const count = jobsData.filter(job => job.category === cat.value).length;
          return {
            ...cat,
            jobs: count
          };
        });

        setCategories(categoriesWithCounts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Filter categories based on search term
  const filteredCategories = categories.filter(category =>
    category.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = (urlSlug) => {
    navigate(`/category/${urlSlug}`);
  };

  return (
    <>
      <Header />
      <div className="page-title">
        <div className="container">
          <div className="page-caption">
            <h2>Browse Categories</h2>
            <p>
              <a href="/">Home</a>
              <i className="ti-angle-double-right"></i>
              Categories
            </p>
          </div>
        </div>
      </div>

      <section className="padd-top-80 padd-bot-80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            {loading ? (
              <div className="col-12 text-center">Loading categories...</div>
            ) : filteredCategories.length === 0 ? (
              <div className="col-12 text-center">No categories found</div>
            ) : (
              filteredCategories.map((category, index) => (
                <div key={index} className="col-md-3 col-sm-6 mb-4">
                  <div 
                    className="utf_category_box_area" 
                    onClick={() => handleCategoryClick(category.urlSlug)}
                    style={{ cursor: 'pointer' }}
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
                        <p>{category.jobs} {category.jobs === 1 ? 'Job' : 'Jobs'}</p>
                      </div>
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

export default Categories; 