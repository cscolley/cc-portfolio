import { createGlobalStyle } from "styled-components";
import TransitionStyles from './TransitionStyles';

import Digital7MonoTtf from "../fonts/Digital-7Mono.ttf";
import Digital7MonoWoff from "../fonts/Digital-7Mono.woff";
import Digital7MonoWoff2 from "../fonts/Digital-7Mono.woff2";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Digital7Mono';
        src: local('Font Name'), local('FontName'),
        url(${Digital7MonoTtf}) format('truetype'),
        url(${Digital7MonoWoff2}) format('woff2'),
        url(${Digital7MonoWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    :root {
    --width: 460px;
    --white: #fafafa;
    --lightGrey: #ccd6f6;
    --darkGrey: rgba(28, 28, 28, 0.98);
    --paradisePink: #ed3d63;
    --palatinateBlue: #223ccf;
    --midnightBlue: #161b7f;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --darkOrchid: #8d3fd0;
    --electricBlue: #06b3d7;
    --myYellow: #FFFF00;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --hamburger-width: 30px;
    --border-radius: 4px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;

  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  * {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    font-family: "Roboto";
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--midnightBlue);
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  .skip-to-content {
    ${({ theme }) => theme.mixins.button};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:focus,
    &:active {
      background-color: var(--green);
      color: var(--navy);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
    }
  }

  ${TransitionStyles};


`;
