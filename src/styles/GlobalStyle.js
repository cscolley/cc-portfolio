import { createGlobalStyle } from "styled-components";

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
    --darkOrchid: #8d3fd0;
    --electricBlue: #06b3d7;
    --myYellow: #FFFF00;
    /* --myYellow: #ffcc00; */
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
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


`;
