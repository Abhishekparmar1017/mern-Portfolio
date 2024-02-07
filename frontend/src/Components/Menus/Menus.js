import React from "react";
import "./Menus.css";
import { Link } from "react-scroll";
import profile from "../images/RAM.jpeg";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import {
  FcAbout,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcRatings,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={profile} alt="profile pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout title="About" />
                    Abour
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="Education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="Techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcRatings />
                    Techstack
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="Project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector />
                    Project
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="Work Experince"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode />
                    work Experince
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout title="About" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="Education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="Techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcRatings />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="Project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="Work Experince"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
