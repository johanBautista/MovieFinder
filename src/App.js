import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:movieId" component={Detail} />
        <Route exact path="/**" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
