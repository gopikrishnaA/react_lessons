import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewComponent from './NewComponent'
import NavMenu from './NavMenu'

import './App.css';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavMenu />
          <Switch>
            <Route exact path="/">
              <NewComponent />
            </Route>
            <Route path="/about">
              <div>About</div>
            </Route>
            <Route path="/dashboard">
              <div>dashboard</div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

