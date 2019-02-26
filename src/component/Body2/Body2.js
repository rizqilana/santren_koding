import React from 'react';
import './Body2.css';
import {Card, CardText, CardBody,
    CardTitle, Row, Col} from 'reactstrap';

const Body2 = () => {
    return (
     <Row>
         <img className="Imgg" src={require('./Ellipse.png')}/>
         <Col sm="6">
        
        <CardBody  className="Card">
        <CardTitle className="VISI">VISI</CardTitle>
        <CardText className="Title">Mencetak santri yang berakhlak dan berkarakter di bidang teknologi informasi yang siap bersaing di kanca global</CardText>  
      </CardBody>
        
    </Col>
   
     
      <CardBody  className="Card2">
      <CardTitle className="VISI">MISI</CardTitle>
      <CardText className="title">
      <p>Menjadi pelopor pendidikan non formal dalam sektor Teknologi Informasi di Indonesia</p>
      <p>Mendorong pertumbuhan tenaga ahli di bidang Teknologi Informasi yang memenuhi kebutuhan Industri</p>
      <p>Membangun Kolaborasi antarpihak yang berkomitmen dalam membentuk ekosistem Industri Kreatif di Indonesia</p>
      <p>Mendorong Inovasi di bidang Teknologi Informasi</p>
      </CardText>  
    </CardBody>
     
    </Row>
    );
  };

  export default Body2;