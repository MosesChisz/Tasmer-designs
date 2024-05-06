import React from "react";
import { useParams } from "react-router-dom";
import products from "../../components/common/Image";

function Fashiondetails() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title, price, description, image } = product;

  return (
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
              <p>R{price.toFixed(2)}</p>
              <h6>Description</h6>
              <p>{description}</p>
              <a href="https://wa.me/+27659872956">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fashiondetails;
