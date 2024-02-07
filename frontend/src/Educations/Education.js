import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="Education" id="Education">
        <h2 className="col-12 mt-3  mb-1 text-center text-uppercase ">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2021 - Pass"
            iconStyle={{ background: "#f29f67", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Diploma in I.T</h3>
            <h4 className="vertical-timeline-element-subtitle">DEI, IN</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2022 - pass"
            iconStyle={{ background: "#f29f67", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Voc IOT</h3>
            <h4 className="vertical-timeline-element-subtitle">DEI, IN</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2023 - present"
            iconStyle={{ background: "#f29f67", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BFA</h3>
            <h4 className="vertical-timeline-element-subtitle">DEI, IN</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2024 - present"
            iconStyle={{ background: "#f29f67", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.A</h3>
            <h4 className="vertical-timeline-element-subtitle">RCA, IN</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
