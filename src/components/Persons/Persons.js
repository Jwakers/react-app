import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] should component update')
    //     return (nextProps.persons !== this.props.persons ||
    //             nextProps.changed !== this.props.changed ||
    //             nextProps.clicked !== this.props.clicked)
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('[Persons.js] getSnapshotBeforeUpdate')
    //     return null
    // }

    // componentDidUpdate(props, state, snapshot) {
    //     console.log('[Persons.js] componentDidUpdate')
    // }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          change={event => this.props.changed(event, person.id)}
          name={person.name}
          age={person.age}
          key={person.id}
        />
      );
    });
  }
}

export default Persons;
