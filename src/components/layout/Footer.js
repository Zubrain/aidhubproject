import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className='section-spacing'>
          <div className='join-our-community'>
            <div className='container'>
              <h2 className='title'>Join our community</h2>
              <a href='contact-us.html' className='theme-button grdn-bg'>
                Contact us
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className='Cryonik-footer'>
          <div className='container'>
            <div className='row top-footer'>
              <div className='col-lg-3 col-md-6 footer-help-widget'>
                <div className='select-box'>
                  <select className='theme-dropdown' tabindex='1'>
                    <option value='English'>English</option>
                    <option value='Русский'>Русский</option>
                    <option value='Français'>Français</option>
                    <option value='Español'>Español</option>
                    <option value='Deutsch'>Deutsch</option>
                    <option value='Português'>Português</option>
                  </select>
                </div>
                <a href='#' className='call'>
                  0900 000 000
                </a>
                <a href='#' className='help'>
                  help.xxxxxxx.com
                </a>
              </div>

              <div className='col-lg-3 col-md-6 footer-list'>
                <h5 className='footer-title'>Learn more</h5>
                <ul>
                  <li>
                    <a href='how-it-work.html'>How it works</a>
                  </li>
                  <li>
                    <a href='plan.html'>Plans</a>
                  </li>
                  <li>
                    <a href='performance.html'>Performance</a>
                  </li>
                  <li>
                    <a href='#'>Loss Protection</a>
                  </li>
                  <li>
                    <a href='security.html'>Security</a>
                  </li>
                  <li>
                    <a href='#'>Blog</a>
                  </li>
                </ul>
              </div>

              <div className='col-lg-3 col-md-6 footer-list'>
                <h5 className='footer-title'>Information</h5>
                <ul>
                  <li>
                    <a href='404.html'>Error Page</a>
                  </li>
                  <li>
                    <a href='about-us.html'>About</a>
                  </li>
                  <li>
                    <a href='contact-us.html'>Contacts</a>
                  </li>
                  <li>
                    <a href='affiliate.html'>Affiliates</a>
                  </li>
                  <li>
                    <a href='#'>Customer Support</a>
                  </li>
                  <li>
                    <a href='legal.html'>Terms of use</a>
                  </li>
                  <li>
                    <a href='legal.html'>Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className='col-lg-2 col-md-4 footer-list'>
                <h5 className='footer-title'>Follow us</h5>
                <ul>
                  <li>
                    <a href='#'>Telegram</a>
                  </li>
                  <li>
                    <a href='#'>Facebook</a>
                  </li>
                  <li>
                    <a href='#'>Instagram</a>
                  </li>
                  <li>
                    <a href='#'>Twitter</a>
                  </li>
                  <li>
                    <a href='#'>Youtube</a>
                  </li>
                  <li>
                    <a href='#'>Medium</a>
                  </li>
                  <li>
                    <a href='#'>Linkedin</a>
                  </li>
                </ul>
              </div>

              <div className='col-lg-1 col-md-2 footer-download'>
                <ul className='clearfix'>
                  <li>
                    <a href='#'>
                      <i className='fab fa-apple'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fab fa-google-play'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='bottom-footer'>
              <div className='row'>
                <div className='col-lg-8 col-12'>
                  <p>Copyright 2020 Cryonik TLD.</p>
                </div>
                <div className='col-lg-4 col-12'>
                  <ul className='clearfix'>
                    <li>
                      <a href='affiliate.html'>Affiliates</a>
                    </li>
                    <li>
                      <a href='#'>Privacy Policy</a>
                    </li>
                    <li>
                      <a href='legal.html'>Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
