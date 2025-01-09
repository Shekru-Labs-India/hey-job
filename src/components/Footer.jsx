import React from 'react'

const Footer = () => {
  return (
    

  <>
  
  <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-4">
        <a href="index.html">
          <img className="footer-logo" src="assets/img/logo.png" alt="" />
        </a>
        <p>
          Lorem Ipsum is simply dummy text of printing and type setting
          industry. Lorem Ipsum been industry standard dummy text ever since.
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
                <a href="index.html">
                  <i className="fa fa-angle-double-right" /> Home
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" /> Jobs Listing
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" /> Term &amp;
                  Condition
                </a>
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


  )
}

export default Footer