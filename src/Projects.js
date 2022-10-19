import React from "react";
import { projects } from "./Data";


const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div
            className="col-12 fs-1 fw-bold text-center mb-5 pb-3"
            id="projects"
          >
            My Projects
          </div>
          {projects.map((Val, key) => {
            const { image, heading, link } = Val;
            return (
              <>
                <div
                  className="col-md-4 col-sm-6 card bg-transparent border-0 text-center pb-5"
                  key={key}
                >
                  <div className="card-img-top">
                    <a href={`${link}`}>
                      <img
                        src={image}
                        alt={image}
                        className="w-100 p-8"
                        id="card-img"
                      />
                    </a>
                  </div>
                  
                  <div
                    className="fw-bold fs-4 card-title"
                    style={{ color: "orange" }}
                  >
                    {heading}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
