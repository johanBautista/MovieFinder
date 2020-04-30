import React, { Component } from 'react';
import Title from './Title';
import { Search } from '../components/Search';
import Movies from '../components/Movies';

class Home extends Component {
  state = {
    data: [],
  };

  _handleResults = (data) => {
    this.setState({ data });
    console.log('desde hresults:', data);
  };
  _renderResults() {
    // <Movies  movies={this.state.data} />
  }
  render() {
    return (
      <div>
        <Title title="iMovie Finder" />
        <Search onResults={this._handleResults} />
      </div>
    );
  }
}

export default Home;
