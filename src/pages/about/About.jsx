import React from "react";
import homeaboutbanner from "../../assets/aboutbanner02.png";
import "./About.css";
import Footer from "../../components/footer/Footer";

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
                Tasmer fashions and reupholsters was launched 6 years ago by experts 
                who have more than 10 years in the fashion and upholstery industry.

                We've a wide range of fabrics to choose from, clients have options 
                to supply their desired materials as well. Our team is vowed to work 
                together and give the best quality of work, bringing out that stunning, 
                confident and elegant look that our clients deserve individually, as well 
                as to give your house a home welcoming look, in and outdoors.
              </p>

              <h2>Fashion</h2>
              <p>
                We custom or tailor make on all type of clothes for any occasion 
                ( men, ladies and kids) Traditional attires, matric dance dresses, 
                bridal wear, uniforms, formal and casual wear, we do it all
              </p>
              <h2>Reupholsters</h2>
              <p>
                We custom make and repair or recover all type of furniture 
                (couches, headboards, dining chairs, ottomans etc). 
                We make outdoor/patio cushions, any size and shape, 
                Tasmer got you covered. Outdoor blinds, patio umbrellas weather covers, we do it all.
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
          <h2>
            What We Do<span></span>
          </h2>
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div id="ourServiceCard">
                <h6>Male Dressing</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="ourServiceCard">
                <h6>Female Dressing</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="ourServiceCard">
                <h6>Kids Dressing</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="ourServiceCard">
                <h6>Matric Dressing</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="ourServiceCard">
                <h6>Male Dressing</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="ourServiceCard">
                <h6>Wedding Dressing</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="aboutAccodion">
        <h4>Why Choose Us ?</h4>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Accordion Item #4
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Accordion Item #5
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="ourAboutStory">
        <div className="container">
          <h4>Our Story</h4>
          <iframe
            width="100%"
            height="450"
            borderRadius="4"
            src="https://www.youtube.com/embed/e-HZ2TIVULI?si=g7VUCtM18FM3zafs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
