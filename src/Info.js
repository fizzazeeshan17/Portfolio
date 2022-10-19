import React from "react";
import { Typewriter } from "react-simple-typewriter";
import myImage from "./myImages.jpg";

const Info = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <div id="main_hero">
            <div className="col-7 px-5 mx-4 main_hero" id="info">
              <div className="fs-3 px-3 text-2">Hello!</div>
              <div className="text-1">Welcome to my Portfolio!</div>
              <div className="fs-4 px-3 text-2">
                I am a &nbsp;
                <span
                  className="fs-2 fw-bold text-3"
                  style={{ color: "orange" }}
                >
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={70}
                    delaySpeed={1000}
                    words={["Software Developer", "Student", "Freelancer"]}
                  />
                </span>
              </div>
            </div>
            
            <div id="image_fizza">
              <img src={myImage} alt="myImage" className="image_fizza" />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Info;
