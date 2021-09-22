import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "../utils/sr";
import { srConfig } from "../config";
import { StaticImage } from "gatsby-plugin-image";

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

const Experience = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Wrapper id="experience" ref={revealContainer}>
      <div className='section-header'>Experience</div>
      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
      >
        <SwiperSlide>
          <div className='content'>
            <div className='image'>
              <StaticImage
                className="img"
                src="../images/agilent-technologies-logo.jpg"
                alt="Agilent Technologies Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
            <div className="myText">
              <h2>Software QA Engineer</h2>
              <h3>Agilent Technologies, Melbourne, Australia</h3>
              <h4>(Dec 2018 - Dec 2019)</h4>
              <ul>
                <li>
                  Lead automation and end-to-end workflow testing project stream
                  by managing, designing and developing end-to-end Selenium
                  tests, coding in C#.
                </li>
                <li>
                  Fixed software defects, contributing to the project codebase.
                </li>
                <li>Worked within a medium sized Scrum team.</li>
                <li>
                  Software utilised included SourceTree, GIT, Jira, Visual
                  Studio, WebStorm and GoCD.
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='content'>
            <div className='image'>
              <StaticImage
                className="img"
                src="../images/university-of-nottingham-vector-logo copy-01.svg"
                alt="University of Nottingham Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
            <div className="myText">
              <h2>Doctor of Philosophy - PhD Chemistry</h2>
              <h3>University of Nottingham, UK</h3>
              <p>
                Thesis Title: Time Resolved Infrared Spectroscopy of Organic and
                Biological Transient Species
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='content'>
            <div className='image'>
              <StaticImage
                className="img"
                src="../images/university-of-nottingham-vector-logo copy-01.svg"
                alt="University of Nottingham Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
            <div className="myText">
              <h2>BSc Honours Chemistry</h2>
              <h3>University of Nottingham, UK</h3>
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

export default Experience;
