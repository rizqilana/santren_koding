import './Jumbo.css';
import { CardText, CardTitle } from 'reactstrap';
import React from 'react';

const Jumbo = () => {
  return (
    <div className="Jumbo">
      <CardTitle className="titLe">Ngoding tur Ngaji</CardTitle>
      <CardText className="subtitle">
        Kalo cuma bisa ngoding mungkin udah banyak, tapi ini bisa ngaji juga
        loh. Lulus modok ngodingnya jago, apalagi ngajinya. Yuk ikutan !
      </CardText>
      <button className="button">Aku Ikut !</button>
      <img className="img" src={require('./Ilustrasi ngaji + ngoding.svg')} />
    </div>
  );
};

export default Jumbo;
