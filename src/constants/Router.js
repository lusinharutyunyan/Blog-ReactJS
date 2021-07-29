import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Story from "../components/Story/Story";
import Posts from "../components/Posts/Posts";
import LogOut from "../components/LogOut/LogOut";
import AllPosts from "../components/Posts/AllPosts";

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
        <Route exact path='/story' component={Story} />
        <Route exact path='/posts' component={Posts} />
        <Route
          exact
          path='/logout'
          component={() => <LogOut authorized={true} />}
        />
        <Route exact path ="/AllPosts" component={AllPosts} />
      </Switch>
      <Redirect from='/' to='/home' />
    </Router>
  );
}

export default Routers;
