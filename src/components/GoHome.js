import React from 'react';
import { Link } from 'react-router-dom';
import home from '../img/home.png';

const GoHome = () => {
  return (
    <div className="movies">
      <div className="back-to-home">
        <Link className="link-home" to={'/'}>
          <img src={home} alt="home" className="img" />
        </Link>
      </div>
    </div>
  );
};

export default GoHome;
