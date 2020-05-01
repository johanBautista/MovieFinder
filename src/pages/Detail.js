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
      <div>
        <GoHome />
        <section className="section section-movie">
          <figure className="image-detail">
            <img alt={Title} src={Poster} />
          </figure>
          <div className="container">
            <h1 className="title-film">{Title} </h1>
            <h3>{Actors}</h3>
            <h4>{Director} </h4>
            <small>{Genre}</small>
            <p>{Plot} </p>
            <p>{Metascore}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Detail;
