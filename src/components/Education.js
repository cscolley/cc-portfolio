import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "../utils/sr";
import { srConfig } from "../config";
import { StaticImage } from "gatsby-plugin-image";
import GoogleScholarIcon from "./icons/GoogleScholarIcon";

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

  .button {
    width: 150px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    color: var(--myYellow);
    padding: 6px 10px;
    border: 1px solid var(--myYellow);
    border-radius: 4px;
    background-color: var(--midnightBlue);
    box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%),
      0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);
    font-size: 20px;

    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: var(--paradisePink);
    }

    .icon {
      height: 30px;
      width: 30px;
    }
  }
`;

const Education = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Wrapper id="education" ref={revealContainer}>
      <div className="section-header">Education</div>
      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
      >
        <SwiperSlide>
          <div className="content">
            <div className="image">
              <StaticImage
                className="img"
                src="../images/1200px-Logo_of_Swinburne_University_of_Technology.svg"
                alt="Swinburne University of Technology Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
            <div className="myText">
              <h2>
                Master of Information Technology (Software Development major)
              </h2>
              <h3>Swinburne Univerity of Technology, Melbourne, Australia</h3>
              <h4>(Graduated 2021)</h4>
              <ul>
                <li>
                  I achieved an exceptionally high{" "}
                  <span>3.67 Grade Point Average</span> across all subjects and
                  I have received multiple scholarship awards, recognising both
                  project and individual student achievements.
                </li>
                <li>
                  I delivered practical real-world projects as well as applying
                  my theoretical understanding of design, development, testing
                  and deployment.
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="image">
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
              <h4>(Graduated 2001)</h4>
              <ul>
                <li>
                  Thesis Title: Time Resolved Infrared Spectroscopy of Organic
                  and Biological Transient Species
                </li>
              </ul>
              <a
                className="button"
                href="https://scholar.google.com.au/citations?hl=en&user=5CvP1vwAAAAJ"
              >
                Publications
                <div className="icon">
                <GoogleScholarIcon />
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="image">
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
              <h4>(Graduated 1997)</h4>
              <ul>
                <li>Achieved First Class</li>
                <li>
                  Received Multiple Awards for outstanding academic performance
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Education;
