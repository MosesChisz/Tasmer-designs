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
            <button
                onClick={() => {
                  navigate("/fashion");
                }}
              >Order Now</button>
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
                1 Plantation Road
                <br />
                Eastleigh Edenvale
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
                +27 65 987 2956
                <br /> +27 65 987 2956
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
                Tasmer fashions and reupholsters was launched 6 years ago by 
                experts who have more than 10 years in the fashion and upholstery industry.
              </p>
              <p>
                We custom or tailor make on all type of clothes for any occasion 
                ( men, ladies and kids) Traditional attires, matric dance dresses, 
                bridal wear, uniforms, formal and casual wear, we do it all.
              </p>
              <button
                onClick={() => {
                  navigate("/about");
                }}
              >Read more</button>
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
