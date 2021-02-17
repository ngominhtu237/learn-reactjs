import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello world!</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">My hobbies: Racing</Person>
        <Person name="Stephanie" age="26" />
      </div>
    );
  }
}

export default App;
