import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../css/gallery.css";
import { grData } from "../data/data";
import dot from "../img/dot.png";
import ImageMagnifier from "./ImageMagnifier";
const Gallery = (props) => {
  const galleryRef = useRef();
  useEffect(() => {
    props.scroll(2, 2, galleryRef.current);
  }, []);
  //USESTATE FOR CATEGORY IMAGES
  const [sliderImgArray, setSliderImgArray] = useState(
    grData.slider.categories[0].img
  );
  //USESTATE FOR CATEGORY IMAGES
  //Zoom slider images
  const zoomSliderImg = () => {
    console.log("hi");
  };
  //Zoom slider images
  const sliderSettings = {
    dots: true,
    arrows: false,
    easing: true,
    speed: 800,
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
      {/* CATEGORY BUTTONS
      <div className="categories">
        {grData.slider.categories.map((item) => {
          return (
            <button onClick={() => setSliderImgArray(item.img)}>
              {item.name}
            </button>
          );
        })}
      </div>
      CATEGORY BUTTONS */}
      <Slider className="big_slider" {...sliderSettings}>
        {grData.slider.categoriesAll.img.map((item, index) => {
          const sliderClass = `sliderImg ${index}`;
          return (
            <>
              <img className={sliderClass} src={item} alt="" />
            </>
          );
        })}
      </Slider>
    </section>
  );
};

export default Gallery;
