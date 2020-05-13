import React, { Component } from 'react';
import Movies from './Movies';

class MoviesList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movies">
        {movies.map((movie) => {
          return (
            <div key={movie.imdbID} className="MoviesList-item">
              <Movies
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                type={movie.Type}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MoviesList;
