import React from "react";
import homeaboutbanner from "../../assets/aboutbanner02.png";

function Fashiondetails() {
  return (
    <div className="container-fluid" id="theFashionDetailePage">
      <div id="theFashionDetailePageBox">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="theFashionDetailePageImg">
              <img src={homeaboutbanner} alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="fashionCard33">
              <h6>Women Dress, African Attire</h6>

              <p>R140.60</p>

              <h6>Description</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus 
              </p>
              <a href="https://wa.me/+27659872956">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fashiondetails;
