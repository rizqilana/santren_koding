import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
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
                  Kajian Koding
                </Link>
              </NavItem>
              <NavItem>
                <Link to="Mondok" className="Font2">
                  Mondok Koding
                </Link>
              </NavItem>
              <NavItem>
                <Link to="Kitab" className="Font3">
                  Kitab Koding
                </Link>
              </NavItem>
            </Collapse>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
