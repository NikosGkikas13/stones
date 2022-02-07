import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/nav.css";
import { grData } from "../data/data";
import logo from "../img/logo.png";
import mobileMenu from "../img/mobile-menu.png";

const Nav = (props) => {
  const idState = useSelector((state) => state.ref.value);
  const DesktopNav = () => {
    return (
      <nav>
        <img
          className="logo pointer"
          src={logo}
          alt=""
          onClick={() =>
            idState.ref[0].scrollIntoView({
              block: "center",
            })
          }
        />

        <div>
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

          <img className="langImg" src={grData.img} alt="" />
        </div>
      </nav>
    );
  };
  const MobileNav = () => {
    const [showmenu, setShowMenu] = useState(false);
    return (
      <nav className="mobile-menu">
        <img src={mobileMenu} alt="" onClick={() => setShowMenu(!showmenu)} />
        {showmenu && (
          <div className="mobile-menu-links">
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

            <img
              className="langImg"
              src={grData.img}
              alt=""
              style={{ margin: "0 auto" }}
            />
          </div>
        )}
      </nav>
    );
  };
  const [isMobileMenu, setisMobileMenu] = useState(false);
  const checkWindowWidth = () => {
    if (window.innerWidth <= 768) {
      setisMobileMenu(true);
    } else if (window.innerWidth > 768) {
      setisMobileMenu(false);
    }
  };
  useEffect(() => {
    checkWindowWidth();
    window.addEventListener("resize", () => {
      checkWindowWidth();
      console.log(isMobileMenu);
    });
  });
  // useEffect(() => {
  //   checkWindowWidth();
  //   window.addEventListener("resize", () => {
  //     checkWindowWidth();
  //   });
  // });
  return isMobileMenu ? <MobileNav /> : <DesktopNav />;
};

export default Nav;
