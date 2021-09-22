import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import sr from "../utils/sr";
import { srConfig } from "../config";
import EmailIcon from "./icons/EmailIcon";
import { email } from "../config";

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
    margin: 0 0 30px;
    color: var(--myYellow);
    font-family: "Roboto";
    font-size: clamp(28px, 6vw, 36px);
    font-weight: 600;
  }

  .content {
    color: var(--myYellow);

    svg {
      width: 100px;
      height: 100%;
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
      <div className="content">
        <a href={`mailto:${email}`}>
          <EmailIcon />
        </a>
      </div>
    </Wrapper>
  );
};

export default Contact;
