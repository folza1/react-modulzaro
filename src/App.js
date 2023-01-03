import "./App.css";

function App() {
  var data = require("./data.json");
  for (let i = 0; i < data.length; i++) {
    const divProduct = document.createElement("div");
    const mainContainer = document.getElementById("container");
    divProduct.classList.add("divProduct");
    mainContainer.appendChild(divProduct);
  }
  return <div id="container"></div>;
}
export default App;
