import './Jumbo.css';
import React from 'react';


const Jumbo = () => {
  return (
      <div className="Jumbo">
            <h1  className="display">Ngoding tur Ngaji</h1>
               <h5 className="title1">
                    Kalo cuma bisa ngoding mungkin udah
                    banyak, tapi ini bisa ngaji juga loh. Lulus
                    modok ngodingnya jago, apalagi ngajinya.
                    Yuk ikutan !
                </h5>
                <button className="button">Aku Ikut !</button>
                <img className="img" src={require('./Ilustrasi ngaji + ngoding.svg')}/>
           </div>
  );
};

export default Jumbo;

