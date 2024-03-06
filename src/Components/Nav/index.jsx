import styled, { css, keyframes } from "styled-components";

import moon from "../../Assets/moon.png";
import sun from "../../Assets/sun.png";
import { useContext } from "react";
import { ThemeContext } from "../../utilities/context";
import colors from "../../utilities/style/Colors";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
import { useState } from "react";
const Name = "<Kabuzi_Ntwali/>";
const zoomIn = keyframes`
  from{
    transform: scale(0);
    border-radius:10000vh;
  }
  to{
    transform: scale(1);
    border-radius: 0px;
  }
`;

const zoomOut = keyframes`
  from{
     transform: scale(1);
     
  }
  to{
    transform: scale(0);
      border-radius:10000vh;
   
  }`;
const Main = styled.div`
  top: 50px;
  color: white;
  height: 60px;
  position: absolute;
  width: 100%;
  z-index: 1;
  display: grid;
  grid-template-columns: 50% 30% 20%;
  justify-content: center;
  justify-items: center;
  align-items: center;

  ${(props) =>
    props.theScroll === true
      ? `background-color:${
          props.propTheme === true ? `${colors.secondary}` : `${colors.primary}`
        }; position: fixed; width:100%; top:0; box-shadow: 1px 1px 5px #121212;`
      : null}
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    grid-template-columns: 50% 20% 20%;
    gap: 40px;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    grid-template-columns: 50% 20% 20%;
    gap: 40px;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    grid-template-columns: 50% 20% 20%;
    gap: 40px;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 50% 20% 30%;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 40px;
  }
`;
const Logo = styled.h3`
  display: block;
  width: 500px;
  text-align: left;
  ${(props) =>
    props.propsTheme === true ? `color:${colors.primary};` : `color:white;`}
  @media only screen and (max-width: 600px) {
    width: 100px;
    z-index: 2;
    color: ${(props) =>
      props.propsTheme === true && props.isActive === false
        ? `${colors.secondary} `
        : `${
            props.isActive === true && props.propsTheme === false
              ? `${colors.primary}`
              : `${colors.secondary}`
          }`};
    margin-left: 20px;
  }
  @media only screen and (min-width: 600px) {
    width: 300px;
    margin-left: 100px;
    z-index: 2;
    color: ${(props) =>
      props.propsTheme === true && props.isActive === false
        ? `${colors.secondary} `
        : `${
            props.isActive === true && props.propsTheme === false
              ? `${colors.primary}`
              : `${colors.secondary}`
          }`};
  }
  @media only screen and (min-width: 768px) {
    width: 200px;
    margin-left: 0;
    z-index: 2;
    color: ${(props) =>
      props.propsTheme === true && props.isActive === false
        ? `${colors.secondary} `
        : `${
            props.isActive === true && props.propsTheme === false
              ? `${colors.primary}`
              : `${colors.secondary}`
          }`};
  }
  @media only screen and (min-width: 992px) {
    margin-left: -100px;
  }
  @media only screen and (min-width: 1200px) {
    display: block;
    width: 250px;

    text-align: left;
    ${(props) =>
      props.propsTheme === true ? `color:${colors.primary};` : `color:white;`}
  }
`;

const MainLinks = styled.ul`
  width: auto;
  margin: auto;
  @media only screen and (max-width: 600px) {
    width: 100%; /* Change this to 100% */
    position: fixed; /* You might want to change this according to your layout */
    z-index: 1;
    height: 100vh;
    padding-bottom: 200px;
    padding-top: 100px;
    margin-top: 0;
    animation: ${(props) =>
      props.isActive === true
        ? css`
            ${zoomIn} 0.3s ease-in both
          `
        : css`
            ${props.isActive === false &&
            css`
              ${zoomIn} 0.3s ease-in both
            `}
          `};

    top: 0; /* Adjust according to your layout */
    left: 0; /* Adjust according to your layout */
    ${(props) =>
      props.isActive === true
        ? `display: block; background-color: ${colors.primary};`
        : `display:none;background-color: ${colors.secondary}`}

    ${(props) =>
      props.propTheme === false
        ? ` background-color: ${colors.secondary};`
        : `background-color: ${colors.primary}`}
  }

  @media only screen and (min-width: 600px) {
    width: 100%; /* Change this to 100% */
    position: fixed; /* You might want to change this according to your layout */
    z-index: 1;
    padding-bottom: 200px;
    padding-top: 100px;
    margin-top: 0;
    animation: ${(props) =>
      props.isActive === true
        ? css`
            ${zoomIn} 0.3s ease-in both
          `
        : css`
            ${props.isActive === false &&
            css`
              ${zoomIn} 0.3s ease-in both
            `}
          `};

    top: 0; /* Adjust according to your layout */
    left: 0; /* Adjust according to your layout */
    ${(props) =>
      props.isActive === true
        ? `display: block; background-color: ${colors.primary};`
        : `display:none;background-color: ${colors.secondary}`}

    ${(props) =>
      props.propTheme === false
        ? ` background-color: ${colors.secondary};`
        : `background-color: ${colors.primary}`}
  }
  @media only screen and (min-width: 1200px) {
    width: auto;
    margin: auto;
    display: block;
    padding-bottom: 0;
    padding-top: 0;
    position: static;
    z-index: 1;
  }
`;
const Links = styled(Link)`
  display: inline;
  margin-left: 50px;
  text-decoration: none;
  color: ${(props) =>
    props.propsTheme === true
      ? ` ${colors.paragraphColorDark}`
      : ` ${colors.paragraphColorWhite}`};
  &:hover {
    color: ${colors.primaryPurpuleHover};
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    display: block;
    padding-top: 50px;
    font-size: 40px;
    font-weight: 200;
    color: ${(props) =>
      props.propsTheme === true
        ? ` ${colors.paragraphColorWhite}`
        : ` ${colors.paragraphColorDark}`};
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    display: block;
    padding-top: 50px;
    font-size: 40px;
    font-weight: 200;
    color: ${(props) =>
      props.propsTheme === true
        ? ` ${colors.paragraphColorWhite}`
        : ` ${colors.paragraphColorDark}`};
  }
  @media only screen and (min-width: 1200px) {
    font-weight: 400;
    font-size: 15px;
    display: inline;
    text-decoration: none;
    margin-left: 50px;

    color: ${(props) =>
      props.propsTheme === true
        ? ` ${colors.paragraphColorDark}`
        : ` ${colors.paragraphColorWhite}`};
  }
`;
const ThemeChanger = styled.div`
  width: 80px;
  height: 40px;
  border-radius: 40px;
  overflow: hidden;
  grid-column: 2;
  ${(props) =>
    props.propsTheme === true
      ? `background-color:${colors.nightColor};`
      : `background-color: ${colors.dayColor};`}

  @media only screen and (max-width: 600px) {
    position: inherit;
    width: 40px;
    height: 40px;
    z-index: 2;
    grid-column: 2;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    position: inherit;
    width: 40px;
    height: 40px;
    z-index: 2;
    grid-column: 2;
  }
  @media only screen and (min-width: 768px) {
    position: absolute;
    position: inherit;
    width: 40px;
    height: 40px;
    z-index: 2;
    grid-column: 2;
  }
  @media only screen and (min-width: 1200px) {
    width: 80px;
    height: 40px;
    border-radius: 40px;
    position: static;
    overflow: hidden;
    grid-column: 3;
    ${(props) =>
      props.propsTheme === true
        ? `background-color:${colors.nightColor};`
        : `background-color: ${colors.dayColor};`}
  }
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  position: relative;
  transition: transform 0.3s ease-in-out;
  box-shadow: 1px 10px 17px black;

  ${(props) =>
    props.propsTheme === true
      ? `transform: translatex(40px);background-color: ${colors.dayColor}; `
      : `background-color: ${colors.nightColor};`}

  @media only screen and (max-width: 600px) {
    ${(props) =>
      props.propsTheme === true
        ? `transform: translatex(0);background-color: ${colors.dayColor}; `
        : `background-color: ${colors.nightColor};`}
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    ${(props) =>
      props.propsTheme === true
        ? `transform: translatex(0);background-color: ${colors.dayColor}; `
        : `background-color: ${colors.nightColor};`}
  }
  @media only screen and (min-width: 1200px) {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    position: relative;
    transition: transform 0.3s ease-in-out;
    box-shadow: 1px 10px 17px black;

    ${(props) =>
      props.propsTheme === true
        ? `transform: translatex(40px);background-color: ${colors.dayColor}; `
        : `background-color: ${colors.nightColor};`}
  }
`;

const Sun = styled.img`
  width: 30px;
  position: absolute;
  top: 5px;
  ${(props) => (props.propsTheme === true ? `right:4px;` : `left: 40px;`)}
  @media only screen and (max-width: 600px) {
    left: 5px;
    ${(props) => (props.propsTheme === true ? `right:0;` : `left: -40px;`)};
  }
  @media only screen and (min-width: 600px) {
    left: 5px;
    ${(props) => (props.propsTheme === true ? `right:0;` : `left: -40px;`)};
  }
  @media only screen and (min-width: 1200px) {
    width: 30px;
    position: absolute;
    top: 5px;
    ${(props) => (props.propsTheme === true ? `right:4px;` : `left: 40px;`)}
  }
`;

const Moon = styled.img`
  position: absolute;
  right: -40px;
  width: 30px;
  top: 5px;
  ${(props) => (props.propsTheme === true ? `right:45px;` : `right:10px;`)}
  @media only screen and (max-width: 600px) {
    right: 5px;
    ${(props) => (props.propsTheme === true ? `right:-40px;` : `left: 5px;`)};
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    right: 5px;
    ${(props) => (props.propsTheme === true ? `right:-40px;` : `left: 5px;`)};
  }
  @media only screen and (min-width: 1200px) {
    position: absolute;
    right: -40px;
    width: 30px;
    top: 5px;
    ${(props) => (props.propsTheme === true ? `right:45px;` : `right:10px;`)}
  }
`;

const HamburgerMenu = styled.div`
  height: 50px;
  overflow: hidden;
  display: none;
  margin-top: 14px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    display: block;
    z-index: 1;
    grid-column: 3;
    margin-right: 40px;
  }
  @media only screen and (min-width: 600px) {
    display: block;
    z-index: 1;
    grid-column: 3;
  }
  @media only screen and (min-width: 1200px) {
    display: none;
    grid-column: 0;
  }
`;
const Line = styled.span`
  transition: 2s ease-in both;
  display: block;
  width: 30px;
  height: 2px;
  margin-bottom: 10px;
  background-color: ${(props) =>
    props.propsTheme === true && props.isActive === false
      ? `${colors.primary} `
      : `${
          props.isActive === true && props.propsTheme === false
            ? `${colors.primary}`
            : `${colors.secondary}`
        }`};
  transition: all 5s ease-in-out both;
  ${(props) =>
    props.firstLine &&
    ` ${
      props.isActive === true &&
      `transform: rotate(40deg); margin-top:13px; margin-right:0px;`
    }`}
  ${(props) =>
    props.secondLine &&
    `${props.isActive === true && ` display:none; padding-top:20px; `}  `}
  ${(props) =>
    props.thirdLine &&
    `  width: 20px; float:right; ${
      props.isActive === true &&
      `transform:rotate(-40deg); margin-left:0px; margin-top:-13px; width: 40px;  `
    } `}
`;

function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [scroll, setScroll] = useState(false);
  const [activate, setActivate] = useState(false);

  function handleHamburgerMenu() {
    setActivate(!activate);
  }
  function handleCircle() {
    setTheme(!theme);
  }
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return (
    <Main propTheme={theme} theScroll={scroll}>
      <Logo propsTheme={theme}>{Name}</Logo>

      <MainLinks isActive={activate} propTheme={theme}>
        <Links propsTheme={theme} to="#home">
          Home
        </Links>
        <Links propsTheme={theme} to="#about">
          About
        </Links>
        <Links propsTheme={theme} to="#portfolio">
          Portfolio
        </Links>
        <Links propsTheme={theme} to="#experience">
          Experience
        </Links>
      </MainLinks>
      <ThemeChanger onClick={handleCircle} propsTheme={theme}>
        <Circle propsTheme={theme}>
          <Sun propsTheme={theme} src={sun} alt=" small icon of the sun" />
          <Moon propsTheme={theme} src={moon} alt="small icon of the moon" />
        </Circle>
      </ThemeChanger>
      <HamburgerMenu onClick={handleHamburgerMenu}>
        <Line propsTheme={theme} isActive={activate} firstLine />
        <Line propsTheme={theme} isActive={activate} secondLine />
        <Line propsTheme={theme} isActive={activate} thirdLine />
      </HamburgerMenu>
    </Main>
  );
}
export default Nav;
