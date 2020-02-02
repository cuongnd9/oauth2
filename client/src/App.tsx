import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <h1>Home</h1>} />
        <Route path='/auth'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
