import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Navbar.css';

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
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" className="Nav">
          <img className="icon" src={require('./Logo Santren + Circle.svg')} />
          <Navbar className="FontColor">Santren Koding</Navbar>
          <Nav className="ml-auto" navbar>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <NavItem className="icon">
                <NavLink className="Font1" href="">
                  Kajian Koding
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="Font2" href="">
                  Mondok Koding
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="Font3" href="">
                  Kitab Koding
                </NavLink>
              </NavItem>
            </Collapse>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
