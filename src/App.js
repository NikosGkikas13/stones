import { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import FirstPanel from "./components/FirstPanel";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import Services from "./components/Services";
import "./css/app.css";
import { useDispatch, useSelector } from "react-redux";
import { refActions } from "./redux/refSlice";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const ref1Value = useSelector((state) => state.ref.value);
  const stateManagement = (index, id, ref) => {
    dispatch(refActions.setID(index));
    dispatch(refActions.setRef(id));
    dispatch(refActions.addRef(ref));
  };

  useEffect(() => {
    // console.log(ref1Value);
  }, [ref1Value]);
  return (
    <div className="App">
      <Nav />
      <FirstPanel scroll={stateManagement} />
      <Services scroll={stateManagement} />
      <Gallery scroll={stateManagement} />
      <Contact scroll={stateManagement} />
      <Footer />
    </div>
  );
}

export default App;
