import React from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Home.css";

function Home() {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
      <div id="reviewCard">
        <div id="reviewCardInner">
          <h1>
            Building
            <br /> Dreams,
            <br /> One Brick at a Time
          </h1>
          <p>
            Welcome to our construction company, where we turn your dreams into
            reality. With precision and passion, we construct spaces that inspire
            and endure.
          </p>
        </div>
      </div>,
      <div id="reviewCard01">
        <div id="reviewCardInner">
          <h1>
            Crafting <br />
            Architectural Marvels
          </h1>
          <p>
            Step into a world of architectural excellence and innovation. From
            sleek skyscrapers to cozy homes, our team of experts crafts structures
            that stand the test of time
          </p>
        </div>
      </div>,
      <div id="reviewCard02">
        <div id="reviewCardInner">
          <h1>
            Transforming Spaces,
            <br /> Elevating Lives
          </h1>
          <p>
            Discover the transformative power of construction. With every project,
            we reshape environments and enrich lives. Welcome to a world of
            endless possibilities
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
        <div>



        </div>
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
     </div>
    </>
  )
}

export default Home