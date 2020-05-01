import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import home from '../img/home.png';

export default class Movies extends Component {
  // state = {
  //   movies: [],
  // };

  render() {
    const { poster, title, year, type, id } = this.props;
    console.log('desde movies:', title);

    return (
      <Link to={`/detail/${id}`} className="card">
        <div className="card-image">
          <figure className="image">
            <img alt={title} src={poster} />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title} </p>
              <p className="subtitle is-6">{year}</p>
              <i>{type}</i>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
