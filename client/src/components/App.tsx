import React from 'react';
import { SignUp } from './SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/user'>Users</Link>
          </li>

          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>

          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Feed />
        </Route>
      </Switch>
    </Router>
  );
}

function Feed() {
  return <h2>Feed</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

export default App;
