import "./hreo.css";
const Hero = () => {
  return (
    <section className="hero ">
      <div className="left-sec ">
        <div >
          <div className="parent-avatar">
            <img src="/public/avatar-modified.png" alt="" className="avatar" />
            <span className="icon-verified"/>
          </div>
          <div className="avatar-desc">
            <h2>Software designer, founder adn amateur astronaut.</h2>
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
      <div className="right-sec animation border">right</div>
    </section>
  );
};

export default Hero;
