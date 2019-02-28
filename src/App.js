import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Jumbo from './component/Jumbo/Jumbo';
import Body1 from './component/Body1/Body1';
import Body2 from './component/Body2/Body2';
import Body3 from './component/Body3/Body3';
import Body4 from './component/Body4/Body4';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbo />
        <Body1 />
        <Body2 />
        <Body3 />
        <Body4 />
      </div>
    );
  }
}

export default App;
