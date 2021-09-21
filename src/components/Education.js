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

  h1 {
    margin: 0 0 30px 4px;
    color: var(--myYellow);
    font-family: "Roboto";
    font-size: clamp(24px, 5vw, 32px);
    font-weight: 600;
  }

  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 20px;

    background-color: var(--lightGrey);
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
  height: 90%;
  display: block;
  font-family: "Roboto";
  color: var(--midnightBlue);
  background-color: var(--lightGrey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  .myText {
    margin: 20px auto 40px;

    h2 {
      font-size: clamp(20px, 5vw, 26px);
      font-weight: 700;
    }

    h3 {
      font-size: clamp(18px, 5vw, 24px);
      font-weight: 500;
      font-style: italic;
    }

    p {
      margin: 10px auto;
      font-size: clamp(14px, 5vw, 20px);
      font-weight: 400;
    }

    strong {
      font-weight: 900;
      text-decoration: underline;
    }
  }
`;

const PhotoDiv = styled.div`
  position: relative;
  max-width: 300px;
  margin: 20px auto;

  img {
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Education = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Wrapper id="education" ref={revealContainer}>
      <h1>Education</h1>
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
                src="../images/1200px-Logo_of_Swinburne_University_of_Technology.svg"
                alt="Swinburne University of Technology Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </PhotoDiv>
            <div className="myText">
              <h2>
                Master of Information Technology (Software Development major)
              </h2>
              <h3>Swinburne Univerity of Technology, Melbourne, Australia</h3>
              <p>
                I achieved an exceptionally high{" "}
                <strong>3.67 Grade Point Average</strong> across all subjects
                and I have received multiple scholarship awards, recognising
                both project and individual student achievements.
              </p>
              <p>
                1 delivered practical real-world projects as well as applying my
                theoretical understanding of design, development, customisation,
                configuration, testing and deployment.
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
              <h2>Doctor of Philosophy - PhD Chemistry</h2>
              <h3>University of Nottingham, UK</h3>
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
              <p>Achieved First Class</p>
              <p>
                Recieved Multiple Awards for outstanding academic performance
              </p>
            </div>
          </Content>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Education;
