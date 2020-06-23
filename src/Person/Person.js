import React from "react";

const person = (props) => {
  return (
    <p>
      I'm {props.name} Person and I am {props.age} years old
    </p>
  );
};

export default person;
