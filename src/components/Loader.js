import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "@fontsource/gloria-hallelujah";
import "@fontsource/roboto";
import SearchIcon from "../images/search-solid.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled(motion.div)`
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InputDiv = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Roboto";
  color: var(--darkGrey);
  background-color: var(--white);
  border-radius: 20px;
  height: 40px;
  width: 300px;
`;

const ImgDiv = styled.div`
  height: 50%;
  margin-left: 15px;
  margin-right: 15px;
  opacity: 0.7;
`;

const DomainDiv = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  font-style: italic;
  color: var(--white);
  font-size: 3em;

  @media screen and (max-width: 600px) {
    font-size: 2.4em;
  }
`;

const LogoDiv = styled(motion.div)`
  font-family: "Digital7Mono";
  font-weight: 900;
  color: var(--myYellow);
  font-size: 4em;
  margin-top: 15px;
`;

const Loader = ({ finishLoading }) => {
  const myLogoText = "<cc/>";
  const myDomainText = "chriscolley.com.au";

  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const delayedText = (i, myText) => {
      if (i < myText.length) {
        setText((t) => t + myText[i]);
        setTimeout(() => {
          delayedText(++i, myText);
        }, 150);
      } else return;
    };

    if (isTyping) {
      delayedText(0, myDomainText);
      setIsTyping(false);
    }
  });

  return (
    <>
      <Wrapper>
        <Content
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 8, duration: 2, ease: "easeOut" }}
          onAnimationComplete={finishLoading}
        >
          <InputDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            onAnimationComplete={() => setIsTyping(true)}
          >
            <ImgDiv>
              <img src={SearchIcon} alt="Search Icon" height="100%" />
            </ImgDiv>
            {text}
          </InputDiv>
          <DomainDiv>{text}</DomainDiv>
          <LogoDiv
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
              scale: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
              rotate: [0, 0, 270, 270, 0, 270, 270, 0, 0, 0, 0],
            }}
            transition={{ delay: 5, duration: 2.5, ease: "easeIn" }}
          >
            {myLogoText}
          </LogoDiv>
        </Content>
      </Wrapper>
    </>
  );
};

export default Loader;
