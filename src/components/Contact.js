import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "../utils/sr";
import { srConfig } from "../config";
import EmailIcon from "./icons/EmailIcon";
import { email, socialMedia } from "../config";
import Icon from "./icons/Icon";

const StyledSocialList = styled.ul`
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: var(--myYellow);
  margin-top: 40px;
  padding: 0;
  list-style: none;

  li {
    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
`;

const Wrapper = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

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
    p {
      margin: 0 0 40px;
      max-width: 540px;
      font-family: "Roboto";
      color: var(--lightGrey);
      font-size: clamp(16px, 5vw, 22px);
      font-weight: 400;
      text-align: center;
    }

    .button {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: center;
      color: var(--myYellow);
      padding: 0 10px;
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
    }
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
        <p>
          I am always open to discussing new opportunities. Please feel free to
          get in touch.
        </p>
        <a className="button" href={`mailto:${email}`}>
          Email me
          <EmailIcon />
        </a>
      </div>
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))}
      </StyledSocialList>
    </Wrapper>
  );
};

export default Contact;
