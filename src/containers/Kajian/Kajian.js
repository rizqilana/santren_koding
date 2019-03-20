import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Kajian extends Component {
  render() {
    return (
      <div>
        <h1>Kajian coding</h1>
        <Link to="/">
          <Button color="primary">cancel</Button>
        </Link>
      </div>
    );
  }
}

export default Kajian;
