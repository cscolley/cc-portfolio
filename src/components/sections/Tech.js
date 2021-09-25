import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "../../utils/sr";
import { srConfig } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CSharpIcon from "../icons/CSharpIcon";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
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
  SwiperCore.use([Pagination, Mousewheel, Keyboard]);
}

const Wrapper = styled.section`
  max-width: 900px;

  .tech-swiper {
    padding: 15px;
    width: auto;
    border: 1px solid rgba(200, 200, 200, 0.3);
    border-radius: 20px;
    background-color: var(--midnightBlue);
    box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%),
      0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);
  }

  .tech-swiper-slide {
    height: auto;
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

  .tech-content {
    width: 80%;
    color: var(--lightGrey);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }
`;

const TechName = styled.p`
  margin: 10px auto;
  font-size: clamp(14px, 3vw, 18px);
  font-weight: 400;
`;

const Tech = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Wrapper id="tech" ref={revealContainer}>
      <div className="section-header">Tech I'm skilled with...</div>
      <Swiper
        pagination={{
          "clickable": true
        }}
        mousewheel={true}
        keyboard={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="tech-swiper"
      >
        <SwiperSlide className="tech-swiper-slide">
          <div className="tech-content">
            <FontAwesomeIcon icon={["fab", "react"]} size="6x" />
            <TechName>React</TechName>
          </div>
        </SwiperSlide>
        <SwiperSlide className="tech-swiper-slide">
          <div className="tech-content">
            <FontAwesomeIcon icon={["fab", "js-square"]} size="6x" />
            <TechName>JavaScript</TechName>
          </div>
        </SwiperSlide>
        <SwiperSlide className="tech-swiper-slide">
          <div className="tech-content">
            <FontAwesomeIcon icon={["fab", "aws"]} size="6x" />
            <TechName>AWS</TechName>
          </div>
        </SwiperSlide>
        <SwiperSlide className="tech-swiper-slide">
          <div className="tech-content">
            <FontAwesomeIcon icon={["fab", "html5"]} size="6x" />
            <TechName>HTML5</TechName>
          </div>
        </SwiperSlide>
        <SwiperSlide className="tech-swiper-slide">
          <div className="tech-content">
            <FontAwesomeIcon icon={["fab", "css3-alt"]} size="6x" />
            <TechName>CSS3</TechName>
          </div>
        </SwiperSlide>
        <SwiperSlide className="tech-swiper-slide">
          <div className="tech-content">
            <FontAwesomeIcon icon={["fab", "php"]} size="6x" />
            <TechName>PHP</TechName>
          </div>
        </SwiperSlide>
        <SwiperSlide className="tech-swiper-slide">
          <div className="tech-content">
            <FontAwesomeIcon icon={["fab", "java"]} size="6x" />
            <TechName>Java</TechName>
          </div>
        </SwiperSlide>
        <SwiperSlide className="tech-swiper-slide">
          <div className="tech-content">
            <CSharpIcon />
            <TechName>C#</TechName>
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Tech;
