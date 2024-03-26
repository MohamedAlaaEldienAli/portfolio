import React from "react";
import "./mainCont.css";
const MainContent = () => {
  return (
    <section className="main-container">
      <aside className="btn-container flex ">
        <button className="btn active">
          <i className="animation"></i>All Projects<i className="animation"></i>
        </button>
        <button className="btn">
          <i className="animation"></i>HTML & CSS<i className="animation"></i>
        </button>
        <button className="btn">
          <i className="animation"></i>javaScript<i className="animation"></i>
        </button>
        <button className="btn">
          <i className="animation"></i>react<i className="animation"></i>
        </button>
        <button className="btn">
          <i className="animation"></i>flluter<i className="animation"></i>
        </button>
      </aside>

      <div className=" main">
        <div className="cards-container">
            <div className="card ">
                <img src="/public/1.jpg" alt="" />
                <div className="card-box">
                    <h3 className="card-title">title</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur.</p>
                    <div className="flex">
                        <span className="icon-link"></span>
                        <span className="icon-github"></span>
                        <button className="">more <span className="icon-arrow-right"/></button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src="/public/1.jpg" alt="" />
                <div className="card-box">
                    <h3 className="card-title">title</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur.</p>
                    <div className="flex">
                        <span className="icon-link"></span>
                        <span className="icon-github"></span>
                        <button className="">more <span className="icon-arrow-right"/></button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src="/public/1.jpg" alt="" />
                <div className="card-box">
                    <h3 className="card-title">title</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur.</p>
                    <div className="flex">
                        <span className="icon-link"></span>
                        <span className="icon-github"></span>
                        <button className="">more <span className="icon-arrow-right"/></button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src="/public/1.jpg" alt="" />
                <div className="card-box">
                    <h3 className="card-title">title</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur.</p>
                    <div className="flex">
                        <span className="icon-link"></span>
                        <span className="icon-github"></span>
                        <button className="">more <span className="icon-arrow-right"/></button>
                    </div>
                </div>
            </div>
        </div>
        
        
        
      </div>
      
    </section>
  );
};

export default MainContent;
