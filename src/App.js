import React from "react";
import Tooltip from "./ToolTip";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Tooltip Example</h1>
      <p>
        Hover over these texts to see tooltips:
        <Tooltip text="Top Tooltip" position="top">
          <span className="tooltip-trigger">Top </span>
        </Tooltip>
        <Tooltip text="Left Tooltip" position="left">
          <span className="tooltip-trigger">Left </span>
        </Tooltip>
        <Tooltip text="Right Tooltip" position="right">
          <span className="tooltip-trigger">Right </span>
        </Tooltip>
        <Tooltip text="Bottom Tooltip" position="bottom">
          <span className="tooltip-trigger">Bottom </span>
        </Tooltip>
      </p>
    </div>
  );
}

export default App;
