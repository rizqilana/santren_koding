import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" className="Nav">
          <img className="icon" src={require('./Logo Santren + Circle.svg')} />
          <Link to="/" className="FontColor">
            Santren Koding
          </Link>
          <Nav className="ml-auto" navbar>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <NavItem className="icon">
                <Link to="/kajian" className="Font1">
                  Belajar
                </Link>
              </NavItem>
              <NavItem>
                <Link to="Mondok" className="Font2">
                  Berbagi
                </Link>
              </NavItem>
              <NavItem>
                <Link to="Kitab" className="Font3">
                  Bekerja
                </Link>
              </NavItem>
              <Link to="/Signup">
                <button className="buttonn">Masuk</button>
              </Link>
              <Link to="/daftar">
                <button className="buttonn2">Daftar</button>
              </Link>
            </Collapse>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
