import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import ReactAnime from "react-animejs";
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

const Content = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Roboto";
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
`;

const LogoDiv = styled(motion.div)`
  font-family: "Digital7Mono";
  font-weight: 900;
  color: var(--myYellow);
  font-size: 4em;
  padding: 6px;
  border: 6px solid var(--myYellow);
  border-radius: 15px;
  background-color: var(--darkGrey);
`;

const InteractiveDemo = () => {
  const myLogoText = "<cc/>";
  const myDomainText = "chriscolley.com.au";

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delayedText = (i, myText) => {
      if (i < myText.length) {
        setText((t) => t + myText[i]);
        setTimeout(() => {
          delayedText(++i, myText);
        }, 150);
      } else return;
    };

    if (loading) {
      delayedText(0, myDomainText);
      setLoading(false);
    }
  });

  return (
    <>
      <Wrapper>
        <Content>
          <InputDiv>
            <ImgDiv>
              <img src={SearchIcon} alt="Search Icon" height="100%" />
            </ImgDiv>
            {text}
          </InputDiv>
          <DomainDiv>{text}</DomainDiv>
          <LogoDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 6 }}
          >
            {myLogoText}
          </LogoDiv>
        </Content>
      </Wrapper>
    </>
  );
};

const Loader = () => {
  return (
    <>
      <InteractiveDemo />
    </>
  );
};

export default Loader;
