import React from "react";
import homeaboutbanner from "../../assets/aboutbanner02.png";
function About() {
  return (
    <>
      <div id="theAboutPage">
        <h2>About Us</h2>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="aboutUsCard">
              <h2>Our Story</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>

          <div class="col-lg-6 col-md-4">
            <div id="aboutUsCardB">
              <img src={homeaboutbanner} alt="about us" />
            </div>
          </div>
        </div>

      
      </div>
      <div className="container-fluid" id="aboutServices">
        <div className="container" id="aboutServicesText">
        <h2>What We Do<span></span></h2>
        <div class="row">
        
          <div class="col-lg-4 col-md-4">
            <div id="ourServiceCard">
              <h6>Male Dressing</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="ourServiceCard">
              <h6>Male Dressing</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="ourServiceCard">
              <h6>Male Dressing</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="ourServiceCard">
              <h6>Male Dressing</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="ourServiceCard">
              <h6>Male Dressing</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="ourServiceCard">
              <h6>Male Dressing</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default About;
