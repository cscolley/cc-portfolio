import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "../../utils/sr";
import { srConfig } from "../../config";
import { StaticImage } from "gatsby-plugin-image";
import GitHubIcon from "../icons/GitHubIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

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
  width: auto;
  height: auto;
  max-width: 450px;
  max-height: 450px;
  margin: 20px auto;
  background-color: var(--white);
  border: 2px solid var(--white);
  border-radius: 5px;

  img {
    border-radius: 5px;
    max-width: 450px;
    max-height: 450px;
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
      <div className="section-header">Projects</div>
      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
      >
        <SwiperSlide>
          <div className="content">
            <a href="https://cscolley.github.io/markdown-previewer/">
              <ProjectScreenshotDiv>
                <StaticImage
                  className="img"
                  src="../../images/markdown-previewer.png"
                  alt="Markdown Previewer Web App Screenshot"
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </ProjectScreenshotDiv>
            </a>
            <div className="myText">
              <h2>Markdown Previewer</h2>
              <ul>
                <li>
                  I built this project as part of my FreeCodeCamp.org Front End
                  Development Libraries Certification.
                </li>
                <li>Makes use of Markedjs, a markdown parser and compiler.</li>
                <li>
                  Technology used for this fully responsive web app:
                  <ul>
                    <li>React</li>
                    <li>Styled-Components</li>
                  </ul>
                </li>
              </ul>
              <div className="icons">
                <div className="icon">
                  <a href="https://github.com/cscolley/markdown-previewer">
                    <GitHubIcon />
                  </a>
                </div>
                <div className="icon">
                  <a href="https://cscolley.github.io/markdown-previewer/">
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <a href="https://cscolley.github.io/pomodoro-timer/">
              <ProjectScreenshotDiv>
                <StaticImage
                  className="img"
                  src="../../images/pomodoro-screenshot.png"
                  alt="Pomodoro Timer Web App Screenshot"
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </ProjectScreenshotDiv>
            </a>
            <div className="myText">
              <h2>Pomodoro Timer</h2>
              <ul>
                <li>
                  I built this project as part of my FreeCodeCamp.org Front End
                  Development Libraries Certification.
                </li>
                <li>
                  The Pomodoro Technique is a productivity system to avoid
                  procrastination or getting distracted by working for
                  relatively short sessions followed by repeated short breaks.
                </li>
                <li>
                  Technology used for this fully responsive web app:
                  <ul>
                    <li>React</li>
                    <li>Styled-Components</li>
                  </ul>
                </li>
              </ul>
              <div className="icons">
                <div className="icon">
                  <a href="https://github.com/cscolley/pomodoro-timer">
                    <GitHubIcon />
                  </a>
                </div>
                <div className="icon">
                  <a href="https://cscolley.github.io/pomodoro-timer/">
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <a href="https://cscolley.github.io/react-calculator/">
              <ProjectScreenshotDiv>
                <StaticImage
                  className="img"
                  src="../../images/calculator-screenshot.png"
                  alt="Calculator Web App Screenshot"
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </ProjectScreenshotDiv>
            </a>
            <div className="myText">
              <h2>Calculator</h2>
              <ul>
                <li>
                  I built this project as part of my FreeCodeCamp.org Front End
                  Development Libraries Certification.
                </li>
                <li>
                  Technology used for this fully responsive web app:
                  <ul>
                    <li>React</li>
                    <li>Styled-Components</li>
                  </ul>
                </li>
              </ul>
              <div className="icons">
                <div className="icon">
                  <a href="https://github.com/cscolley/react-calculator">
                    <GitHubIcon />
                  </a>
                </div>
                <div className="icon">
                  <a href="https://cscolley.github.io/react-calculator/">
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <a href="https://cscolley.github.io/material-ui-react-drum-machine/">
              <ProjectScreenshotDiv>
                <StaticImage
                  className="img"
                  src="../../images/drum-machine.png"
                  alt="Drum Machine Web App Screenshot"
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </ProjectScreenshotDiv>
            </a>
            <div className="myText">
              <h2>Drum Machine</h2>
              <ul>
                <li>
                  I built this project as part of my FreeCodeCamp.org Front End
                  Development Libraries Certification.
                </li>
                <li>
                  Technology used for this fully responsive web app:
                  <ul>
                    <li>React</li>
                    <li>Material-UI</li>
                  </ul>
                </li>
              </ul>
              <div className="icons">
                <div className="icon">
                  <a href="https://github.com/cscolley/material-ui-react-drum-machine/">
                    <GitHubIcon />
                  </a>
                </div>
                <div className="icon">
                  <a href="https://cscolley.github.io/material-ui-react-drum-machine/">
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <a href="https://cscolley.github.io/random-quote-machine/">
              <ProjectScreenshotDiv>
                <StaticImage
                  className="img"
                  src="../../images/random-quote-machine.png"
                  alt="Random Quote Machine Web App Screenshot"
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </ProjectScreenshotDiv>
            </a>
            <div className="myText">
              <h2>Random Quote Machine</h2>
              <ul>
                <li>
                  I built this project as part of my FreeCodeCamp.org Front End
                  Development Libraries Certification.
                </li>
                <li>
                  Technology used for this fully responsive web app:
                  <ul>
                    <li>Sass</li>
                    <li>jQuery</li>
                  </ul>
                </li>
              </ul>
              <div className="icons">
                <div className="icon">
                  <a href="https://github.com/cscolley/random-quote-machine">
                    <GitHubIcon />
                  </a>
                </div>
                <div className="icon">
                  <a href="https://cscolley.github.io/random-quote-machine/">
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Projects;
