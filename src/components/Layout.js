import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import styled from "styled-components";
import Loader from "./Loader";

export const LayoutWrapper = styled.div`
  min-height: 100hv;
`;

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <GlobalStyle />
        <Loader />
        {children}
      </LayoutWrapper>
    </>
  );
};

export default Layout;
