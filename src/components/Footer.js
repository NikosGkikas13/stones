import React from "react";
import { useSelector } from "react-redux";
import "../css/footer.css";
import { grData } from "../data/data";
import logo from "../img/logo.png";
const Footer = () => {
  const idState = useSelector((state) => state.ref.value);
  return (
    <footer>
      <div className="footer-content">
        <img
          className="pointer"
          src={logo}
          alt=""
          onClick={() =>
            idState.ref[0].scrollIntoView({
              block: "center",
            })
          }
        />
        <div className="footer-links">
          {grData.nav.map((item, index) => {
            // console.log(index);
            let filteredID = idState.id.filter((id) => id == index);
            return (
              <span
                className="pointer link"
                onClick={() =>
                  idState.ref[filteredID].scrollIntoView({
                    block: "center",
                  })
                }
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className="footer-contact">
          {grData.footer.contact.map((item) => {
            return <span>{item}</span>;
          })}
        </div>
      </div>
      <hr />
      <h3 className="copyrights">{grData.footer.copyrights}</h3>
    </footer>
  );
};

export default Footer;
