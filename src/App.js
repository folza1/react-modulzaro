import "./App.css";
import cart from "./cart.jpg";
import { useState } from "react";

var data = require("./data.json");

function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown(true);
  };

  const handleClickClose = (event) => {
    setIsShown(false);
  };

  return (
    <>
      <h1>Termékek</h1>
      <div id="main">
        {data.map((obj) => (
          <div className="divStyle" key={obj.id}>
            <div
              id="thumbNail"
              style={{ backgroundImage: `url(${obj.thumbnail})` }}
            ></div>
            <div id="product">
              <div id="title">
                <p>{obj.title}</p>
              </div>
              <div id="price">
                <p>${obj.price}</p>
              </div>
              <div
                id="cart"
                style={{
                  backgroundImage: `url(${cart})`,
                }}
              ></div>
            </div>
            <div id="reszletek">
              <button id="buttonDetails" onClick={handleClick}>
                Részletek
              </button>
            </div>
          </div>
        ))}
        {isShown && (
          <div id="window" onClick={handleClickClose}>
            <div className="details">Részletek</div>
            <div className="close">Bezárás</div>
          </div>
        )}
      </div>
    </>
  );
}
export default App;
