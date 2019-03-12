import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './Body4.css';

class Body4 extends Component {
  render() {
    return (
      <div>
        <center>
          <h1 className="kegiatan">Foto Kegiatan Kami</h1>
          <h1 className="manfaat">Penerima Manfaat</h1>
        </center>
        <img className="gambarr" src={require('./Vector.png')} />
      </div>
    );
  }
}
export default Body4;
