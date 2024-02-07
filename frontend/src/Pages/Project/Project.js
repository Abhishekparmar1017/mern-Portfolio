import React from "react";
import "./Project.css";
import pic from "../../Components/images/pic3.jpg.jpg";
import Spin from "react-reveal/Spin";
import { Link } from "react-scroll";

const Project = () => {
  return (
    <>
      <div className="continer project" id="Project">
        <h2 className="col-12 mt-3  mb-1 text-center text-uppercase ">
          Project
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Hera is my top project with link Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Non inventore cupiditate repellat ex
          dolore ratione repellendus neque consequuntur sunt porro nihil quae,
          aliquid accusamus facilis! Recusandae laborum sapiente suscipit
          aspernatur?
        </p>
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={pic} alt="project" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">E-comm</h5>
                  </div>
                  <Link className="ad-btn" to="">
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">React</span>
                  <img src={pic} alt="project" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  {/* <span className="card-detail-badge">Mongodb</span> */}
                  {/* <span className="card-detail-badge">Express</span> */}
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Protfolio</h5>
                  </div>
                  <Link className="ad-btn" to="">
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={pic} alt="project" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">employee</h5>
                  </div>
                  <Link className="ad-btn" to="View">
                    View
                  </Link>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Project;
