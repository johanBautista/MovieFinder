import React, { Component } from 'react';
import Title from './Title';
import { Search } from '../components/Search';
import MoviesList from '../components/MoviesList';

class Home extends Component {
  state = {
    data: [],
    usedSearch: false,
  };

  _handleResults = (data) => {
    this.setState({ data, usedSearch: true });
    console.log('desde hresults:', data);
  };

  _renderResults = () => {
    return this.state.data.length === 0 ? (
      <p className="title-app"> ☠︎ Results not found!</p>
    ) : (
      <MoviesList movies={this.state.data} />
    );
  };

  render() {
    return (
      <div>
        <Title title="iMovie Finder" />
        <div>
          <Search onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <p className="title-app">Search to movie please!</p>
        )}
      </div>
    );
  }
}

export default Home;
