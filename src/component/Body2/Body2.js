import React from 'react';
import './Body2.css';
import {Card, CardText, CardBody,
    CardTitle, Row, Col} from 'reactstrap';

const Body2 = () => {
    return (
     <Row>
         <Col sm="6">
        
            <CardBody className="Card">
            <CardTitle className="VISI">VISI</CardTitle>
            <CardText className="Title">Mencetak santri yang berakhlak dan berkarakter di bidang teknologi informasi yang siap bersaing di kanca global</CardText>  
          </CardBody>
       
        </Col>
        <Col sm="6">
       
          <CardBody className="Card2">
          <CardTitle className="VISI">MISI</CardTitle>
          <CardText className="Title">Mencetak santri yang berakhlak dan berkarakter di bidang teknologi informasi yang siap bersaing di kanca global</CardText>  
        </CardBody>
     
      </Col>
    </Row>
    );
  };

  export default Body2;