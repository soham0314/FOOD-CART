import React from "react";
import ReactDOM from "react-dom/client";

// root
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

ReactDOM.render(heading, document.getElementById("root"));
