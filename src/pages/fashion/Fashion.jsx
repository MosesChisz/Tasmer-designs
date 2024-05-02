import React, { useState } from "react";
import homebanner from "../../assets/homebanner05.png";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import "./Fashion.css";
import Footer from "../../components/footer/Footer";

function Fashion() {
  const navigate = useNavigate();
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
              Metric Dance
            </button>
          </div>

          <div>
            <button
              className={activeButton === 7 ? "active" : ""}
              onClick={() => handleButtonClick(7)}
            >
              Specials
            </button>
          </div>
        </div>
      </div>
      <div className="container" id="fashionCardBox">
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="fashionCard">
              <img src={homebanner} alt="" />
              <h6>Ladies African Attire</h6>
              <p>R140.50</p>
              <div id="fashionCardBtn">
                <button id="fashionCardBtnA" >Order Now</button>
                <button id="fashionCardBtnB"  onClick={() => {
                navigate("/fashiondetails");
              }}>View Details <GoArrowRight /></button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="fashionCard">
              <img src={homebanner} alt="" />
              <h6>Ladies African Attire</h6>
              <p>R140.50</p>
              <div id="fashionCardBtn">
                <button id="fashionCardBtnA">Order Now</button>
                <button id="fashionCardBtnB">View Details <GoArrowRight /></button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="fashionCard">
              <img src={homebanner} alt="" />
              <h6>Ladies African Attire</h6>
              <p>R140.50</p>
              <div id="fashionCardBtn">
                <button id="fashionCardBtnA">Order Now</button>
                <button id="fashionCardBtnB">View Details <GoArrowRight /></button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="fashionCard">
              <img src={homebanner} alt="" />
              <h6>Ladies African Attire</h6>
              <p>R140.50</p>
              <div id="fashionCardBtn">
                <button id="fashionCardBtnA">Order Now</button>
                <button id="fashionCardBtnB">View Details <GoArrowRight /></button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="fashionCard">
              <img src={homebanner} alt="" />
              <h6>Ladies African Attire</h6>
              <p>R140.50</p>
              <div id="fashionCardBtn">
                <button id="fashionCardBtnA">Order Now</button>
                <button id="fashionCardBtnB">View Details <GoArrowRight /></button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="fashionCard">
              <img src={homebanner} alt="" />
              <h6>Ladies African Attire</h6>
              <p>R140.50</p>
              <div id="fashionCardBtn">
                <button id="fashionCardBtnA">Order Now</button>
                <button id="fashionCardBtnB">View Details <GoArrowRight /></button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="fashionCard">
              <img src={homebanner} alt="" />
              <h6>Ladies African Attire</h6>
              <p>R140.50</p>
              <div id="fashionCardBtn">
                <button id="fashionCardBtnA">Order Now</button>
                <button id="fashionCardBtnB">View Details <GoArrowRight /></button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="fashionCard">
              <img src={homebanner} alt="" />
              <h6>Ladies African Attire</h6>
              <p>R140.50</p>
              <div id="fashionCardBtn">
                <button id="fashionCardBtnA">Order Now</button>
                <button id="fashionCardBtnB">View Details <GoArrowRight /></button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="fashionCard">
              <img src={homebanner} alt="" />
              <h6>Ladies African Attire</h6>
              <p>R140.50</p>
              <div id="fashionCardBtn">
                <button id="fashionCardBtnA">Order Now</button>
                <button id="fashionCardBtnB">View Details <GoArrowRight /></button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="fashionCard">
              <img src={homebanner} alt="" />
              <h6>Ladies African Attire</h6>
              <p>R140.50</p>
              <div id="fashionCardBtn">
                <button id="fashionCardBtnA">Order Now</button>
                <button id="fashionCardBtnB">View Details <GoArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Fashion;
