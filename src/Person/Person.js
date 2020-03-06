import React from "react";
import styled from 'styled-components';
// import "./Person.css";

const StyledDiv = styled.div`
  position: relative;
  width: 60%;
  margin: 1rem auto;
  border: 1px solid #eee;
  padding: 0.4rem;
  box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.2);
  @media (min-width: 500px): {
    width: "450px"
  }
`;

const closeStyle = {
    color: "red",
    fontWeight: "bold",
    position: "absolute",
    top: ".2rem",
    right: ".4rem",
    cursor: "pointer"
  };

const person = props => {
  return (
    <StyledDiv>
        <div onClick={props.click} style={closeStyle}>
          &times;
        </div>
        <p>
          Person, name: {props.name}, age: {props.age}
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name} />
    </StyledDiv>
  );
};

export default person;
