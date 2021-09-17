import React, { useState } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import styled from "styled-components";
import { motion } from "framer-motion";
import Loader from "./Loader";
import "@fontsource/gloria-hallelujah";
import "@fontsource/roboto";

export const LayoutWrapper = styled.div`
  min-height: 100hv;
`;

export const StyledH1 = styled(motion.h1)`
  font-family: "Roboto";
  color: var(--white);
  font-size: 3em;
  text-align: center;
`;

const H1Variants = {
  initial: { y: -1000 },
  animate: { y: 0 },
  transition: {
    type: "tween",
    duration: 2,
    delay: 0.4,
  },
};

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LayoutWrapper>
        <GlobalStyle />
        {isLoading ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <StyledH1 variants={H1Variants} initial="initial" animate="animate">
            Under Construction
          </StyledH1>
        )}
        {children}
      </LayoutWrapper>
    </>
  );
};

export default Layout;
