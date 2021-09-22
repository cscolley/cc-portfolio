import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const StyledSideElement = styled(motion.div)`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: var(--myYellow);

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
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

const Side = ({ children, orientation }) => {
  return (
    <StyledSideElement orientation={orientation} variants={myVariants} initial="initial" animate="animate">  
      {children}
    </StyledSideElement>
  );
};

export default Side;
