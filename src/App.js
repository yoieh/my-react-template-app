import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import screen from "./component/screen";
import NotFound from "./component/404";

// import { store } from './redux/store'
// import { push } from "react-router-redux";
// import * as Actions from "./redux/actions"

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navbar color="teal" light expand="md">
            <NavbarBrand tag={Link} to="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/test">Test</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
        <main>
          <Switch>
            <Route path="/:locale([a-z]{1,2})?/" exact component={screen.Home} />
            <Route path="/:locale([a-z]{1,2})?/test" exact component={screen.Test} />
            <Route path="/:locale([a-z]{1,2})?/test/:id" component={screen.Test} />
            <Route path="/:locale([a-z]{1,2})?/404" exact component={NotFound} />
            <Redirect to="/404"/>
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.location
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
//export default App;
