import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <div className='section-spacing'>
      <div className='about-Cryonik'>
        <div className='container'>
          <h2 className='title'>
            Automate your coins <br /> within minutes
          </h2>
          <div className='row single-box'>
            <div className='col-xl-6 col-lg-5 col-12 order-lg-last'>
              <div className='img-wrapper gif-box'>
                <img src={require('../image/pic-2.png')} alt='' />
              </div>
            </div>
            <div className='col-xl-6 col-lg-7 order-lg-first col-12'>
              <div className='text-wrapper right-space'>
                <ul>
                  <li>
                    <div className='serial'>1</div>
                    <h5>Sign up</h5>
                    <p>
                      Sign up on web, iOS or Android and go trough our easy
                      registration process.
                    </p>
                  </li>
                  <li>
                    <div className='serial'>2</div>
                    <h5>Deposit your coins</h5>
                    <p>
                      Select between Bitcoin, Etherum or Litecoin and deposit
                      money into your Cryonik wallet.
                    </p>
                  </li>
                  <li>
                    <div className='serial'>3</div>
                    <h5>Setup your investment</h5>
                    <p>
                      You're in charge, decide for how long you want to invest
                      and the frequency of your payouts.
                    </p>
                  </li>
                  <li>
                    <div className='serial'>4</div>
                    <h5>Then, we put our magic to work</h5>
                    <p>
                      In minutes, we'll put your coins to work like the world's
                      smartest investors.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='row single-box'>
            <div className='col-lg-6 col-12 order-lg-last'>
              <div className='text-wrapper left-space space-fix'>
                <h2 className='title'>Decentralized Minning </h2>
                <p>
                  Nunc sit amet euismod justo. Curabitur sodales turpis erat, at
                  finibus tellus dictum id. Quisque vitae quam et justo
                  tincidunt dapibus et convallis nibh.
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-12 order-lg-first'>
              <div className='img-wrapper'>
                <img src={require('../image/pic-1.png')} alt='' />
              </div>
            </div>
          </div>

          <div className='row single-box'>
            <div className='col-lg-6 col-12'>
              <div className='text-wrapper right-space'>
                <h2 className='title'>Money and Smart wallet</h2>
                <p>
                  Curabitur ullamcorper gravida condimentum. Mauris et lorem
                  scelerisque, porttitor odio et, finibus libero.Maecenas a
                  neque in enim rhoncus.
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-12'>
              <div className='img-wrapper'>
                <img src={require('../image/pic-2.png')} alt='' />
              </div>
            </div>
          </div>

          <div className='row single-box'>
            <div className='col-lg-6 col-12 order-lg-last'>
              <div className='text-wrapper left-space'>
                <a href='#' className='theme-button grdn-bg'>
                  Coming Soon
                </a>
                <h2 className='title'>Use your Prepaid Mastercard</h2>
                <p>
                  Nunc vitae risus sed eros pulvinar imperdiet. Maecenas sed
                  eros euismod massa pretium fringilla non id arcu. Interdum et
                  malesuada fames ac ante ipsum.
                </p>
                <div className='condition-text'>
                  *Cryonik card will be only available to Blue and Vip plan.
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-12 order-lg-first'>
              <div className='img-wrapper'>
                <img src={require('../image/pic-3.png')} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Navbar.defaultProps = {
  title: ' AID HUB',
  icon: 'fab fa-btc',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
