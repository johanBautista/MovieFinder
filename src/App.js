import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Movies from './components/Movies';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
      </Switch>
    </div>
  );
}

export default App;
