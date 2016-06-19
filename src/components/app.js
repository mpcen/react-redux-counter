import React, { Component } from 'react';
import CounterButton from './counter_button';
import CounterDisplay from './counter_display';

export default class App extends Component {
  render() {
    return (
      <div id="appContainer">
      	<h1>A Simple Counter made with React</h1>
      	<CounterDisplay />
      	<CounterButton />
      </div>
    );
  }
}
