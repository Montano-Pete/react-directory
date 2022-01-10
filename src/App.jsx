import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}
