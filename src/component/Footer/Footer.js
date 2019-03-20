import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = props => {
  return (
    <div>
      <div className="footer">
        <p className="kontak">Kontak</p>
        <p className="nomor">081 888 3632 ( Fakhri ) info@santrenkoding.org</p>
        <p className="kantor">Kantor Pusat</p>
        <p className="alamat">
          Jl.Kelud Raya lll No. 8 Gajah Mungkur, Semarang
        </p>
        <p className="stitle">Santren Koding</p>
        <img className="slogo" src={require('./santrenlogo.png')} />
        <p className="santrens">copyright@santrenkoding</p>

        <img className="fb" src={require('./faceboo.png')} />

        <img className="tele" src={require('./tele.png')} />
      </div>
      <div className="display-3">
        <h1 className="berkah">#BuatKodemuBerkah</h1>
        <img className="imgg" src={require('./Group 2.png')} />
        <img className="imgg2" src={require('./Group 3.png')} />
        <img className="imgg3" src={require('./Group 2 (1).png')} />
        <img className="imgg4" src={require('./Group.png')} />
        <h1 className="manfaat">Penerima Manfaat</h1>
        <h1 className="thn">2017</h1>
        <p className="ftitle">
          Santrenkoding berjalan dengan menerima 5 orang santri,bekerjasama
          dengan3 sekolah dan memiliki pembelajar online
        </p>
        <h1 className="thn2">2018</h1>
        <p className="ftitle2">
          Santrenkoding menerima 5 orang Santri,bekerjasama dengan5 sekolah dan
          memiliki 800 pembelajar online
        </p>
        <h1 className="thn3">2019</h1>
        <p className="ftitle3">
          Santrenkoding menargetkan 20 Santri,bekerjasama dengan 10 sekolah dan
          memiliki 1500 pembelajar online
        </p>
      </div>
    </div>
  );
};

export default Footer;
