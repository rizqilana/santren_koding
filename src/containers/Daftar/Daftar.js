import React, { Component } from 'react';
import './Daftar.css';
import { Link } from 'react-router-dom';

export default class Daftar extends Component {
  render() {
    return (
      <div>
        <card className="cardss2">
          <h1 className="koding">Santren Koding</h1>
          <Link to="signup">
            <button className="masukk2">Masuk</button>
          </Link>
          <Link to="daftar">
            <button className="daftar2">Daftar</button>
          </Link>
          <h1 className="namaa">Nama Lengkap</h1>
          <input
            className="namaa2"
            type="text"
            placeholder="Masukkan nama lengkap"
          />
          <h1 className="emaill">Email</h1>
          <input
            className="emaill2"
            type="email"
            placeholder="Masukkan email"
          />
          <h1 className="katas">Kata Sandi</h1>
          <input
            className="katas2"
            type="password"
            placeholder="Masukkan kata sandi"
          />
          <h1 className="katass">Konfirmasi Kata Sandi</h1>
          <input
            className="katasss"
            type="password"
            placeholder="Masukkan kata sandi"
          />
          <button className="daftarr">Daftar</button>
        </card>
      </div>
    );
  }
}
