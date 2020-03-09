import React, { Component } from "react";
import classes from "./Person.css";
import Aux from '../../../hoc/Aux'

class Person extends Component {
  
  render() {
    console.log('[Person.js] rendering...')
    return (
    // <div className={classes.person}>
      <Aux>
        <div onClick={this.props.click} className={classes.close}>
          &times;
        </div>
        <p>
          Person, name: {this.props.name}, age: {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.change} value={this.props.name} />
      </Aux>
    // </div>
    )
}
};

export default Person;
