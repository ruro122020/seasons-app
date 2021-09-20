import React from "react";

function Spinner({ message }) {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{message}</div>
    </div>
  );
}

Spinner.defaultProps = {
  //use name of prop that was passed in
  message: "Loading ...",
};

export default Spinner;
