import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "../../utils/sr";
import { srConfig } from "../../config";
import { StaticImage } from "gatsby-plugin-image";
import GoogleScholarIcon from "../icons/GoogleScholarIcon";

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
                src="../../images/1200px-Logo_of_Swinburne_University_of_Technology.svg"
                alt="Swinburne University of Technology Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
            <div className="myText">
              <h2>
                Master of Information Technology (Software Development Major)
              </h2>
              <h3>
                Swinburne Univerity of Technology, Melbourne, Australia <span>(2021)</span>
              </h3>
              <div className="grade">3.67 GPA</div>
              <ul>
                <li>
                  I achieved an exceptionally high 3.67 Grade Point Average
                  (GPA) across all subjects and I have received multiple
                  scholarship awards, recognising both project and individual
                  student achievements.
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
                src="../../images/university-of-nottingham-vector-logo copy-01.svg"
                alt="University of Nottingham Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
            <div className="myText">
              <h2>Doctor of Philosophy - PhD Chemistry</h2>
              <h3>University of Nottingham, UK <span>(2001)</span></h3>
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
                src="../../images/university-of-nottingham-vector-logo copy-01.svg"
                alt="University of Nottingham Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
            <div className="myText">
              <h2>BSc Honours Chemistry</h2>
              <h3>University of Nottingham, UK <span>(1997)</span></h3>
              <div className="grade">First Class</div>
              <ul>
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
