import React, { Component } from 'react';
import './Jumbo.css'

class Jumbo extends Component {
    render() {
      return (
         <div>
            <h1  className="display">Ngoding tur Ngaji</h1>
               <h5 className="title">
                    Kalo cuma bisa ngoding mungkin udah
                    banyak, tapi ini bisa ngaji juga loh. Lulus
                    modok ngodingnya jago, apalagi ngajinya.
                    Yuk ikutan !
                </h5>
                <button className="button">Aku Ikut !</button>
                <img className="img" src={require('./Ilustrasi ngaji + ngoding.svg')}/>
           </div>

          
    );

  }
}

export default Jumbo;

