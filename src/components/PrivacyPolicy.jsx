import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="page-title">
        <div className="container">
          <div className="page-caption">
            <h2>Privacy Policy</h2>
            <p>
              <a href="/">Home</a> <i className="fa fa-angle-double-right"></i>{" "}
              Privacy Policy
            </p>
          </div>
        </div>
      </div>

      <section className="padd-top-80 padd-bot-80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="privacy-content">
                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">Privacy Policy</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <p><strong>Effective Date: April 15, 2024</strong></p>
                    <p>Welcome to HeyJob! Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share information about you when you use our website, services, and tools.</p>
                  </div>
                </div>

                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">1. Information We Collect</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <h5>a. Personal Information</h5>
                    <p>When you create an account, apply for jobs, or contact us, we may collect:</p>
                    <ul>
                      <li>Your name, email address, phone number, and postal address.</li>
                      <li>Employment history, education details, and resumes.</li>
                      <li>Payment details (if applicable for premium services).</li>
                    </ul>

                    <h5>b. Non-Personal Information</h5>
                    <p>This includes data such as:</p>
                    <ul>
                      <li>Your IP address and browser type.</li>
                      <li>Website usage data, such as pages visited and time spent on our site.</li>
                      <li>Device information like operating system and screen resolution.</li>
                    </ul>

                    <h5>c. Cookies and Tracking Technologies</h5>
                    <p>We use cookies to enhance your experience, track user activity, and gather analytics. You can manage your cookie preferences through your browser settings.</p>
                  </div>
                </div>

                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">2. How We Use Your Information</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <p>We use the information collected to:</p>
                    <ul>
                      <li>Provide, improve, and personalize our services.</li>
                      <li>Connect job seekers with employers.</li>
                      <li>Respond to customer service inquiries.</li>
                      <li>Send updates, job alerts, and promotional emails (you can opt out anytime).</li>
                      <li>Ensure the security and functionality of our platform.</li>
                    </ul>
                  </div>
                </div>

                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">3. How We Share Your Information</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <p>We do not sell your personal information. However, we may share your information in the following scenarios:</p>
                    
                    <h5>a. With Employers</h5>
                    <p>Your profile and application details may be shared with employers when you apply for a job.</p>

                    <h5>b. With Service Providers</h5>
                    <p>We may share your data with trusted third-party service providers who help us operate our platform.</p>

                    <h5>c. Legal Requirements</h5>
                    <p>We may disclose your information if required by law or in response to valid legal requests.</p>
                  </div>
                </div>

                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">4. Data Security</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <p>We implement robust security measures to protect your personal information, including encryption and secure servers. However, no online service is 100% secure. Please use strong passwords and notify us immediately of any suspicious activity.</p>
                  </div>
                </div>

                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">5. Your Rights</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <p>Depending on your location, you may have the following rights:</p>
                    <ul>
                      <li>Access your personal data.</li>
                      <li>Correct or delete your information.</li>
                      <li>Restrict or object to the processing of your data.</li>
                      <li>Withdraw consent where applicable.</li>
                    </ul>
                    <p>To exercise these rights, contact us at support@heyjob.com</p>
                  </div>
                </div>

                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">6. Third-Party Links</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <p>Our website may contain links to external websites. We are not responsible for the privacy practices of these websites.</p>
                  </div>
                </div>

                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">7. Children's Privacy</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <p>HeyJob is not intended for individuals under the age of 16. We do not knowingly collect personal data from children.</p>
                  </div>
                </div>

                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">8. Changes to This Policy</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <p>We may update this Privacy Policy from time to time. Significant changes will be notified through the website or via email.</p>
                  </div>
                </div>

                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">9. Contact Us</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
                    <p><strong>HeyJob Support Team</strong><br />
                    Email: support@heyjob.com<br />
                    Phone: +91 1234567890</p>
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

export default PrivacyPolicy;
