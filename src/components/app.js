import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Samantha Green Portfolio</h1>
        <h2>React Project One</h2>
        <div>
          {moment().format('MMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
