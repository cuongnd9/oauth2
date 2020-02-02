import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import logo from './logo.svg';

const Login = () => {
  const location = useLocation();

  // Facebook
  const facebookParams = {
    client_id: '470273657002952',
    // redirect_uri: 'https://justoauth2.herokuapp.com/auth/facebook',
    redirect_uri: 'http://localhost:3000/auth/facebook',
    scope: ['email', 'user_friends'].join(','),
    response_type: 'code',
    auth_type: 'rerequest',
    display: 'popup',
  };
  const facebookRequestUri = `https://www.facebook.com/v5.0/dialog/oauth?${queryString.stringify(facebookParams)}`;

  useEffect(() => {
    // const urlParams = queryString.parse(window.location.search);
    const urlParams = queryString.parse(location.search);
    const { code } = urlParams;
    console.log(code, '----------');
    // send request to server.
  }, [location.search]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: '30px' }}>
          OAuth2
        </p>
        <a
          className="App-button"
          href={facebookRequestUri}
        >
          Login with Facebook
        </a>
        <a
          className="App-button"
          href="https://reactjs.org"
          style={{ color: 'tomato' }}
        >
          Login with Google
        </a>
        <a
          className="App-button"
          href="https://reactjs.org"
          style={{ color: '#22a1f3' }}
        >
          Login with Twitter
        </a>
        <a
          className="App-button"
          href="https://reactjs.org"
          style={{ color: '#24292e' }}
        >
          Login with Github
        </a>
      </header>
    </div>
  );
}

export default Login;

