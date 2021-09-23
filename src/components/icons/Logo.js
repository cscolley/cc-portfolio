import React from "react";
import styled from "styled-components";

const LogoDiv = styled.div`
  font-family: "Digital7Mono";
  font-weight: 900;
  color: var(--myYellow);
  font-size: 36px;
`;

const Logo = () => (
  <LogoDiv className="cc-logo">&lt;cc&#47;&gt;</LogoDiv>
);

export default Logo;