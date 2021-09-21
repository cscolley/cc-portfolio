import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import sr from "../utils/sr";
import { srConfig } from "../config";

const Wrapper = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--myYellow);
    font-family: "Roboto";
    font-size: clamp(24px, 5vw, 32px);
    font-weight: 600;
  }

  .inner {
    /* display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    } */

    p {
      margin: 0;
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

const Contact = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Wrapper id="contact" ref={revealContainer}>
      <h1>Contact</h1>
      <div className="inner">
        <p>Contact info</p>
      </div>
    </Wrapper>
  );
};

export default Contact;
