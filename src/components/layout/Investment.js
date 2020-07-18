import React from 'react';
import PropTypes from 'prop-types';

const Investment = ({ icon, title }) => {
  return (
    <div className='investment-calculation'>
      <div className='container'>
        <h2 className='title'>See what you can make with us</h2>
        <div className='row'>
          <div className='col-lg-7 col-12'>
            <div className='select-box'>
              <select className='theme-dropdown' tabindex='1'>
                <option value='USD'>USD - Dollar</option>
                <option value='BTC'>BTC - Bitcoin</option>
                <option value='LTC'>LTC - Litecoin</option>
                <option value='EUR'>EUR - Euro</option>
                <option value='GBP'>GBP - British Pound</option>
                <option value='CAD'>CAD - Canadian Dollar</option>
                <option value='CNY'>CNY - Chinese Yuan</option>
                <option value='JPY'>JPY - Japanese Yen</option>
                <option value='RUB'>RUB - Russian Ruble </option>
              </select>
            </div>

            <div className='slider-wrapper'>
              <div className='single-range-wrapper' id='range-one'>
                <div className='tag-line tooltip-holder'>
                  Amount
                  <div className='tooltip-inner'>
                    ?{' '}
                    <span>
                      The amount you want to invest, you can always add funds to
                      your investment at any time.
                    </span>
                  </div>
                </div>
                <input
                  type='text'
                  className='range-amount'
                  name='example_name'
                  value=''
                />
              </div>
              <div className='single-range-wrapper time-frame' id='range-two'>
                <div className='tag-line tooltip-holder'>
                  Timeframe
                  <div className='tooltip-inner'>
                    ?{' '}
                    <span>
                      The amount you want to invest, you can always add funds to
                      your investment at any time.
                    </span>
                  </div>
                </div>
                <input
                  type='text'
                  className='range-time'
                  name='example_name'
                  value=''
                />
              </div>
            </div>
            <p className='additional-text'>
              Numbers are simulated based on Cryonik average returns.
            </p>
          </div>

          <div className='col-lg-5 col-12'>
            <div className='total-output'>
              <h5 className='tooltip-holder'>
                Cryonik Expected Return
                <span className='tooltip-inner'>
                  ?{' '}
                  <span>
                    The amount you want to invest, you can always add funds to
                    your investment at any time.
                  </span>
                </span>
              </h5>
              <div className='return-output'>$11,500</div>
              <h6>Traditional Investing</h6>
              <div className='invest-output'>$10,200</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Investment.defaultProps = {
  title: ' AIDHEADER',
  icon: 'fab fa-btc',
};
Investment.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Investment;
