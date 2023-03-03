import React from 'react';
import Tilt from 'react-parallax-tilt';

import './Logo.css';
import bot from './bot.png';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" style={{ height: 100, width: 100, borderRadius: 100 }}>
        <div className="pa3">
          <img src={bot} alt="bot" />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;
