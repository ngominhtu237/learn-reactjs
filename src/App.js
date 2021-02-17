import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello world!</p>
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
