import React, { Component } from 'react';
import './Body1.css';


class Body1 extends Component {
    render() {
      return (
        
        <div>
          <img className="Img" src={require('./“.png')}/>
            <h5 className="Titlele">
               Jika seseorang meninggal dunia, maka terputuslah
               amalannya kecuali tiga perkara (yaitu):sedekah jariyah,
               ilmu yang bermanfaat, atau do'a anak sholeh.
               (HR.Muslim no. 1631)
            </h5> 
            <img className="Img2" src={require('./“-1.png')}/>
        </div>
          
    );

  }
}

export default Body1;