import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  const handlePrivacyPolicyClick = () => {
    navigate('/privacy-policy');
  };
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <Link to="/">
                <img className="footer-logo" src="assets/img/logo.png" alt="" />
              </Link>
              <p>
                Lorem Ipsum is simply dummy text of printing and type setting
                industry. Lorem Ipsum been industry standard dummy text ever
                since.
              </p>
              {/* Social Box */}
              <div className="f-social-box">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook facebook-cl" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google google-plus-cl" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter twitter-cl" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram instagram-cl" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 col-sm-8">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <h4>Quick Links</h4>
                  <ul>
                    <li>
                      <Link to="/">
                        <p>
                          <i className="fa fa-angle-double-right" /> Home
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/browse-jobs">
                        <p>
                          <i className="fa fa-angle-double-right" /> Jobs
                          Listing
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">
                        <p>
                          <i className="fa fa-angle-double-right" /> Privacy
                          Policy
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions">
                        <p>
                          <i className="fa fa-angle-double-right" /> Term &amp;
                          Condition
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="copyright text-center">
                <p>Copyright © 2021 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;