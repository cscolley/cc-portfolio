import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "@fontsource/roboto";
import SearchIcon from "../images/search-solid.svg";
import Logo from "./icons/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled(motion.div)`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480) {
    height: 250px;
  }
`;

const InputDiv = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Roboto";
  color: var(--darkGrey);
  background-color: var(--white);
  font-size: 30px;
  border-radius: 35px;
  height: 70px;
  width: 600px;

  @media (max-width: 768px) {
    font-size: 30px;
    border-radius: 35px;
    height: 70px;
    width: 600px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    border-radius: 30px;
    height: 60px;
    width: 90vw;
  }
`;

const ImgDiv = styled(motion.div)`
  height: 40%;
  margin-left: 5%;
  margin-right: 6%;
  opacity: 0.7;
`;

const LogoDiv = styled(motion.div)`
  margin-top: 15px;

  .cc-logo {
    font-size: 12em;

    @media (max-width: 480px) {
      font-size: 9em;
    }
  }
`;

const Loader = ({ finishLoading }) => {
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
  }, [isTyping]);

  return (
    <>
      <Wrapper>
        <Content
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 9, duration: 2, ease: "easeOut" }}
          onAnimationComplete={finishLoading}
        >
          <InputDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            onAnimationComplete={() => setIsTyping(true)}
          >
            <ImgDiv
              animate={{
                color: [
                  "rgba(28, 28, 28, 0.98)",
                  "#ed3d63",
                  "rgba(28, 28, 28, 0.98)",
                ],
                scale: [1, 1.3, 1],
              }}
              transition={{
                delay: 5,
                duration: 1,
              }}
            >
              <FontAwesomeIcon icon={["fas", "search"]} />
              {/* <img src={SearchIcon} alt="Search Icon" height="100%" /> */}
            </ImgDiv>
            {text}
          </InputDiv>
          <LogoDiv
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 360,
            }}
            transition={{
              delay: 6,
              duration: 2.5,
              type: "spring",
              bounce: 0.6,
            }}
          >
            <Logo />
          </LogoDiv>
        </Content>
      </Wrapper>
    </>
  );
};

export default Loader;
