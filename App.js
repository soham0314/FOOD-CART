import React from "react";
import ReactDOM from "react-dom/client";

/*root   [8/02/24]
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading);


// jsx - (html-like) :

const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Hello Pune !! Kase aha Mandali🙂
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
*/

// ReactComponent      [9/02/24]

const Title = () => <h1>Helloo everyone!!</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">HELLO REACT COMPONENTS</h1>
  </div>
);

console.log(HeadingComponent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
