import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "../utils/sr";
import { srConfig } from "../config";
import { StaticImage } from "gatsby-plugin-image";
import GithubIcon from "./icons/GithubIcon";
import IconExternal from "./icons/ExternalLinkIcon";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

if (typeof window !== "undefined") {
  // install Swiper modules
  SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);
}

const Wrapper = styled.section`
  max-width: 900px;
`;

const ProjectScreenshotDiv = styled.div`
  position: relative;
  max-width: 450px;
  margin: 20px auto;
  background-color: var(--white);
  border: 2px solid var(--white);
  border-radius: 5px;

  img {
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Projects = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Wrapper id="projects" ref={revealContainer}>
      <div className='section-header'>Projects</div>
      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
      >
        <SwiperSlide>
          <div className='content'>
            <ProjectScreenshotDiv>
              <StaticImage
                className="img"
                src="../images/pomodoro-screenshot.png"
                alt="Pomodoro Timer Web App Screenshot"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </ProjectScreenshotDiv>
            <div className="myText">
              <h2>Pomodoro Timer</h2>
              <h3>Swinburne Univerity of Technology, Melbourne, Australia</h3>
              <h4>(Graduated 2021)</h4>
              <p>
                I achieved an exceptionally high{" "}
                <span>3.67 Grade Point Average</span> across all subjects and I
                have received multiple scholarship awards, recognising both
                project and individual student achievements.
              </p>
              <p>
                I delivered practical real-world projects as well as applying my
                theoretical understanding of design, development, customisation,
                configuration, testing and deployment.
              </p>
              <div className="icons">
                <div className="icon">
                  <a href="https://github.com/cscolley/pomodoro-timer">
                    <GithubIcon />
                  </a>
                </div>
                <div className="icon">
                  <a href="https://cscolley.github.io/pomodoro-timer/">
                    <IconExternal />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='content'>
            <ProjectScreenshotDiv>
              <StaticImage
                className="img"
                src="../images/university-of-nottingham-vector-logo copy-01.svg"
                alt="University of Nottingham Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </ProjectScreenshotDiv>
            <div className="myText">
              <h2>Doctor of Philosophy - PhD Chemistry</h2>
              <h3>University of Nottingham, UK</h3>
              <h4>(Graduated 2001)</h4>
              <p>
                Thesis Title: Time Resolved Infrared Spectroscopy of Organic and
                Biological Transient Species
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='content'>
            <ProjectScreenshotDiv>
              <StaticImage
                className="img"
                src="../images/university-of-nottingham-vector-logo copy-01.svg"
                alt="University of Nottingham Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </ProjectScreenshotDiv>
            <div className="myText">
              <h2>BSc Honours Chemistry</h2>
              <h3>University of Nottingham, UK</h3>
              <h4>(Graduated 1997)</h4>
              <p>Achieved First Class</p>
              <p>
                Received Multiple Awards for outstanding academic performance
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Projects;
