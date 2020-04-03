import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent'

export default class App extends Component {
  // constructor (props) {
  // super(props)
  state = {
    host: ''
  }
  // }
  getData(host) {
    this.setState({
      host
    })
  }
  render() {
    const { host } = this.state
    return (
      <div className="App" >
        <NewComponent />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>host: {host}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

