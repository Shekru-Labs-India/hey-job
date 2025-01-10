import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const TermsConditions = () => {
  return (
    <>
      <Header />
      <div className="page-title">
        <div className="container">
          <div className="page-caption">
            <h2>Terms & Conditions</h2>
            <p>
              <Link to="/">Home</Link>{" "}
              <i className="fa fa-angle-double-right"></i> Terms & Conditions
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
                    <h4 className="text-white">Terms of Service</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <p>
                      We are not associated with any company/agency/agent whose
                      jobs posted on HeyJob.com. We are just information
                      provider for jobs openings. All the logos are trademarks
                      of their respective owners. Users should verify all
                      information on the authority website regarding
                      company/salary/qualification/last date etc. before
                      applying to any jobs.
                    </p>
                    <p>
                      HeyJob.com offers no guarantee nor warranties that there
                      would be a satisfactory response or any response at all.
                    </p>
                    <p>
                      HeyJob.com neither guarantees nor offers any warranty
                      about the credentials, bonafides, status or otherwise of
                      the prospective employer/organization.
                    </p>
                  </div>
                </div>

                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">Liability Disclaimer</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <p>HeyJob.com would not be held liable for:</p>
                    <ul>
                      <li>Loss of any data technical or otherwise</li>
                      <li>Acts of god</li>
                      <li>
                        Reasons beyond its control like:
                        <ul>
                          <li>Corruption of data</li>
                          <li>
                            Delay or failure to perform due to strikes, riots,
                            civil unrest
                          </li>
                          <li>Government policies</li>
                          <li>
                            Tampering of data by unauthorized persons like
                            hackers
                          </li>
                          <li>Distributed denial of service attacks</li>
                          <li>Virus attacks</li>
                          <li>War and natural calamities</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">User Representations</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <p>The user represents that:</p>
                    <ul>
                      <li>
                        They are not a minor and are not under any legal or
                        other disability
                      </li>
                      <li>They have the ability to comply with these Terms</li>
                      <li>
                        They can use the services with minimal risk of harm to
                        themselves or others
                      </li>
                      <li>
                        They are not purchasing the products/services for resale
                        to others
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">Protection Against Fraud</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <h5>Common Types of Email Scams</h5>
                    <p>
                      There are two types of email scams that users should be
                      aware of:
                    </p>

                    <h6>1. Phishing</h6>
                    <p>
                      Phishing is an attempt by fraudsters to 'fish' for your
                      personal details. These typically involve:
                    </p>
                    <ul>
                      <li>Emails encouraging you to click suspicious links</li>
                      <li>
                        Fraudulent log-on pages designed to capture your account
                        details
                      </li>
                      <li>Attempts to get you to download harmful software</li>
                    </ul>
                    <p>
                      <strong>Note:</strong> HeyJob.com will never ask you to
                      download software to access your account.
                    </p>

                    <h6>2. Spoofing</h6>
                    <p>Spoof emails usually include:</p>
                    <ul>
                      <li>Fraudulent offers of employment</li>
                      <li>Invitations to perform monetary transactions</li>
                      <li>Disguised sender addresses</li>
                      <li>Incomplete contact information</li>
                    </ul>
                  </div>
                </div>

                <div className="detail-wrapper">
                  <div className="detail-wrapper-header bg-success">
                    <h4 className="text-white">Agreement Termination</h4>
                  </div>
                  <div className="detail-wrapper-body">
                    <p>
                      The user agreement will be terminated under the following
                      conditions:
                    </p>
                    <ul>
                      <li>
                        On completion of the term for which the user subscribes
                        to the services
                      </li>
                      <li>
                        If the user violates any conditions of this agreement
                      </li>
                      <li>
                        By mutual agreement between the parties in writing
                      </li>
                    </ul>
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

export default TermsConditions;
