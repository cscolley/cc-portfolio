import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.section`
  max-width: 900px;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--myYellow);
    font-family: "Roboto";
    font-size: clamp(24px, 5vw, 32px);
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
      padding: 15px;
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
  return (
    <Wrapper>
      <h1>01. About Me</h1>
      <div className="inner">
        <div>
          <p>
            My exposure and experience in delivering cloud-based projects
            involved applying my knowledge of full stack development, cloud
            technology, UI/UX design.
          </p>
          <p>
            I supported software projects which involved enhancing data
            processing and compliance by leading test automation development to
            drive UAT efficiency within Agile development environments.
          </p>
          <p>
            Experience in commercial software development involving multi-tier
            architectures saw me contribute to optimisation, efficiency, digital
            product launches and business growth.
          </p>
        </div>
        <PhotoDiv>
          <StaticImage
            className="img"
            src="../images/PhotoOfMeSmaller.jpg"
            alt="Photo of Chris Colley"
          />
        </PhotoDiv>
      </div>
    </Wrapper>
  );
};

export default About;
