import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../css/firstPanel.css";
import { grData } from "../data/data";
import { refActions } from "../redux/refSlice";

const FirstPanel = (props) => {
  const idState = useSelector((state) => state.ref.value);
  const firstPanelRef = useRef();
  useEffect(() => {
    props.scroll(0, 0, firstPanelRef.current);
  }, []);
  return (
    <section ref={firstPanelRef} className="firstPanel">
      <div className="firstText">
        <h1>{grData.firstPanel.title}</h1>
        <p>{grData.firstPanel.paragraph}</p>
        <button
          className="buttonStyle"
          onClick={() =>
            idState.ref[3].scrollIntoView({
              block: "center",
            })
          }
        >
          {grData.firstPanel.contact}
        </button>
        {/* <button onClick={() => stateManagement(1, 2, 10)}>setX</button> */}
      </div>
    </section>
  );
};

export default FirstPanel;
