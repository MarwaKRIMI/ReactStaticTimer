import React from "react";
import ReactDOM from "react-dom";
import StaticTimer from "./StaticTimer";

const App = () => {
  return (
    <div>
      <StaticTimer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
