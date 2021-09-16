import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactAnime from "react-animejs";
import "@fontsource/gloria-hallelujah";
import "@fontsource/roboto";
import SearchIcon from "../images/search-solid.svg";

const AnimateDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoSpan = styled.span`
  font-family: "Digital7Mono";
  font-weight: 900;
  color: var(--white);
  font-size: 4em;
`;

const DomainSpan = styled.span`
  font-family: "Gloria Hallelujah", cursive;
  font-style: italic;
  color: var(--white);
  font-size: 3em;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Roboto";
  background-color: var(--white);
  border-radius: 20px;
  height: 40px;
  width: 300px;
`;

const ImgWrapper = styled.div`
  height: 50%;
  margin-left: 15px;
  margin-right: 15px;
  opacity: 0.7;
`;

const { Anime, stagger } = ReactAnime;

const AnimLogoSpan = ({ children }) => {
  const animation = [
    {
      targets: ".atomic",
      color: "#ffcc00",
      easing: "easeInOutSine",
      delay: stagger(50),
    },
  ];

  return (
    <Anime
      type="span"
      explode="characters"
      explodeOptions={{ name: "atomic" }}
      id="self1"
      _onUpdate={animation}
    >
      {children}
    </Anime>
  );
};

const AnimDomainSpan = ({ children }) => {
  const animation = [
    {
      targets: ".atomic",
      color: "#ffcc00",
      easing: "easeInOutSine",
      delay: stagger(50),
    },
  ];

  return (
    <Anime
      type="span"
      explode="characters"
      explodeOptions={{ name: "atomic" }}
      id="self2"
      _onUpdate={animation}
    >
      {children}
    </Anime>
  );
};

const InteractiveDemo = () => {
  const myLogoText = "<cc/>";
  const myDomainText = "chriscolley.com.au";

  const [logoText, setLogoText] = useState("");
  const [domainText, setDomainText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delayedText = (i, myText) => {
      if (i < myText.length) {
        if (i < myLogoText.length) {
          setLogoText((t) => t + myText[i]);
        } else {
          setDomainText((t) => t + myText[i]);
        }
        setTimeout(() => {
          delayedText(++i, myText);
        }, 50);
      } else return;
    };

    if (loading) {
      delayedText(0, myLogoText + " " + myDomainText);
      setLoading(false);
    }
  });

  return (
    <div>
      <>
        <InputWrapper>
          <InputDiv>
            <ImgWrapper>
              <img src={SearchIcon} alt="Search Icon" height="100%" />
            </ImgWrapper>
            <span>{logoText}</span>&nbsp;
            <span>{domainText}</span>
          </InputDiv>
        </InputWrapper>
        <AnimateDiv>
          <LogoSpan>
            <AnimLogoSpan>{logoText}</AnimLogoSpan>
          </LogoSpan>
          <DomainSpan>
            <AnimDomainSpan>{domainText}</AnimDomainSpan>
          </DomainSpan>
        </AnimateDiv>
      </>
    </div>
  );
};

const Loader = () => {
  return (
    <>
      <InteractiveDemo />
    </>
  );
};

export default Loader;
