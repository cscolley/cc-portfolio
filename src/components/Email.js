import React from 'react';
import styled from 'styled-components';
import { email } from '../config';
import Side from './Side';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 150px;
    margin: 0 auto;
    background-color: var(--myYellow);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 0.2em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

const Email = () => (
  <Side orientation="right">
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);

export default Email;
