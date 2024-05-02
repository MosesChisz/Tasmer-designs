import React, { useState } from "react";
import homebanner from "../../assets/homebanner05.png";
import "./Fashion.css";

function Fashion() {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <>
      <div id="theFashionPage">
        <h1>Fashion</h1>
      </div>
      <div className="container" id="ourWorkBtnsBox">
        <div id="ourWorkBtns">
          <div>
            <button
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleButtonClick(1)}
            >
              All
            </button>
          </div>
          <div>
            <button
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleButtonClick(2)}
            >
              Male Fashion
            </button>
          </div>

          <div>
            <button
              className={activeButton === 3 ? "active" : ""}
              onClick={() => handleButtonClick(3)}
            >
              Female Fashion
            </button>
          </div>

          <div>
            <button
              className={activeButton === 4 ? "active" : ""}
              onClick={() => handleButtonClick(4)}
            >
              Kids Fashion
            </button>
          </div>

          <div>
            <button
              className={activeButton === 5 ? "active" : ""}
              onClick={() => handleButtonClick(5)}
            >
              Wedding
            </button>
          </div>

          <div>
            <button
              className={activeButton === 6 ? "active" : ""}
              onClick={() => handleButtonClick(6)}
            >
              Wedding
            </button>
          </div>

          <div>
            <button
              className={activeButton === 7 ? "active" : ""}
              onClick={() => handleButtonClick(7)}
            >
              Wedding
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="fashionCard">
              <img src={homebanner} alt="" />
              <p>Ladies African Attire</p>
              <div>
                <button>Order Now</button>
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fashion;
