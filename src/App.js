import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Jumbo from './component/Jumbo/Jumbo';
import Body1 from './component/Body1/Body1';
import Body2 from './component/Body2/Body2';

class App extends Component {
  render() {
    return (
      <div>
     <Navbar/>
     <Jumbo/>
    <Body1/>
    <Body2/>
      </div>
    );
  }
}

export default App;
