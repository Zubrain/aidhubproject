import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import './assets/fonts/AvenirLTStd-Black/styles.css';
// import './assets/fonts/avenir/demo.css';
// /*----bootstrap css ----- */
import './assets/vendor/bootstrap/css/bootstrap.min.css';
// /*------- menu ------*/
import './assets/vendor/bsnav-master/bsnav.min.css';
// /*------- Dropdown Selector --------*/
import './assets/vendor/chosen/chosen.min.css';
// /*------- Range Slider --------*/
import './assets/vendor/ion.rangeSlider/ion.rangeSlider.css';
// /*----owl-carousel css----*/
// import './assets/vendor/owl-carousel/owl.carousel.css';
import './assets/vendor/owl-carousel/owl.theme.css';
// /*-------- animated css ------*/
import './assets/vendor/WOW-master/css/libs/animate.css';
// /*--------- flat-icon ---------*/
import './assets/fonts/icon/font/flaticon.css';
// /*----------- Fancybox css -------*/
import './assets/vendor/fancybox/dist/jquery.fancybox.min.css';
// /*----Language Switcher---*/
// import './assets/vendor/language-switcher/polyglot-language-switcher.css';
// /*------- Select css ------*/
import './assets/vendor/select/selectric.css';
import './assets/css/fontawesome.min.css';
// Main Style
import './assets/css/style.css';
import './assets/css/responsive.css';

import Banner from './components/layout/Banner';
import Investment from './components/layout/Investment';
import Currency from './components/layout/Currency';
import Start from './components/layout/Start';
import Security from './components/layout/Security';
import Download from './components/layout/Download';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='main-page-wrapper'>
          {/* AIDHUB Header */}
          <Header />
          {/* Main Banner */}
          <Banner />

          {/* Investment Calculation */}
          <Investment />

          {/* About Aidhub */}
          <Navbar />

          {/* Currency Wallet */}
          <Currency />

          {/* Getting Start Banner */}
          <Start />

          {/* Our Security */}
          <Security />

          {/* Download Section */}
          <Download />

          {/* Footer Section */}
        </div>
      </div>
    );
  }
}

export default App;
