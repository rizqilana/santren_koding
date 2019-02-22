import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Jumbo from './component/Jumbo/Jumbo';
import Body1 from './component/Body1/Body1';

class App extends Component {
  render() {
    return (
      <div>
     <Navbar/>
     <Jumbo/>
    
      </div>
    );
  }
}

export default App;
