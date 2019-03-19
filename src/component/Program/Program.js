import React, { Component } from 'react';
import './Program.css';

export default class Program extends Component {
  render() {
    return (
      <div>
        <h1 className="program">Program Kami</h1>
        <card className="car">
          <center>
            <p className="H1" style={{ marginTop: '95px' }}>
              Mondok Koding
            </p>
          </center>
          <img className="carr1" src={require('./Mondok.png')} />
        </card>
        <card className="car2">
          <center>
            <img className="carr2" src={require('./g2568.png')} />
            <h5 className="H2" style={{ marginTop: '95px' }}>
              Koding Academy & Kajian Koding
            </h5>
          </center>
        </card>
        <card className="car3">
          <center>
            <img className="carr3" src={require('./Group (1).png')} />
            <h5 className="H3" style={{ marginTop: '95px' }}>
              Kitab Koding
            </h5>
          </center>
        </card>
        <card className="car4">
          <center>
            <img className="carr4" src={require('./SMK koding.png')} />
            <h5 className="H4" style={{ marginTop: '95px' }}>
              SMK Koding
            </h5>
          </center>
        </card>
        <card className="car5">
          <center>
            <img className="carr5" src={require('./AI.png')} />
            <h5 className="H5" style={{ marginTop: '95px' }}>
              Santren AI
            </h5>
          </center>
        </card>
        <card className="car6">
          <center>
            <img className="carr6" src={require('./Koding college.png')} />
            <h5 className="H6" style={{ marginTop: '95px' }}>
              Koding College
            </h5>
          </center>
        </card>
        <card className="car7">
          <center>
            <img className="carr7" src={require('./Fatimah dev.png')} />
            <h5 className="H7" style={{ marginTop: '95px' }}>
              Fatimah Dev
            </h5>
          </center>
        </card>
      </div>
    );
  }
}
