import React from 'react';
import img from '../image/intro-image.png';
import PropTypes from 'prop-types';

const Banner = ({ iconone, icontwo, title }) => {
  return (
    <div className='Cryonik-main-banner'>
      <div
        className='img-wrapper float-right fadeInRight wow'
        data-wow-duration='1.2s'
        data-wow-delay='1.6s'
      >
        <img src={img} alt='' />
      </div>
      <div className='container'>
        <div className='main-wrapper clearfix'>
          <div className='text-wrapper float-left'>
            <h1
              className='main-title fadeInDown wow'
              data-wow-duration='1.2s'
              data-wow-delay='0.5s'
            >
              Your best crypto Startup agency
            </h1>
            <p
              className='sub-text fadeInUp wow'
              data-wow-duration='1.2s'
              data-wow-delay='0.5s'
            >
              The fast and most populer currency for your future online
              business.
            </p>

            <ul
              className='button-group fadeInUp wow'
              data-wow-duration='1.2s'
              data-wow-delay='1s'
            >
              <li className='start-button'>
                <a href='#' className='theme-button grdn-bg'>
                  Get Started
                </a>
              </li>
              <li className='icon apple-icon'>
                <a href='#'>
                  <i className={iconone} />
                </a>
              </li>
              <li className='icon'>
                <a href='#'>
                  <i className={icontwo} />
                </a>
              </li>
            </ul>
            <div className='icon-text fadeInUp wow' data-wow-duration='1.2s'>
              <img
                src={require('../image/icon/2.png')}
                alt=''
                className='img-icon'
              />
              <p>
                Your investment is covered by our <br /> protection policy.{' '}
                <a href='about-us.html'>Learn more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Banner.defaultProps = {
  title: ' AID HUB',
  iconone: 'fab fa-apple',
  icontwo: 'fab fa-google-play',
};
Banner.propTypes = {
  title: PropTypes.string.isRequired,
  iconone: PropTypes.string.isRequired,
  icontwo: PropTypes.string.isRequired,
};
export default Banner;
