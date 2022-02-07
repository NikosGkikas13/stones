import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../css/gallery.css";
import { grData } from "../data/data";
import dot from "../img/dot.png";
const Gallery = (props) => {
  const galleryRef = useRef();
  useEffect(() => {
    props.scroll(2, 2, galleryRef.current);
  }, []);
  const [sliderImgArray, setSliderImgArray] = useState(
    grData.slider.categories[0].img
  );

  const sliderSettings = {
    dots: true,
    arrows: false,
    fade: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="dots">
        <img src={dot} alt="" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section ref={galleryRef} id="gallery">
      <div className="categories">
        {grData.slider.categories.map((item) => {
          return (
            <button onClick={() => setSliderImgArray(item.img)}>
              {item.name}
            </button>
          );
        })}
      </div>
      <Slider className="big_slider" {...sliderSettings}>
        {sliderImgArray.map((item) => {
          return <img className="sliderImg" src={item} alt="" />;
        })}
      </Slider>
    </section>
  );
};

export default Gallery;
