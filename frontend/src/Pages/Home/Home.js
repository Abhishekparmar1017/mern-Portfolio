import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../Components/Docs/Resume.txt";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container " id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={25} />
          ) : (
            <BsFillSunFill size={25} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer..!",
                    "MERN Stack Developer..!",
                    "React Native Developer..!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=8445044252"
                rel="noreferror"
                target="_blank"
              >
                Hire Me
              </a>

              <a button className="btn btn-cv" href={Resume} download="Abhi">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
