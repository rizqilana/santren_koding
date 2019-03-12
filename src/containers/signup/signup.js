import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Card } from '@material-ui/core';
import './signup.css';

class signup extends React.Component {
  state = {
    value: 2
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Card className="cards">
        <Paper>
          <Tabs
            value={this.state.value}
            indicatorColor="green"
            textColor="black"
            onChange={this.handleChange}>
            <Tab label="Active" />
            <Tab label="Active" />
          </Tabs>
        </Paper>
      </Card>
    );
  }
}

export default signup;
