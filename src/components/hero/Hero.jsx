import "./hreo.css";
import Lottie from "lottie-react";
import developerAnimation from "../../../public/animations/developer.json";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero " id="about">
      <div className="left-sec ">
        <div >
          <div className="parent-avatar">
            <img src="images/avatar-modified.png" alt="" className="avatar" />
            <span className="icon-verified"/>
          </div>
          <div className="avatar-desc">
            <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration: 1}}
            >Software designer, founder adn amateur astronaut.</motion.h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
              expedita ipsam ipsum consequuntur amet, asperiores autem quidem
              officiis voluptatum dicta corrupti, alias earum commodi quae
              repellat cupiditate quisquam saepe? Rerum.
            </p>
          </div>
          <div className="icons-container">
            <span className="icon-x"/>
            <span className="icon-instagram"/>
            <span className="icon-whatsapp"/>
            <span className="icon-github"/>
            <span className="icon-linkedin"/>
          </div>
        </div>
      </div>
      <div className="right-sec animation ">
      <Lottie animationData={developerAnimation} loop={true}  style={{width: "120%" }} />
      </div>
    </section>
  );
};

export default Hero;
