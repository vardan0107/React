import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

const usingCoreReact = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "h1 hello createElement"),
  React.createElement("h2", {}, "h2 hello createElement"),
  React.createElement("h3", {}, "h3 hello createElement"),
]);
const usingJSX = (
  <div className="title">
    <h1>h1 hello JSX</h1>
    <h2>h2 hello JSX</h2>
    <h3>h3 hello JSX</h3>
  </div>
);

const Component = () => (
  <div style={{ backgroundColor: "red" }} className="title">
    <h1>h1 hello JSX Component</h1>
    <h2>h2 hello JSX Component</h2>
    <h3>h3 hello JSX Component</h3>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

function ParentComponent() {
  return (
    <div>
      <Header />
      <h1>ParentComponent</h1>
      <Component />
    </div>
  );
}
// root.render(usingCoreReact);
root.render(<ParentComponent />);

/**
 * all the below lines means the same thing
 * root.render(<ParentComponent />);
 * root.render(ParentComponent());
 * root.render(<ParentComponent ></ParentComponent>);
 */
