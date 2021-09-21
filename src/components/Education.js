import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "../utils/sr";
import { srConfig } from "../config";

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

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

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
    /* height: 100%; */
    height: 400px;
    border-radius: 20px;
    border: 5px solid var(--myYellow);
  }

  .swiper-slide {
    text-align: left;
    font-size: 18px;
    background: var(--lightGrey);

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

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  width: 75%;
  height: 90%;
  color: var(--midnightBlue);
  font-size: clamp(16px, 5vw, 22px);
  font-weight: 400;
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
        // cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        // className="mySwiper"
      >
        <SwiperSlide>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. 1
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content>Slide 2</Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content>Slide 3</Content>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Education;
