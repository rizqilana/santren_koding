import React, { Component } from 'react';
import './Program.css';

export default class Program extends Component {
  render() {
    return (
      <div>
        <h1 className="program">Program Kami</h1>
        <card className="car">
          <img className="carr1" src={require('./Mondok.png')} />
        </card>
        <card className="car2">
          <img className="carr2" src={require('./g2568.png')} />
        </card>
        <card className="car3">
          <img className="carr3" src={require('./Group (1).png')} />
        </card>
        <card className="car4">
          <img className="carr4" src={require('./SMK koding.png')} />
        </card>
        <card className="car5">
          <img className="carr5" src={require('./AI.png')} />
        </card>
        <card className="car6">
          <img className="carr6" src={require('./Koding college.png')} />
        </card>
        <card className="car7">
          <img className="carr7" src={require('./Fatimah dev.png')} />
        </card>
      </div>
    );
  }
}
