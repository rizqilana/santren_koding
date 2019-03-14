import React, { Component } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

export default class signup extends Component {
  render() {
    return (
      <div>
        <card className="cardss">
          <center>
            <h1 className="koding">Santren Koding</h1>
          </center>
          <button className="masukkk">Masuk</button>
          <Link to="daftar">
            <button className="daftar">Daftar</button>
          </Link>
          <h1 className="email">Email</h1>
          <input type="email" placeholder="masukkan email" className="inputt" />
          <h1 className="sandi">Kata Sandi</h1>
          <input
            type="password"
            placeholder="masukkan kata sandi"
            className="inputt2"
          />
          <button className="masukk">Masuk</button>
        </card>
      </div>
    );
  }
}
