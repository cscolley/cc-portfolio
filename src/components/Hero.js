import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import "@fontsource/gloria-hallelujah";
import "@fontsource/roboto";
import Logo from "./Logo";

const Wrapper = styled(motion.div)`
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
    color: var(--white);
    font-weight: 600;
  }

  h2 {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
    font-family: "Roboto";
    color: var(--lightGrey);
    font-weight: 600;
  }

  h3 {
    margin: 0 0 30px 4px;
    color: var(--myYellow);
    font-family: "Roboto";
    font-size: clamp(16px, 5vw, 22px);
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
    font-family: "Roboto";
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

const five = <div style={{ fontSize: "2em", marginTop: "20px" }} ><Logo /></div>;

const items = [one, two, three, four, five];

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
