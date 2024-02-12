// assignmet-03

/*
we can also write functional component like this :
1) 
const heading1 = () =>{
    return <h1>react component </h1>;
};

2)
const heading2  = () => <h1>react component </h1> 
 
( heading1 is equal to  heading2.they are both same  )

/we can also use  a normal js function :

const heading1 = function(){
    return (
        <h1>react component </h1>
   );
};

*/

import React from "react";
import ReactDOM from "react-dom/client";

const jsx = (
  <div>
    <h1>Helooo</h1>
    <h2>This is a</h2>
    <h3>jsx or a react element or a simple js variable</h3>
  </div>
);

const title1 = () => (
  <div class="title1">
    <h1>Hello</h1>
    <h2>Pune !!</h2>
    <h3>This is a React Component 1</h3>
    {jsx()}
  </div>
);

const title2 = () => (
  <div class="title2">
    <h1>Hello</h1>
    <h2>Pune !!</h2>
    <h3>This is a React Component 2</h3>
    <title1></title1>
    <title1 />
    {title1()}
  </div>
);

const ReactElement = React.createElement(
  div,
  { className: "title" },
  React.createElement("h1", null, "main Header"),
  React.createElement("he", null, "sub Header 1"),
  React.createElement("h3", null, "sub Header 2")
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<title2 />);

// 2nd Question :
