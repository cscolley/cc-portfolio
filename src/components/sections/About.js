import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import sr from "../../utils/sr";
import { srConfig } from "../../config";

const Wrapper = styled.section`
  max-width: 900px;

  h1 {
    margin: 0 0 30px;
    color: var(--myYellow);
    font-family: "Roboto";
    font-size: clamp(28px, 6vw, 36px);
    font-weight: 600;
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }

    p {
      margin: 0 0 10px 0;
      max-width: 540px;
      font-family: "Roboto";
      color: var(--lightGrey);
      font-size: clamp(16px, 5vw, 22px);
      font-weight: 400;
    }

    .img {
      position: relative;
      border-radius: 20px;
      border: 5px solid var(--myYellow);
    }
  }
`;

const PhotoDiv = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
`;

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Wrapper id="about" ref={revealContainer}>
      <h1>About Me</h1>
      <div className="inner">
        <div>
          <p>
            I am passionate about the delivery of high quality software products
            that make a real difference to people's lives.
          </p>
          <p>
            I have a very analytical mind and I am a natural problem solver. I
            love to learn and I am constantly teaching myself new technology so
            that I can deliver optimal solutions.
          </p>
          <p>
            Experience in commercial software development has seen me play a
            central role in specifications, UI/UX design and delivery of
            successful digital product launches with significant business
            growth.
          </p>
        </div>
        <PhotoDiv>
          <StaticImage
            className="img"
            src="../../images/PhotoOfMeSmaller.jpg"
            alt="Photo of Chris Colley"
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </PhotoDiv>
      </div>
    </Wrapper>
  );
};

export default About;
