const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, " I'am an h1 Tag"),
    React.createElement("h2", {}, "i'am an h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, " I'am an h1 Tag"),
    React.createElement("h2", {}, "i'am an h2 Tag"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createroot(document.getElementById("root"));

root.render(parent);
