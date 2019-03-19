import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, Button } from 'reactstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar light expand="md" className="Nav">
          <img className="icon" src={require('./Logo Santren + Circle.svg')} />
          <Link to="/" className="FontColor">
            Santren Koding
          </Link>

          <Link to="/kajian" className="Font1">
            Belajar
          </Link>

          <Link to="Mondok" className="Font2">
            Berbagi
          </Link>

          <Link to="Kitab" className="Font3">
            Bekerja
          </Link>
          <Link to="/Signup">
            <button outline color="success" className="buttonn">
              Masuk
            </button>
          </Link>
          <Link to="/daftar">
            <button color="success" className="buttonn2">
              Daftar
            </button>
          </Link>
        </Navbar>
      </div>
    );
  }
}
