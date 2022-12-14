import Slid1 from "../../Assets/images/slideImage/emanicipation.jpg";
import Slid2 from "../../Assets/images/slideImage/seelg.jpg";
import Slid3 from "../../Assets/images/slideImage/severence.jpg";
import Slid4 from "../../Assets/images/slideImage/shantaram.jpg";
import Slid5 from "../../Assets/images/slideImage/sprited.jpg";
import Slid6 from "../../Assets/images/slideImage/selina.jpg";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function SlidePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block slide-image w-100"
          src={Slid1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="row slide-video">
            <a
              className="col-3 stream-now"
              href="https://tv.apple.com/us/movie/emancipation/umc.cmc.1j6fdxookwtqml3bd8ivvcbbv?ign-itscg=10000&ign-itsct=atv-apl_hp-stream_now--220622"
            >
              <h3>StreamNow</h3>
            </a>
            <a
              className="col-8 video-desc"
              href="https://tv.apple.com/us/movie/emancipation/umc.cmc.1j6fdxookwtqml3bd8ivvcbbv?ign-itscg=10000&ign-itsct=atv-apl_hp-stream_now--220622"
            >
              <h2>Emanicipation</h2>
              <p>inspired by a gripping true story.</p>
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {/*  */}
      <Carousel.Item>
        <img
          className="d-block slide-image w-100"
          src={Slid2}
          alt="First slide"
        />
        {/* <video src="">StreamNow</video> */}
        <Carousel.Caption>
          <div className="row slide-video">
            <a
              className="col-3 stream-now"
              href="https://tv.apple.com/us/movie/emancipation/umc.cmc.1j6fdxookwtqml3bd8ivvcbbv?ign-itscg=10000&ign-itsct=atv-apl_hp-stream_now--220622"
            >
              <h3>StreamNow</h3>
            </a>
            <a
              className="col-8 video-desc"
              href="https://tv.apple.com/us/movie/emancipation/umc.cmc.1j6fdxookwtqml3bd8ivvcbbv?ign-itscg=10000&ign-itsct=atv-apl_hp-stream_now--220622"
            >
              <h2>See the last Chapter</h2>
              <p>enjoy the movies.</p>
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {/*  */}
      <Carousel.Item>
        <img
          className="d-block w-100 slide-image"
          src={Slid3}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="row slide-video">
            <a
              className="col-3 stream-now"
              href="https://tv.apple.com/us/movie/emancipation/umc.cmc.1j6fdxookwtqml3bd8ivvcbbv?ign-itscg=10000&ign-itsct=atv-apl_hp-stream_now--220622"
            >
              <h3>StreamNow</h3>
            </a>
            <a
              className="col-8 video-desc"
              href="https://tv.apple.com/us/movie/emancipation/umc.cmc.1j6fdxookwtqml3bd8ivvcbbv?ign-itscg=10000&ign-itsct=atv-apl_hp-stream_now--220622"
            >
              <h3>Severance</h3>
              <p>enjoy the movies.</p>
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {/*  */}
      <Carousel.Item>
        <img
          className="d-block slide-image w-100"
          src={Slid4}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="row slide-video">
            <a
              className="col-3 stream-now"
              href="https://tv.apple.com/us/movie/emancipation/umc.cmc.1j6fdxookwtqml3bd8ivvcbbv?ign-itscg=10000&ign-itsct=atv-apl_hp-stream_now--220622"
            >
              <h3>StreamNow</h3>
            </a>
            <a
              className="col-8 video-desc"
              href="https://tv.apple.com/us/movie/emancipation/umc.cmc.1j6fdxookwtqml3bd8ivvcbbv?ign-itscg=10000&ign-itsct=atv-apl_hp-stream_now--220622"
            >
              <h3>Shantaram</h3>
              <p>comody:Start your holiday with high note.</p>
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {/*  */}
      <Carousel.Item>
        <img
          className="d-block slide-image w-100"
          src={Slid5}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="row slide-video">
            <a
              className="col-2 stream-now"
              href="https://tv.apple.com/us/movie/emancipation/umc.cmc.1j6fdxookwtqml3bd8ivvcbbv?ign-itscg=10000&ign-itsct=atv-apl_hp-stream_now--220622"
            >
              <h3>StreamNow</h3>
            </a>
            <a
              className="col-8 video-desc"
              href="https://tv.apple.com/us/movie/emancipation/umc.cmc.1j6fdxookwtqml3bd8ivvcbbv?ign-itscg=10000&ign-itsct=atv-apl_hp-stream_now--220622"
            >
              <h3>sprited</h3>
              <p>comody:Start your holiday with high note</p>
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {/*  */}
      <Carousel.Item>
        <img
          className="d-block slide-image w-100"
          src={Slid6}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="row slide-video">
            <a
              className="col-3 stream-now"
              href="https://tv.apple.com/us/movie/selena-gomez-my-mind--me/umc.cmc.39yw4dp13gshxq5bt9fsl0o5y?ign-itscg=10000&ign-itsct=atv-apl_hp-stream_now--220622"
            >
              <h3>StreamNow</h3>
            </a>
            <a
              className="col-8 video-desc"
              href="https://tv.apple.com/us/movie/selena-gomez-my-mind--me/umc.cmc.39yw4dp13gshxq5bt9fsl0o5y?ign-itscg=10000&ign-itsct=atv-apl_hp-stream_now--220622"
            >
              <h3>Documentary</h3>
              <p>Every breath abreakthrough.</p>
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlidePage;
