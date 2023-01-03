import "./App.css";
import React, { useEffect, useRef } from "react";

function App() {
  var data = require("./data.json");

  //for(let i=0;i<data.length;i++{WHAT COPY HERE TO APPEND THE 30 divProduct?})

  const container = useRef(null);

  const divProduct = document.createElement("div");
  divProduct.classList.add("divStyle");

  useEffect(() => {
    container.current.appendChild(divProduct);
  }, []);

  return (
    <div>
      <div id={"container"} ref={container} />
    </div>
  );
}
export default App;
