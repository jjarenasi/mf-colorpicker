import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ColorPicker from "./components/ColorPicker";

const App = () => (
  <div className="container">
    <ColorPicker/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
