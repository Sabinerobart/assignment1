import React from "react";

const UserOutput = props => {
  return (
    <React.Fragment>
      <p>{props.userName}</p>
      <p>{props.text}</p>
    </React.Fragment>
  );
};

export default UserOutput;
