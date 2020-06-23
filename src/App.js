// import React, { Component } from "react";
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Ian", age: 33 },
    ],
    otherState: "some other value",
  });

  const [otherState, setOtherState] = useState({
    otherState: "some other value",
  });

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("was clicked!");
    // DON'T DO THIS: personsState.person[0].name = "Jimmy";
    setPersonState({
      persons: [
        { name: "Jimmy", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Ian", age: 26 },
      ],
      // otherState: personsState.otherState,
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p> This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Ian", age: 33 },
//     ],
//     otherState: 'some other value'
//   };

//   switchNameHandler = () => {
//     // console.log("was clicked!");
//     // DON'T DO THIS: personsState.person[0].name = "Jimmy";
//     this.setState({
//       persons: [
//         { name: "Jimmy", age: 28 },
//         { name: "Manu", age: 29 },
//         { name: "Ian", age: 26 },
//       ],
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p> This is really working</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person
//           name={personsState.persons[0].name}
//           age={personsState.persons[0].age}
//         />
//         <Person
//           name={personsState.persons[1].name}
//           age={personsState.persons[1].age}
//         />
//         <Person
//           name={personsState.persons[2].name}
//           age={personsState.persons[2].age}
//         />
//       </div>
//     );
//   }
// }

// export default App;
