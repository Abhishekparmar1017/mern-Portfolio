import React, { useState } from "react";
import "./MobileNav.css";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import {
  FcAbout,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcRatings,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  // handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  //   handle menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="mobil-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuUnfold
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <AiOutlineMenuFold
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}
          <span className="mobile-nav-title">My Protfolio App</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
