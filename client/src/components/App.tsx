import { SignUp } from './SignUp';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/user">Users</Link>
          </li>

          <li>
            <Link to="/signup">Sign Up</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
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
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
