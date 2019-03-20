import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Mondok extends Component {
  render() {
    return (
      <div>
        <h1>Mondok Koding</h1>
        <Link to="/">
          <Button color="primary">cancel</Button>
        </Link>
      </div>
    );
  }
}

export default Mondok;
