import React, { Component } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';

export default class signup extends Component {
  render() {
    return (
      <div>
        <Card className="cardss">
          <center>
            <h1 className="koding">Santren Koding</h1>
          </center>
          <button className="masukkk">Masuk</button>
          <Link to="daftar">
            <button className="daftar">Daftar</button>
          </Link>
          <h1 className="eemail">Email</h1>
          <input
            type="text"
            placeholder="masukkan email"
            className="iinputt"
            name="email"
          />
          <h1 className="sanndi">Kata Sandi</h1>
          <input
            type="password"
            placeholder="masukkan kata sandi"
            className="inputt2"
          />
          <button className="masukk">Masuk</button>
        </Card>
      </div>
    );
  }
}
