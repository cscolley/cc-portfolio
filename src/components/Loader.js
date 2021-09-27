import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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

  @media (max-width: 768px) {
    height: 325px;
  }

  @media (max-width: 480px) {
    height: 300px;
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
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
    border-radius: 32.5px;
    height: 65px;
    width: 70vw;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    border-radius: 30px;
    height: 60px;
    width: 84vw;
  }
`;

const Cursor = styled(motion.span)`
  font-weight: 100;
  font-size: 1.3em;
`;

const ImgDiv = styled(motion.div)`
  height: 40%;
  margin-left: 5%;
  margin-right: 6%;
  opacity: 0.6;
  display: flex;
  align-items: center;
`;

const LogoDiv = styled(motion.div)`
  margin-top: 60px;

  .cc-logo {
    font-size: 12em;

    @media (max-width: 480px) {
      margin-bottom: 40px;
      font-size: 8em;
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
        }, 100);
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
          transition={{ delay: 5.6, duration: 0.3, ease: "easeOut" }}
          onAnimationComplete={finishLoading}
        >
          <InputDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            onAnimationComplete={() => setIsTyping(true)}
          >
            <ImgDiv
              animate={{
                opacity: [0.6, 1.5, 0.6],
                scale: [1, 1.6, 1],
              }}
              transition={{
                delay: 2.9,
                duration: 0.3,
              }}
            >
              <FontAwesomeIcon icon={["fas", "search"]} />
            </ImgDiv>
            {text}
            <Cursor
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1, ease: "easeIn", repeat: Infinity }}
            >|</Cursor>
          </InputDiv>
          <LogoDiv
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: [1, 1.5, 1],
              rotate: 360,
            }}
            transition={{
              delay: 3.3,
              duration: 2,
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
