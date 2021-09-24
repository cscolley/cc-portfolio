import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

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
    font-family: "Digital7Mono";
    font-weight: 500;
    color: var(--myYellow);
    margin: 0 0 30px;
    font-size: clamp(50px, 9vw, 90px);
  }

  h2 {
    margin: 0;
    font-size: clamp(38px, 6vw, 64px);
    color: var(--lightGrey);
    font-weight: 600;
  }

  h3 {
    margin: 0 0 30px;
    color: var(--lightGrey);
    font-size: clamp(16px, 5vw, 22px);
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px;
    }
  }

  p {
    margin: 20px 0;
    max-width: 540px;
    color: var(--lightGrey);
    font-size: clamp(16px, 5vw, 22px);
    font-weight: 400;
    line-height: 1.4em;
  }

  .button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    align-items: center;
    color: var(--myYellow);
    padding: 10px;
    border: 1px solid var(--myYellow);
    border-radius: 4px;
    background-color: var(--midnightBlue);
    box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%),
      0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);
    font-size: 24px;

    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: var(--paradisePink);
    }

    &:visited {
      color: var(--myYellow);
    }
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
    I am a software development professional with a recent Masters of IT qualification
    backed by years of experience delivering successful software products.
  </p>
);

const five = (
  <Link className="button" to="/#contact">
    Contact Me
    <FontAwesomeIcon icon={["far", "smile-wink"]} />
  </Link>
)

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
