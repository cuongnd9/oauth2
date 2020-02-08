import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <div className="App">
          <header className="App-header">
            <h3>Home</h3>
            <Link
              className="App-button"
              to="/auth"
              style={{ color: '#22a1f3' }}
            >
              Login
            </Link>
          </header>
        </div>} />
        <Route path='/auth'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
