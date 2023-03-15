/**
 * <div id="parent">
 *  <div id="child1">
 *      <h1>1</h1>
 *      <h2>2</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>1</h1>
 *      <h2>2</h2>
 *  </div>
 * </div>
 */

const nested = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("div", { id: "child1", key: "1" }, [
      React.createElement("h1", { id: "heading1", key: "2" }, "1"),
      React.createElement("h2", { id: "heading2", key: "3" }, "2"),
    ]),
    React.createElement(
      "div",
      { id: "child2", key: "4" },
      React.createElement("h1", { id: "heading3", key: "5" }, "1"),
      React.createElement("h2", { id: "heading4", key: "6" }, "2")
    ),
  ]
);

console.log(nested);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nested);

// React.createElement("h1", { id: "heading1" }, "1")
