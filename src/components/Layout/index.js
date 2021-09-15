import React from "react";
import { LayoutWrapper } from "./Layout.styles";
import { GlobalStyle } from "../../styles/GlobalStyle";

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <GlobalStyle />
        {children}
      </LayoutWrapper>
    </>
  );
};

export default Layout;
