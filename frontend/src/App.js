import Layout from "./Components/Layout/Layout.js";
import Contact from "./Contact/Contact.js";
import Education from "./Educations/Education.js";
import About from "./Pages/About/About.js";
import Project from "./Pages/Project/Project.js";
import Techstack from "./Pages/Techstack/Techstack.js";
import WorkEx from "./WoekExp/WorkEx.js";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext.js";
import Tada from "react-reveal/Tada";
import MobileNav from "./Components/MobileNav/MobileNav.js";
// import View from "./Components/View.js";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Project />
          <WorkEx />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">Made By Abhi Thakur🥰 &copy; 2024</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#fff"
        style={{
          backgroundColor: "#116466",
          borderRadius: "80px",
        }}
      />
    </>
  );
}

export default App;
