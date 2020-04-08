import React, { Component } from 'react';
import { Router, Route, Switch, /* useRouteMatch, useHistory  */ } from 'react-router-dom';
// import NewComponent from './NewComponent'
import FormComponent from './FormComponent'
import {createBrowserHistory} from 'history';
// html5 web api
import NavMenu from './NavMenu'
import './App.css';

export const history = createBrowserHistory();

export default class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <NavMenu />
          <Switch>
            <Route exact path="/" component={FormComponent} />
            <Route path="/about" component={About} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const About = () => {
  return (
    <div>About</div>
  )
}
const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}
