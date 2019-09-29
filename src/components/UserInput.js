import React from "react";

const UserInput = props => {
  const style = {
    outline: "none",
    border: "2px solid black",
    padding: ".5rem"
  };

  return (
    <input
      type="text"
      onChange={props.changed}
      placeholder={props.currentName}
      style={style}
    />
  );
};

export default UserInput;
