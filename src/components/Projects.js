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

  h1 {
    margin: 0 0 30px;
    color: var(--myYellow);
    font-family: "Roboto";
    font-size: clamp(28px, 6vw, 36px);
    font-weight: 600;
  }

  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: var(--midnightBlue);
    box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%),
      0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);
  }

  .swiper-slide {
    height: 100%;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-button-next {
    color: var(--myYellow);
  }

  .swiper-button-prev {
    color: var(--myYellow);
  }

  .swiper-pagination-bullet {
    background-color: var(--white);
    opacity: 0.5;
    margin: 0 5px;
    size: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--myYellow);
    opacity: 1;
  }

  @media screen and (max-width: 600px) {
    .swiper-button-next {
      visibility: hidden;
    }

    .swiper-button-prev {
      visibility: hidden;
    }
  }
`;

const Content = styled.div`
  width: 80%;
  display: block;
  font-family: "Roboto";
  color: var(--lightGrey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  .myText {
    margin: 0 auto 50px;

    h2 {
      color: var(--white);
      font-size: clamp(20px, 5vw, 26px);
      font-weight: 900;
      margin: 12px 0;
    }

    h3 {
      font-size: clamp(18px, 4vw, 24px);
      font-weight: 500;
      font-style: italic;
      margin: 12px 0;
    }

    h4 {
      font-size: clamp(16px, 4vw, 20px);
      color: var(--white);
      font-weight: 500;
      margin: 12px 0;
    }

    ul {
      padding-inline-start: 15px;
    }

    li,
    p {
      margin: 10px auto;
      font-size: clamp(14px, 3vw, 18px);
      font-weight: 400;
    }

    span {
      color: var(--white);
      font-weight: 900;
      text-decoration: underline;
    }

    .icons {
      display: flex;
      justify-content: center;
      text-align: center;
      margin: 40px auto;

      .icon {
        width: 50px;
        margin: 0 20px;

        a {
          color: var(--myYellow);
          text-decoration: none;
        }
      }
    }
  }
`;

const PhotoDiv = styled.div`
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
      <h1>Projects</h1>
      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
      >
        <SwiperSlide>
          <Content>
            <PhotoDiv>
              <StaticImage
                className="img"
                src="../images/pomodoro-screenshot.png"
                alt="Pomodoro Timer Web App Screenshot"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </PhotoDiv>
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
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content>
            <PhotoDiv>
              <StaticImage
                className="img"
                src="../images/university-of-nottingham-vector-logo copy-01.svg"
                alt="University of Nottingham Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </PhotoDiv>
            <div className="myText">
              <h2>Doctor of Philosophy - PhD Chemistry</h2>
              <h3>University of Nottingham, UK</h3>
              <h4>(Graduated 2001)</h4>
              <p>
                Thesis Title: Time Resolved Infrared Spectroscopy of Organic and
                Biological Transient Species
              </p>
            </div>
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content>
            <PhotoDiv>
              <StaticImage
                className="img"
                src="../images/university-of-nottingham-vector-logo copy-01.svg"
                alt="University of Nottingham Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </PhotoDiv>
            <div className="myText">
              <h2>BSc Honours Chemistry</h2>
              <h3>University of Nottingham, UK</h3>
              <h4>(Graduated 1997)</h4>
              <p>Achieved First Class</p>
              <p>
                Received Multiple Awards for outstanding academic performance
              </p>
            </div>
          </Content>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Projects;
