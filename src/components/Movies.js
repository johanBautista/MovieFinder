import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import home from '../img/home.png';

export default class Movies extends Component {
  state = {
    movies: [],
  };

  render() {
    const { movies } = this.props;
    console.log('desde movies:',movies);
    
    return (
      <div className="movies">
        <div className="back-to-home">
          <Link className="link-home" to={'/'}>
            <img src={home} alt="home" className="img" />
          </Link>
        </div>
      </div>
    );
  }
}
