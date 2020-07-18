import React from 'react';
import logo from '../image/logo.png';
import PropTypes from 'prop-types';

const Header = ({ icon, title }) => {
  return (
    <div className='Cryonik-header'>
      <div className='container'>
        <div className='main-header-wrapper clearfix'>
          <div className='logo'>
            <a href='index.html'>
              <img src={logo} alt='aidhub-logo' />
            </a>
          </div>
          {/* Aidhub Menu Wrapper */}
          <div className='navbar navbar-expand-lg bsnav bsnav-sticky-slide float-right'>
            <button className='navbar-toggler toggler-spring'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav navbar-mobile mr-0'>
                <li className='nav-item'>
                  <a className='nav-link' href='how-it-work.html'>
                    How it works
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='plan.html'>
                    Plans
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='performance.html'>
                    Performance
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='help.html'>
                    Help
                  </a>
                </li>
                <li className='header-widget'>
                  <ul className='clearfix'>
                    <li className='login-button'>
                      <a href='http://html.heloshape.com/cryptonet/crypto-dash/login.html'>
                        Log in
                      </a>
                    </li>
                    <li className='invest'>
                      <a
                        href='http://html.heloshape.com/cryptonet/crypto-dash/sign-up.html'
                        className='grdn-bg'
                      >
                        Start Investing
                      </a>
                    </li>
                    <li className='language'>
                      <div className='select-box'>
                        <select className='theme-dropdown' tabindex='1'>
                          <option value='English'>En</option>
                          <option value='Русский'>Русский</option>
                          <option value='Français'>Français</option>
                          <option value='Español'>Español</option>
                          <option value='Deutsch'>Deutsch</option>
                          <option value='Português'>Português</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* End of Wrapper */}
          <div id='login-md'>
            <a href='http://html.heloshape.com/cryptonet/crypto-dash/sign-up.html'>
              Log in
            </a>
          </div>
          {/* main-header-wrapper */}
        </div>
        <div className='bsnav-mobile'>
          <div className='bsnav-mobile-overlay'></div>
          <div className='navbar'></div>
        </div>
      </div>
      {/* Cryonik-header */}
    </div>
  );
};
Header.defaultProps = {
  title: ' AIDHEADER',
  icon: 'fab fa-btc',
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Header;
