import React, { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

const App = () => {
  const [userName, setUserName] = useState({
    outputs: [
      { name: "Tic", text: "1st paragraph" },
      { name: "Tac", text: "2nd paragraph" },
      { name: "Toe", text: "3rd paragraph" }
    ]
  });

  const handleChange = e => {
    setUserName({
      outputs: [
        { name: e.target.value, text: "1st paragraph" },
        { name: e.target.value, text: "2nd paragraph" },
        { name: e.target.value }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Assignment</h1>
      <ol>
        <li>Create TWO new components: UserInput and UserOutput</li>
        <li>
          UserInput should hold an input element, UserOutput two paragraphs
        </li>
        <li>
          Output multiple UserOutput components in the App component (any
          paragraph texts of your choice)
        </li>
        <li>
          Pass a username (of your choice) to UserOutput via props and display
          it there
        </li>
        <li>
          Add state to the App component (=> the username) and pass the username
          to the UserOutput component
        </li>
        <li>
          Add a method to manipulate the state (=> an event-handler method)
        </li>
        <li>
          Pass the event-handler method reference to the UserInput component and
          bind it to the input-change event
        </li>
        <li>
          Ensure that the new input entered by the user overwrites the old
          username passed to UserOutput
        </li>
        <li>
          Add two-way-binding to your input (in UserInput) to also display the
          starting username
        </li>
        <li>
          Add styling of your choice to your components/ elements in the
          components - both with inline styles and stylesheets
        </li>
      </ol>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5vh",
          background: "#eee",
          margin: "15vh 0"
        }}
        className="flex"
      >
        <div className="border">
          <UserInput
            changed={handleChange}
            currentName={userName.outputs[0].name}
          />
        </div>
        <div className="border">
          {userName.outputs.map((x, key) => (
            <UserOutput key={key} userName={x.name} text={x.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
