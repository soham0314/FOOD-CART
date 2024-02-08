import React from "react";
import ReactDOM from "react-dom/client";

//root
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading);

//jsx - html-like

const jsxHeading = <h1 id="heading">Hello Pune !! Kase aha Mandali</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
