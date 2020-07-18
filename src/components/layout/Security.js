import React, { Component } from 'react';

class Security extends Component {
  render() {
    return (
      <div className='our-security section-spacing'>
        <div className='container'>
          <h2 className='title'>
            The security of your coins is our <br /> highest priority
          </h2>

          <div className='row single-box'>
            <div className='col-lg-7 col-12 order-lg-last'>
              <div className='img-wrapper clearfix'>
                <img src={require('../image/pic-4.png')} alt='' />
              </div>
            </div>
            <div className='col-lg-5 col-12 order-lg-first'>
              <div className='text-wrapper right-space'>
                <ul>
                  <li>
                    <h5>Invest Securely</h5>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page.
                    </p>
                  </li>
                  <li>
                    <h5>Loss Protection</h5>
                    <p>
                      here are many variations of passages of Lorem Ipsum
                      available, but the majority.
                    </p>
                  </li>
                  <li>
                    <h5>Higher grade Security</h5>
                    <p>
                      Mauris bibendum diam turpis, aliquet eleifend ex dictum
                      sit amet. Etiam ut est purus.
                    </p>
                  </li>
                  <li>
                    <h5>Encrypted SSL</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </li>
                </ul>
                <a href='security.html' className='feature theme-button-two'>
                  Security features
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Security;
