import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Kajian from './containers/Kajian/Kajian';
import Mondok from './containers/Mondok/Mondok';
import Kitab from './containers/Kitab/Kitab';
import Home from './Home';
import Signup from './containers/signup/signup';
import Navbar from './component/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/kajian" component={Kajian} />
          <Route exact path="/" component={Home} />
          <Route exact path="/mondok" component={Mondok} />
          <Route exact path="/kitab" component={Kitab} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
