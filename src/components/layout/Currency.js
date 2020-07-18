import React, { Component } from 'react';

class Currency extends Component {
  render() {
    return (
      <div className='section-spacing'>
        <div className='currency-wallet'>
          <div className='container'>
            <img src={require('../image/currency.png')} alt='' />
            <h2>Local Currency Wallet</h2>
            <p>
              You can freely choose the currency you want for your Cryonik
              wallet, from USD, EUR, GBP, CAD, CNY, JPY and RUB.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Currency;
