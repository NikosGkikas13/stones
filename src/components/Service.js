import React, { useState } from "react";
import "../css/services.css";

const Service = (props) => {
  const { icon, title, text, iconHover } = props;
  const [iconImg, seticonImg] = useState(icon);
  return (
    <div
      className="service"
      onMouseOver={() => seticonImg(iconHover)}
      onMouseLeave={() => seticonImg(icon)}
    >
      <img src={iconImg} alt="" />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Service;
