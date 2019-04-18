import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Movies from "./containers/Movies";
import NewMovie from "./components/NewMovie";
import MovieCard from "./components/MovieCard";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/movies"
                render={routerProps => <Movies {...routerProps} />}
              />
              <Route exact path="/movies/new" component={NewMovie} />
              <Route exact path="/movies/:id" component={MovieCard} />
            </Switch>
          </React.Fragment>
        </Router>
        ,;
      </div>
    );
  }
}

export default App;
