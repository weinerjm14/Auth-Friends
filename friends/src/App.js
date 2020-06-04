import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import "./App.css";

import { Login } from "./components/login";
import { FriendList } from "./components/friendlist";
import { AddFriend } from "./components/AddFriend";

function App(props) {
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
  };
  return (
    <section className="App">
      <Router>
        <div className="nav">
          <Link to="/login">Login</Link>

          <Link to="/friendslist">Friends List</Link>

          <Link to="/addfriend">Add Friend</Link>
          <button onClick={logout}>Log Out</button>
        </div>
        <div className="routes">
          <Switch>
            <PrivateRoute exact path="/friendslist" component={FriendList} />
            <PrivateRoute exact path="/addfriend" component={AddFriend} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </Router>
    </section>
  );
}

export default App;
