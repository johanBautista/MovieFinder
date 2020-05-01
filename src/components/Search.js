import React, { Component } from 'react';

const API_KEY = '88dd7cc9';

export class Search extends Component {
  state = {
    user_text: '',
  };

  _handleChange = (e) => {
    this.setState({ user_text: e.target.value });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    const { user_text } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${user_text}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { Search = [], totalResults = '0' } = data;
        this.props.onResults(Search);
      });
  };

  render() {
    return (
      <form className="title-app" onSubmit={this._handleSubmit}>
        <input
          id="buscador"
          onChange={this._handleChange}
          placeholder="Search.."
          type="text"
        />
        <button id="resres" className="boton">
          Go!
        </button>
      </form>
    );
  }
}
