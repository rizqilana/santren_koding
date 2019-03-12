import './Jumbo.css';
import { CardText, CardTitle } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Jumbo = () => {
  return (
    <div className="Jumbo">
      <CardTitle className="titLe">Ngoding tur Ngaji</CardTitle>
      <CardText className="subtitle">
        Kalo cuma bisa ngoding mungkin udah banyak, tapi ini bisa ngaji juga
        loh. Lulus modok ngodingnya jago, apalagi ngajinya. Yuk ikutan !
      </CardText>
      <Link to="/Signup">
        <button className="button">Aku Ikut !</button>
      </Link>
      <img className="img" src={require('./Ilustrasi ngaji + ngoding.svg')} />
    </div>
  );
};

export default Jumbo;
