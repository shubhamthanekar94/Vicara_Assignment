import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Stackoverflow from "./components/stackoverflow/Stackoverflow";
import Home from "./components/Home/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/stackoverflow" exact component={Stackoverflow} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
