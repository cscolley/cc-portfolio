import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import "@fontsource/gloria-hallelujah";
import "@fontsource/roboto";

const Wrapper = styled(motion.section)`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  line-height: 1.1;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 0;
    font-size: clamp(40px, 8vw, 80px);
    font-family: "Gloria Hallelujah";
    font-style: italic;
    color: var(--myYellow);
    font-weight: 600;
  }

  h2 {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
    color: var(--lightGrey);
    font-weight: 600;
  }

  h3 {
    margin: 0 0 30px 4px;
    color: var(--white);
    font-size: clamp(16px, 5vw, 22px);
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
    color: var(--lightGrey);
    font-size: clamp(16px, 5vw, 22px);
    font-weight: 400;
  }
`;

const myVariants = {
  initial: { y: -1000 },
  animate: { y: 0 },
  transition: {
    type: "tween",
    duration: 2,
    delay: 0.4,
  },
};

const one = <h3>Hi, my name is</h3>;

const two = <h1>Chris Colley</h1>;

const three = <h2>I build things for the web.</h2>;

const four = (
  <p>
    I am a Software Development Professional with a Masters of IT qualification
    and a broad technical skill set that encompasses digital product development
    and test automation.
  </p>
);

const items = [one, two, three, four];

const Hero = () => {
  return (
    <Wrapper variants={myVariants} initial="initial" animate="animate">
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </Wrapper>
  );
};

export default Hero;
