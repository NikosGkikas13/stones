import React, { useEffect, useRef } from "react";
import Service from "./Service";
import { grData } from "../data/data";
import "../css/services.css";
const Services = (props) => {
  const servicesRef = useRef();
  useEffect(() => {
    props.scroll(1, 1, servicesRef.current);
  }, []);
  return (
    <section ref={servicesRef} id="services">
      {grData.services.map((item) => {
        return (
          <Service
            icon={item.icon}
            title={item.title}
            text={item.text}
            iconHover={item.iconHover}
          />
        );
      })}
    </section>
  );
};

export default Services;
