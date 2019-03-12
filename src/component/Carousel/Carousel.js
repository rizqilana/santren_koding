import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'Rectangle 2.3.png'
  },
  {
    src: ''
  },
  {
    src: ''
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
