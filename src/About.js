import React from "react";
import { slider } from "./Data";
import Resume from "./Fizza's CV.pdf";
const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 text-center fw-bold fs-1 mb-5" id="about">
            About Me
          </div>
          <div className="col-6 px-5 fs-4 pt-5 mt-2" id="text_about">
            My name is <span style={{ color: "orange" }}>Fizza Zeeshan</span>, I
            am a person with a strong interest in software development,
            particularly web development. My objectives are to advance my
            professional career by refining my web development abilities. I've
            always been intrigued by software innovation and design. Working
            creatively to solve complex problems and learning how people
            interact with designed systems and services is a lot of fun. I've
            done some group projects at university and an internship, and I
            loved being on a journey with amazing people, creating new things by
            pushing the boundaries.
            <br></br>
            Apart from that, I enjoy baking. I bake for fun and find it
            therapeutic. I actually run a small home-based business. I am a
            co-founder and manager of a business called MiniTreats.
            <div className="d-flex justify-content-between mt-5">
              <a href={Resume} download>
                <button className="btn text-white fs-4 fw-bold">
                  <span>Download Resume</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
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
