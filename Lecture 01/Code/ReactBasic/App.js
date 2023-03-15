const heading = React.createElement(
  "h1",
  {
    id: "heading",
    style: { fontSize: 50 },
  },
  "hello from react"
);
console.log(heading); // return a react element(object) not a tag
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);
