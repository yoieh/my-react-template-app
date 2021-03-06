/**
 * @flow
 * Project: my-react-template-app
 * Author: Johan Nilsson (johan.nilsson@nerdsofsweden.se)
 * Copyright 2017 - 2018 Golfhaftet, OnTee
 */

import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Route, Switch, Redirect } from "react-router";

import {Home, Header, Debug, NotFound} from "./containers"

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
            <Route path="/:locale([a-z]{1,2})?/" component={Header} />
        </header>
        <main>
            <Switch>
                <Route path="/:locale([a-z]{1,2})?/" exact component={Home} />
                <Route path="/:locale([a-z]{1,2})?/test" exact component={Debug} />
                <Route path="/:locale([a-z]{1,2})?/test/:id" component={Debug} />
                <Route path="/:locale([a-z]{1,2})?/404" exact component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	location: state.location,
});

const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
