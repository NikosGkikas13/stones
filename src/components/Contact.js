import React, { useEffect, useRef } from "react";
import "../css/contact.css";
import { grData } from "../data/data";

const Contact = (props) => {
  const contactRef = useRef();
  useEffect(() => {
    props.scroll(3, 3, contactRef.current);
  }, []);
  return (
    <section ref={contactRef} id="contact">
      <h1>Contact</h1>
      <form>
        <input type="name" placeholder={grData.contact.name}></input>
        <input type="number" placeholder={grData.contact.number}></input>
        <input type="email" placeholder={grData.contact.email}></input>
        <textarea placeholder={grData.contact.message}></textarea>
        <button className="buttonStyle">{grData.contact.send}</button>
      </form>
    </section>
  );
};

export default Contact;
