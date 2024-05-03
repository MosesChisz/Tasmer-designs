import React from "react";
import './Contact.css';
import Footer from "../../components/footer/Footer";

function Contact() {
  return (
    <>
      <div className="container-fluid" id="contactPage">
        <h1>Contact Us</h1>
      </div>

      <div className="container" id="contactPageBox">
        <div class="row">
          <div class="col-lg-8 col-md-4">
            <div id="contactUsCard">
              <h4>
                We are committed, <br /> to delivering high-quality services,
                <br /> to our clients. <br />
                Please visit our offices.
              </h4>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="contactUsCard">
              {" "}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.350477495533!2d31.0615526!3d-17.822197899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4df3022689b%3A0xa96d8d439e3f07dc!2s108%20Central%20Ave%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sza!4v1710229529285!5m2!1sen!2sza"
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>


   


        <div class="row" id="homeContact">
          <div class="col-lg-8 col-md-4">
            <h4>Get InTouch With Us</h4>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input type="email" class="form-control" id="homeContactInput" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone Number
              </label>
              <input type="number" class="form-control" id="homeContactInput" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="homeContactInput"
                rows="3"
              ></textarea>
            </div>
            <div id="homeContactBtn">
              <button>send</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="homeContactCard">
              <div id="homeContactCardInfor">
                <div id="homeContactCardIcon">
                  <i class="bx bx-map"></i>
                </div>
                <div id="homeContactCardIText">
                  <p>
                    108 Mars Street <br></br>
                    Mars, Planet
                  </p>
                </div>
              </div>
              <div id="homeContactCardInfor">
                <div id="homeContactCardIcon">
                  <i class="bx bx-calendar"></i>
                </div>
                <div id="homeContactCardIText">
                  <p>
                    Mon ~ Sunday<br></br>Open Holidays
                  </p>
                </div>
              </div>
              <div id="homeContactCardInfor">
                <div id="homeContactCardIcon">
                  <i class="bx bx-phone"></i>
                </div>
                <div id="homeContactCardIText">
                  <p>
                    +123 4567 890 <br></br>
                    +123 4567 890<br></br>
                   
                  </p>
                </div>
              </div>
              <div id="homeContactCardInfor">
                <div id="homeContactCardIcon">
                  <i class="bx bx-envelope"></i>
                </div>
                <div id="homeContactCardIText">
                  <p>
                    testexample@gmail.com<br></br>
                    testexample@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Contact;