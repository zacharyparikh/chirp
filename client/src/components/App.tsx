import { SignUp } from './SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { AppBar, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

function App() {
  return (
    <div>
      <AppBar>
        <IconButton>
          <MenuIcon />
        </IconButton>

        <Typography>Chirp</Typography>
      </AppBar>

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
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
