import React, { Component } from 'react';
import GoHome from '../components/GoHome';

const API_KEY = '88dd7cc9';

class Detail extends Component {
  state = {
    movie: {},
  };

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((movie) => {
        this.setState({ movie });
      });
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this._fetchMovie({ id: movieId });
  }

  render() {
    const {
      Title,
      Poster,
      Actors,
      Metascore,
      Plot,
      Director,
      Genre,
    } = this.state.movie;
    return (
      <section className="section section-movie">
        <figure className="image-detail">
          <img alt={Title} src={Poster} />
        </figure>
        <div className="container">
          <h1 className="title is-1">{Title} </h1>
          <h3 className="title is-6">{Actors}</h3>
          <h2 className="subtitle is-4">{Director} </h2>
          <small>{Genre}</small>
          <p>{Plot} </p>
          <p>{Metascore}</p>
        </div>
        <GoHome />
      </section>
    );
  }
}

export default Detail;
