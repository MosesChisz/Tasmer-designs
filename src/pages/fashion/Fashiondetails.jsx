import React from "react";
import { useParams } from "react-router-dom";
import products from "../../components/common/Image";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function Fashiondetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title, price, description, image } = product;

  return (
   <>
    <div className="container-fluid" id="theFashionDetailePage">
      <div id="theFashionDetailePageBox">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="theFashionDetailePageImg">
              <img src={image} alt={name} />
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="fashionCard33">
              <h6>{title}</h6>
              <p>
                <b>R{price.toFixed(2)}</b>
              </p>
              <h6>Description</h6>
              <p>{description}</p>
              <a href="https://wa.me/+27659872956">Order Now</a>
            </div>
          </div>
        </div>
      </div>
      <div id="fashionDetailsBack">
        <button   onClick={() => {
                navigate("/fashion");
              }}>
          <RiArrowLeftDoubleFill />
          back to fashion
        </button>
      </div>
    </div>
    <Footer/>
   </>
  );
}

export default Fashiondetails;
