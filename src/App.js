import "@fontsource/roboto";
import "./App.css";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Routers from "./constants/Router";

function App() {
  return <Routers />;
}

export default App;
