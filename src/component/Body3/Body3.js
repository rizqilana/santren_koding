import React, { Component } from 'react';
import './Body3.css';

import { CardBody, CardTitle, Row, Col } from 'reactstrap';

class Body3 extends Component {
  render() {
    return (
      <div>
        <CardTitle className="h1">Pengin gabung?</CardTitle>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:700"
          rel="stylesheet"
        />
        <CardTitle className="h5">Nih Syaratnya</CardTitle>
        <Row>
          <Col>
            <CardBody className="Caard1">
              <CardTitle className="ctitle">Mendapat RIDHO orang tua</CardTitle>
              <img className="gambar" src={require('./Group 2.png')} />
            </CardBody>
          </Col>
          <Col>
            <CardBody className="Caard2">
              <CardTitle className="ctitle2">Tidak mendekati ZINA</CardTitle>
              <img className="gambar2" src={require('./Group 3.png')} />
            </CardBody>
          </Col>
          <Col>
            <CardBody className="Caard3">
              <CardTitle className="ctitle3">
                Tidak MENDZOLIMI karya orang lain
              </CardTitle>
              <img className="gambar3" src={require('./g1095.png')} />
            </CardBody>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Body3;
