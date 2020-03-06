import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Rick", age: 109, id: '2ass6s' },
      { name: "Morty", age: 14, id: 's6aesd'},
      { name: "Birdman", age: 800, id: 'l8475u'}
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                  click={() => this.deletePersonHandler(index)}
                  change={event => this.nameChangedHandler(event, person.id)}
                  name={person.name}
                  age={person.age}
                  key={person.id} />
          })
          }
        </div>
      );
      // buttonStyle.backgroundColor = "red";
      // buttonStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      // }
    }
    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    return (
      <div className="App">
        <h1> React app </h1>
        <p className={classes.join(' ')}>Some text</p>
        <button onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'))
  }
}

export default App;
