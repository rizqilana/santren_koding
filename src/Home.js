import React, { Component } from 'react';
import Jumbo from './component/Jumbo/Jumbo';
import Body1 from './component/Body1/Body1';
import Body2 from './component/Body2/Body2';
import Body3 from './component/Body3/Body3';
import Body4 from './component/Body4/Body4';
import Footer from './component/Footer/Footer';
import Carousel from './component/Carousel/Carousel';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbo />
        <Body1 />
        <Body2 />
        <Body3 />
        <Body4 />
        <Footer />
        <Carousel />
      </div>
    );
  }
}
