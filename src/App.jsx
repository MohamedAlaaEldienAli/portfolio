import { Fragment } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MainContent from "./components/maincont/MainContent";
import Contact from "./components/contact/Contact";
import { useEffect } from "react";
import { useState } from "react";
import Lottie from "lottie-react";
import mapAnimation from "../public/animations/Maps.json";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 450) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  return (
    <Fragment>
      <div className="container" id="up">
        <Header />

        <Hero />
        <div className="divider" />
        <MainContent />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Lottie animationData={mapAnimation} loop={true}  style={{width: "15%" , margin: ' -20px auto 20px' } } />
        <a href="#up">
            <button style={{opacity: showScrollBtn ? 1 : 0}} className="scroll2Top icon-keyboard_arrow_up" />
          </a>
      </div>
    </Fragment>
  );
}

export default App;
