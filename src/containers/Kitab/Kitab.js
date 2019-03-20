import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Kitab extends Component {
  render() {
    return (
      <div>
        <h1>Kitab Koding</h1>
        <Link to="/">
          <Button color="primary">cancel</Button>
        </Link>
      </div>
    );
  }
}

export default Kitab;
