import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef()
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputEl.focus()
    this.inputElementRef.current.focus()
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
        <div onClick={this.props.click} className={classes.close}>
          &times;
        </div>
        <p>
          Person, name: {this.props.name}, age: {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={(inputEl) => {this.inputEl = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
}

export default withClass(Person, classes.Person);
