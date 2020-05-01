import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Movies extends Component {
  render() {
    const { poster, title, year, type, id } = this.props;

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
