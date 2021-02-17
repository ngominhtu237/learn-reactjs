import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = (name) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: name, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <p>Hello world!</p>
        <button onClick={() => this.switchNameHandler('Maximilium!!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />

        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangeHandler}>
            My hobbies: Racing
        </Person>

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
        />
      </div>
    );
  }
}

export default App;
