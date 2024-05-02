import React from "react";
import "./Home.css";
import homebanner from "../../assets/homebanner05.png";
import homeaboutbanner from "../../assets/aboutbanner02.png";
import { SlLocationPin } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function Home() {
  const handleDragStart = (e) => e.preventDefault();
  const navigate = useNavigate();
  const items = [
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={homebanner} alt="" />
        <p class="viewMoreText"  onClick={() => {
                navigate("/fashion");
              }}>View more <GoArrowRight /></p>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={homeaboutbanner} alt="" />
        <p class="viewMoreText" onClick={() => {
                navigate("/fashion");
              }}>View more <GoArrowRight /></p>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={homebanner} alt="" />
        <p class="viewMoreText" onClick={() => {
                navigate("/fashion");
              }}>View more <GoArrowRight /></p>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={homeaboutbanner} alt="" />
        <p class="viewMoreText" onClick={() => {
                navigate("/fashion");
              }}>View more <GoArrowRight /></p>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={homebanner} alt="" />
        <p class="viewMoreText" onClick={() => {
                navigate("/fashion");
              }}>View more <GoArrowRight /></p>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={homeaboutbanner} alt="" />
        <p class="viewMoreText" onClick={() => {
                navigate("/fashion");
              }}>View more <GoArrowRight /></p>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={homebanner} alt="" />
        <p class="viewMoreText" onClick={() => {
                navigate("/fashion");
              }}>View more <GoArrowRight /></p>
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };
  return (
    <>
      <div className="container-fluid" id="theHomePageSection">
        <div className="container" id="theHomePage">
          <div id="theHomePageText">
            <h1>
              Discover the essence of style. Welcome to Tasmer, where every
              outfit tells a story
            </h1>
            <button>Order Now</button>
          </div>
          <div id="theHomePageImg">
            <img src={homebanner} alt="" />
          </div>
        </div>
      </div>

      <div className="container" id="homePageWrap">
        <div class="row" id="homePageWrapBox">
          <div class="col-lg-3 col-md-4">
            <div id="homePageWrapContact">
              <span>
                {" "}
                <SlLocationPin id="homePageWrapContactIcon" />
              </span>
              <p>
                123 Jupiter Street
                <br />
                Mars Planet
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homePageWrapContact">
              <span>
                {" "}
                <SlCalender id="homePageWrapContactIcon" />
              </span>
              <p>
                Mon~Sat
                <br />
                Close Holidays
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homePageWrapContact">
              <span>
                {" "}
                <MdOutlinePhone id="homePageWrapContactIcon" />
              </span>
              <p>
                +123 456 6789
                <br /> +123 456 6789
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homePageWrapContact">
              <span>
                {" "}
                <MdOutlineMailOutline id="homePageWrapContactIcon" />
              </span>
              <p>
                test@example.com
                <br /> test@example.com
              </p>
            </div>
          </div>
        </div>

        <div class="row" id="homeAboutContainer">
          <div class="col-lg-6 col-md-4">
            <div id="homeAboutContainerCard">
              <h4>Who Are We ?</h4>
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
              <button>Read more</button>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="homeAboutContainerCard">
              <img src={homeaboutbanner} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="theParterPageSection">
        <div className="container">
          <h2>Our Latest Fashion</h2>
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            disableButtonsControls={true}
            disableDotsControls={false}
            infinite={true}
            autoPlayInterval={3000}
            responsive={responsive}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
