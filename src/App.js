import "./App.css";

function App() {
  var data = require("./data.json");

  const div = document.createElement("div");
  div.classList.add("divStyle");
  const main = document.getElementById("main");
  main.appendChild(div);

  return <div id="main"></div>;
}
export default App;
