import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { css } from "styled-components";
import { navLinks } from "../config";
import { loaderDelay } from "../utils";
import useScrollDirection from "../hooks/useScrollDirection";
import Menu from "./menu";
import Logo from "./icons/Logo";
import "@fontsource/gloria-hallelujah";
import "@fontsource/roboto";

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  /* background-color: rgba(10, 25, 47, 0.85); */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  ${(props) =>
    props.scrollDirection === "up" &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(0px);
      /* background-color: rgba(10, 25, 47, 0.85); */
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `};

  ${(props) =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `};
  }

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightGrey);
  font-family: "Roboto";
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};
    font-size: 0.7em;

    a {
      text-decoration: none;
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      font-size: 20px;

      a {
        padding: 10px;
        margin-right: 5px;
        color: var(--lightGrey);
        font-size: 20px;
        text-align: right;
        text-decoration: none;
      }
    }
  }
`;

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? "fade" : "";
  const fadeDownClass = isHome ? "fadedown" : "";

  const LogoLink = (
    <div className="logo" tabIndex="-1">
      {isHome ? (
        <a href="/" aria-label="home">
          <Logo />
        </a>
      ) : (
        <Link to="/" aria-label="home">
          <Logo />
        </Link>
      )}
    </div>
  );

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <>{LogoLink}</>
            </CSSTransition>
          )}
        </TransitionGroup>

        <StyledLinks>
          <ol>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition
                    key={i}
                    classNames={fadeDownClass}
                    timeout={timeout}
                  >
                    <li
                      key={i}
                      style={{
                        transitionDelay: `${isHome ? i * 100 : 0}ms`,
                      }}
                    >
                      <Link to={url}>{name}</Link>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>
        </StyledLinks>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <Menu />
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;