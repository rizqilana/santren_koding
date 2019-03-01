import React from 'react';
import './Body2.css';
import { Card, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';

const Body2 = () => {
  return (
    <Row>
      <img className="Imgg" src={require('./Ellipse.png')} />
      <Col sm="6">
        <CardBody className="Card">
          <CardTitle className="VISI">VISI</CardTitle>
          <CardText className="Title">
            Mencetak santri yang berakhlak dan berkarakter di bidang teknologi
            informasi yang siap bersaing di kanca global
          </CardText>
        </CardBody>
        <img className="Imgg2" src={require('./“-1.png')} />
        <img className="Imgg1" src={require('./“.png')} />
      </Col>

      <CardBody className="Card2">
        <CardTitle className="MISI">MISI</CardTitle>
        <CardText className="title">
          <p>
            <img className="rectangle" src={require('./uuu.png')} />
            Menjadi pelopor pendidikan non formal dalam sektor Teknologi
            Informasi di Indonesia
          </p>
          <p>
            <img className="rectangle2" src={require('./uuu.png')} />
            Mendorong pertumbuhan tenaga ahli di bidang Teknologi Informasi yang
            memenuhi kebutuhan Industri
          </p>
          <p>
            <img className="rectangle3" src={require('./uuu.png')} />
            Membangun Kolaborasi antarpihak yang berkomitmen dalam membentuk
            ekosistem Industri Kreatif di Indonesia
          </p>
          <p>
            <img className="rectangle4" src={require('./uuu.png')} />
            Mendorong Inovasi di bidang Teknologi Informasi
          </p>
        </CardText>
      </CardBody>
    </Row>
  );
};

export default Body2;
