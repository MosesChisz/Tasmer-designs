import React from "react";
import "./Home.css";

import homeaboutbanner from "../../assets/aboutbanner02.png";
import { SlLocationPin } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";

import { useNavigate } from "react-router-dom";
import Latestfashion from "../../components/latestfashion/Latestfashion";

function Home() {
  const navigate = useNavigate();
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="reviewCard">
      <div id="reviewCardInner">
        <h1>
          Discover the Latest <br />
          Trends
        </h1>
        <p>
          Step into the world of fashion and explore our curated collection of
          the season's hottest trends. From chic essentials to statement pieces,
          find your style inspiration here.
        </p>
      </div>
    </div>,
    <div id="reviewCard01">
      <div id="reviewCardInner">
        <h1>Elevate Your Wardrobe</h1>
        <p>
          Upgrade your wardrobe with our timeless classics and contemporary
          must-haves. Shop quality pieces that effortlessly blend style and
          sophistication for every occasion
        </p>
      </div>
    </div>,
    <div id="reviewCard02">
      <div id="reviewCardInner">
        <h1>Express Your Unique Style</h1>
        <p>
          Unleash your individuality and express yourself through fashion.
          Whether your vibe is edgy, bohemian, or minimalist, discover pieces
          that reflect your personality and make a statement
        </p>
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };
  return (
    <>
      <div>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          disableButtonsControls={true}
          disableDotsControls={true}
          infinite={true}
          autoPlayInterval={5000}
          responsive={responsive}
          animationType="fadeout"
        />
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
                experts who have more than 10 years in the fashion and
                upholstery industry.
              </p>
              <p>
                We custom or tailor make on all type of clothes for any occasion
                ( men, ladies and kids) Traditional attires, matric dance
                dresses, bridal wear, uniforms, formal and casual wear, we do it
                all.
              </p>
              <button
                onClick={() => {
                  navigate("/about");
                }}
              >
                Read more
              </button>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="homeAboutContainerCard">
              <img src={homeaboutbanner} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Latestfashion />
      <Footer />
    </>
  );
}

export default Home;
