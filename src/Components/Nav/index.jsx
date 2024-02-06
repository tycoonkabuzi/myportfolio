import styled, { keyframes } from "styled-components";

import moon from "../../Assets/moon.png";
import sun from "../../Assets/sun.png";
import { useContext } from "react";
import { ThemeContext } from "../../utilities/context";
import colors from "../../utilities/style/Colors";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
import { useState } from "react";
const Name = "<Kabuzi_Ntwali/>";

const Main = styled.div`
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

  top: 50px;
  ${(props) =>
    props.scroll === true
      ? `background-color:${
          props.propTheme === true ? `${colors.secondary}` : `${colors.primary}`
        }; position: fixed; top:0; box-shadow: 1px 1px 5px #121212;`
      : null}
`;
const Logo = styled.h3`
  display: block;
  width: 500px;
  text-align: left;
  ${(props) =>
    props.propsTheme === true ? `color:${colors.primary};` : `color:white;`}
`;
const MainLinks = styled.ul`
  width: auto;
  margin: auto;
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
`;
const ThemeChanger = styled.div`
  width: 80px;
  height: 40px;
  border-radius: 40px;
  overflow: hidden;
  ${(props) =>
    props.propsTheme === true
      ? `background-color:${colors.nightColor};`
      : `background-color: ${colors.dayColor};`}
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
`;

const Sun = styled.img`
  width: 30px;
  position: absolute;
  top: 4px;
  ${(props) => (props.propsTheme === true ? `right:4px;` : `left: 40px;`)}
`;
const Moon = styled.img`
  position: absolute;
  right: -40px;
  width: 30px;
  top: 5px;
  ${(props) => (props.propsTheme === true ? `right:45px;` : `right:10px;`)}
`;
function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [scroll, setScroll] = useState(false);
  function handleCircle() {
    setTheme(!theme);
  }
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
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
    <Main propTheme={theme} scroll={scroll}>
      <Logo propsTheme={theme}>{Name}</Logo>
      <MainLinks>
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
    </Main>
  );
}
export default Nav;
