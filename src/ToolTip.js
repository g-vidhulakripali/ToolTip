// Tooltip.js
import React from "react";
import "./ToolTip.css";

function Tooltip({ text, position, children }) {
  return (
    <div className={`tooltip-container tooltip-${position}`}>
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
}

export default Tooltip;
