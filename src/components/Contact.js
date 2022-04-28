import React, { useEffect, useRef, useState } from "react";
import "../css/contact.css";
import { grData } from "../data/data";
import emailjs from "emailjs-com";

const Contact = (props) => {
  const contactRef = useRef();
  useEffect(() => {
    props.scroll(3, 3, contactRef.current);
  }, []);
  //Send Message to Email
  const refSuccess = useRef();
  const refStatus = useRef(false);
  const [messageSend, setMessageSend] = useState({
    status: refStatus.current,
    success: refSuccess.current,
  });
  const [message, setMessage] = useState();

  useEffect(() => {
    setTimeout(() => {
      refStatus.current = false;
      setMessageSend({
        status: refStatus.current,
        success: refSuccess.current,
      });
      console.log(messageSend.status);
    }, 2000);
  }, [refStatus.current]);

  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ol3870j",
        "template_66ceczn",
        formRef.current,
        "sMnveLqYudASsEmhs"
      )
      .then(
        (result) => {
          console.log(result.text);

          const timer = console.log(messageSend.status + " initial value");
          refSuccess.current = true;
          refStatus.current = true;
          setMessageSend({
            status: refStatus.current,
            success: refSuccess.current,
          });
          console.log(
            `Status is ${refStatus.current} and success is ${messageSend.success}`
          );
          // setTimeout(()=>
          //   refStatus.current=false,
          //   console.log(`Status is ${refStatus.current} and success is ${messageSend.success}`)
          // ,2500)
        },
        (error) => {
          console.log(error.text);
          refSuccess.current = false;
        }
      );
  };
  //Send message to Email
  return (
    <section ref={contactRef} id="contact">
      <h1>Contact</h1>
      <form ref={formRef} onSubmit={sendEmail}>
        <input
          type="name"
          name="name"
          placeholder={grData.contact.name}
        ></input>
        <input
          type="number"
          name="number"
          placeholder={grData.contact.number}
        ></input>
        <input
          type="email"
          name="from_name"
          placeholder={grData.contact.email}
        ></input>
        <textarea
          name="message"
          placeholder={grData.contact.message}
        ></textarea>
        <button className="buttonStyle">{grData.contact.send}</button>
      </form>
    </section>
  );
};

export default Contact;
