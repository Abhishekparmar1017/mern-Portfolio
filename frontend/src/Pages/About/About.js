import React from "react";
import "./About.css";
import profile from "../../Components/images/RAM.jpeg";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="About">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs12 about-img">
              <img src={profile} alt="pic" />
            </div>
            <div className="col-md-6 about-content">
              <h1>About me</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis nulla cupiditate laborum doloribus ducimus est nam
                consequuntur, doloremque deleniti amet eos. Consequuntur
                pariatur et veniam quaerat? Quas placeat voluptatibus maiores
                quaerat quod, ut debitis iusto veritatis tenetur molestias
                voluptatum praesentium consequatur aut corrupti qui minus,
                dolorem consequuntur dicta? Aspernatur neque et quas
                perspiciatis eveniet! Atque ea magni iusto molestiae sint earum
                quis ipsa. Dolores voluptates inventore ad, impedit esse dolore
                molestias accusantium modi eos labore ratione at eius eveniet
                adipisci debitis enim et consectetur nihil ipsum sequi?
                Inventore quam molestias repellendus reprehenderit adipisci
                dolores harum magnam, libero porro a dolorem earum error eos
                consequatur excepturi quod aspernatur odio ullam vero aperiam et
                perferendis accusantium magni nemo.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
