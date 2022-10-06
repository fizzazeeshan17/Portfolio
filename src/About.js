import React from "react";
import { slider } from "./Data";
import Resume from "./Fizza's Resume.pdf";
const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 text-center fw-bold fs-1 mb-5" id="heading">
            About Me
          </div>
          <div className="col-6 px-5 fs-4 pt-5 mt-2" id="text_about">
            My name is <span style={{ color: "orange" }}>Fizza Zeeshan</span>, I
            am a software developer who is also a student and a freelancer. My
            objectives are to advance my professional career by refining my web
            development abilities.
            <div className="d-flex justify-content-between mt-5">
              <a href={Resume} download>
                <button className="btn text-white fs-4 fw-bold">
                  Download Resume!
                </button>
              </a>
            </div>
          </div>
          <div className="col-6 pt-5" id="stats_about">
            {slider.map((Val) => {
              const { text, width } = Val;
              return (
                <>
                  <div className="mb-3">
                    <span className="fw-bold fs-6">{text}</span>
                    <div className="slider">
                      <div
                        className="inner-slider"
                        style={{ width: `${width}` }}
                      ></div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
