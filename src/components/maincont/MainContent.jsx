import { useState } from "react";
import "./mainCont.css";
import { AnimatePresence, motion } from "framer-motion";
const myProjects = [
  {
    projectTitle: "Flutter Project",
    category: "flutter",
    imgPaht: "images/5.jpg",
  },
  {
    projectTitle: "React Project",
    category: "react",
    imgPaht: "images/zz.jpg",
  },
  {
    projectTitle: "HTML & CSS Project",
    category: "html",
    imgPaht: "images/4.jpg",
  },
  {
    projectTitle: "javaScript Project",
    category: "js",
    imgPaht: "images/8.jpg",
  },
  {
    projectTitle: "HTML & CSS Project",
    category: "html",
    imgPaht: "images/7.jpg",
  },
  {
    projectTitle: "HTML & CSS Project",
    category: "html",
    imgPaht: "images/1.jpg",
  },
  {
    projectTitle: "RjavaScript Project",
    category: "js",
    imgPaht: "images/6.jpg",
  },
  {
    projectTitle: "React Project",
    category: "react",
    imgPaht: "images/3.jpg",
  },
];

const MainContent = () => {
  const [activeToggle, setActiveToggle] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handelrClick = (buttonCategory) => {
    setActiveToggle(buttonCategory);
    const newArr = myProjects.filter((el) => {
      return el.category === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <section className="main-container" id="project">
      <aside className="btn-container flex ">
        <button
          className={`btn ${activeToggle === "all" ? "active" : null} `}
          onClick={() => {
            setActiveToggle("all");
            setArr(myProjects);
          }}
        >
          <i className="animation"></i>All Projects<i className="animation"></i>
        </button>
        <button
          className={`btn ${activeToggle === "html" ? "active" : null} `}
          onClick={() => {
            handelrClick("html");
          }}
        >
          <i className="animation"></i>HTML & CSS<i className="animation"></i>
        </button>
        <button
          className={`btn ${activeToggle === "js" ? "active" : null} `}
          onClick={() => {
            handelrClick("js");
          }}
        >
          <i className="animation"></i>javaScript<i className="animation"></i>
        </button>
        <button
          className={`btn ${activeToggle === "react" ? "active" : null} `}
          onClick={() => {
            handelrClick("react");
          }}
        >
          <i className="animation"></i>react<i className="animation"></i>
        </button>
        <button
          className={`btn ${activeToggle === "flutter" ? "active" : null} `}
          onClick={() => {
            handelrClick("flutter");
          }}
        >
          <i className="animation"></i>flutter<i className="animation"></i>
        </button>
      </aside>

      <div className=" main ">
        <div className="cards-container ">
          <AnimatePresence>
            {arr.map((item) => {
              return (
                <motion.div 
                layout
                initial={{transform: "scale(0)"}}
                whileInView={{transform: "scale(1)"}}
                transition={{duration: .5 ,type:"tween"} }
                className="card " key={item.imgPaht}>
                  <img src={item.imgPaht} alt="" />
                  <div className="card-box ">
                    <h3 className="card-title">{item.projectTitle}</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reiciendis aliquid debitis quisquam quis aspernatur.
                    </p>
                    <div className="card-icons flex">
                      <div className="icons flex">
                        <span className="icon-link"></span>
                        <span className="icon-github"></span>
                      </div>

                      <a className="link">
                        more <span className="icon-arrow-right" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
