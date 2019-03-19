import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './Body4.css';

class Body4 extends Component {
  render() {
    return (
      <div>
        <img className="gambarr" src={require('./Vector.png')} />
        <center>
          <h1 className="kegiatan">Foto Kegiatan Kami</h1>
        </center>
      </div>
    );
  }
}
export default Body4;
