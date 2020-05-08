import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import "./App.css";

import { Login } from "./components/login";
import { FriendList } from "./components/friendlist";

function App() {
  return (
    <section className="App">
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friendslist">Friends List</Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute exact path="/friendslist" component={FriendList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </Router>
    </section>
  );
}

export default App;
