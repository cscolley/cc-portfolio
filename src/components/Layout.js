import React, { useState } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import styled from "styled-components";
import { motion } from "framer-motion";
import Loader from "./Loader";
import Head from "./Head";
import "@fontsource/gloria-hallelujah";
import "@fontsource/roboto";

export const LayoutWrapper = styled.div`
  min-height: 100hv;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledH1 = styled(motion.h1)`
  font-family: "Roboto";
  color: var(--white);
  font-size: 3em;
  text-align: center;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 200px 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1080px) {
    padding: 200px 100px;
  }
  @media (max-width: 768px) {
    padding: 150px 50px;
  }
  @media (max-width: 480px) {
    padding: 125px 25px;
  }
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
      <Head />
      <LayoutWrapper>
        <GlobalStyle />
        {isLoading ? (
          <Content><Loader finishLoading={() => setIsLoading(false)} /></Content>
        ) : (
          <Content>{children}</Content>
        )}
      </LayoutWrapper>
    </>
  );
};

export default Layout;
