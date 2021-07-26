import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route
          exact
          path='/login'
          component={() => <LogIn authorized={true} />}
        />
      </Switch>
      <Redirect from='/' to='/home' />
    </Router>
  );
}

export default Routers;
