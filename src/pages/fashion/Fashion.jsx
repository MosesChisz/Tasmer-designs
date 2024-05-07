import React, { useState } from "react";
import homebanner from "../../assets/homebanner05.png";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import "./Fashion.css";
import Footer from "../../components/footer/Footer";
import products from "../../components/common/Image";

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
          {products.map((product) => (
            <div class="col-lg-4 col-md-4">
              <div id="fashionCard">
                <div key={product.id} className="fashion-card">
                  <img src={product.image} alt={product.description} />
                  <h6>{product.title}</h6>
                  <p>R{product.price.toFixed(2)}</p>
                  <div id="fashionCardBtn">
                    <button id="fashionCardBtnA">Order Now</button>
                    <button
                      id="fashionCardBtnB"
                      onClick={() => {
                        navigate(`/fashiondetails/${product.id}`);
                      }}
                    >
                      View Details <GoArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     <div id="fashionPagination">
     <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
     </div>
      <Footer />
    </>
  );
}

export default Fashion;
