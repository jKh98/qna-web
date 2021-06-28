import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./components/login";
import RegisterPage from "./components/register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact={true} component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
