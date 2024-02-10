import { useContext } from "react";
import { ThemeContext } from "../../utilities/context";
import styled, { css, keyframes } from "styled-components";
import reactImage from "../../Assets/react.png";
import sassImage from "../../Assets/sass.png";
import avatar from "../../Assets/graphic.svg";
import javascriptImage from "../../Assets/javascript.png";
import htmlImage from "../../Assets/html.png";
import cssImage from "../../Assets/css.png";
import cssBlack from "../../Assets/cssblack.png";
import htmlBlack from "../../Assets/htmlblack.png";
import javascriptBlack from "../../Assets/jsblack.png";
import reactColor from "../../Assets/reactColor.png";
import sassColor from "../../Assets/sassColor.png";
import avatarWhite from "../../Assets/graphicWhite.svg";
import colors from "../../utilities/style/Colors";
import Buttons from "../../utilities/style/Buttons";
import { useEffect } from "react";
import { useState } from "react";
const fromRight = keyframes`
from{
 transform: translateX(0);
 

}
to{
  transform: translateX(700px) rotate(-12deg);
  

}`;
const reversedRight = keyframes`
from{

 transform: translateX(700px) rotate(-12deg);
 
}
to{
   transform: translateX(0);
  

}`;
const fromLeft = keyframes`
from{
  transform: translateX(0);
  
}
to{
transform: translateX(-700px) rotate(12deg);
}`;
const reversedLeft = keyframes`
from{
 
  transform: translateX(-700px) rotate(12deg);
}
to{

 transform: translateX(0);
}`;
const Spin = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
     transform: rotate(360deg);

  }
  
`;

const ReversSpin = keyframes`
  0%{
    transform: rotate(360deg);
  }
  100%{
     transform: rotate(0);
  }`;
const Main = styled.div`
  width: 90%;
  transition: background-color 0.3s ease-in-out;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
  position: relative;
  overflow: hidden;
  padding-bottom: 20px;
  justify-content: space-around;

  @media only screen and (min-width: 1200px) {
    grid-template-columns: 47% 53%;
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 40% 60%;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 80% 20%;
  }
`;
const Text = styled.div`
  width: 75%;
  margin: auto;
  ${(props) =>
    props.animate === true
      ? css`
          animation: ${fromLeft} 0.6s ease-in-out forwards;
        `
      : css`
          animation: ${reversedLeft} 0.6s ease-in-out forwards;
        `}
`;
const Graphics = styled.div`
  height: 1000px;
  ${(props) =>
    props.animate === true
      ? css`
          animation: ${fromRight} 0.6s ease-in-out forwards;
        `
      : css`
          animation: ${reversedRight} 0.6s ease-in-out forwards;
        `}
  @media only screen and (min-width: 1200px) {
  }
`;
const BigCircle = styled.div`
  border: solid 3px
    ${(props) =>
      props.propstheme === true
        ? `${colors.circleWhite}`
        : `${colors.circleDark}`};
  animation: ${Spin} ease-in-out 5s infinite running;
  border-radius: 1500px;
  position: absolute;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
    height: 1200px;
    top: -200px;
  }
  @media only screen and (max-width: 1200px) {
    width: 1500px;
    height: 1500px;
    top: -300px;
  }
  @media only screen and (max-width: 600px) {
    width: 600px;
    height: 600px;
    top: 80px;
    left: -50px;
  }
`;
const SmallCircle = styled.div`
  border: solid 3px
    ${(props) =>
      props.propstheme === true
        ? `${colors.circleWhite}`
        : `${colors.circleDark}`};
  border-radius: 800px;
  position: absolute;
  top: 400px;
  animation: ${ReversSpin} ease-in-out infinite 4s running;
  @media only screen and (min-width: 1200px) {
    width: 500px;
    height: 500px;
    right: 20px;
    top: 200px;
  }
  @media only screen and (max-width: 1200px) {
    width: 800px;
    height: 800px;
    left: 300px;
  }

  @media only screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
    left: 50px;
    top: 300px;
  }
`;
const JavascriptText = styled.div`
  font-size: 44px;
  font-weight: 900;
  color: ${colors.javascriptColor};
  position: absolute;

  left: -120px;
  @media only screen and (min-width: 1200px) {
    font-size: 30px;
    bottom: 200px;
    filter: blur(3px);
  }
  @media only screen and (max-width: 1200px) {
    filter: blur(5px);
    font-size: 44px;
    bottom: 350px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 10px;
    left: -10px;
    bottom: 40px;
    filter: none;
  }
`;
const SassText = styled.div`
  font-size: 55px;
  font-weight: 900;
  color: ${colors.primaryPurpule};
  filter: blur(5px);
  position: absolute;
  left: 650px;
  top: 80px;
  @media only screen and (min-width: 1200px) {
    font-size: 40px;
    filter: blur(3px);
    left: 400px;
    top: 50px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 55px;
    filter: blur(5px);
    left: 650px;
    top: 80px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 10px;
    right: 0px;
    left: -10px;
    filter: none;
  }
`;
const CssText = styled.div`
  font-weight: 900;
  color: ${colors.cssColor};

  position: absolute;
  bottom: 350px;
  left: 750px;
  @media only screen and (min-width: 1200px) {
    filter: blur(3px);
    font-size: 40px;
    bottom: 200px;
    left: 450px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 55px;
    filter: blur(5px);
    bottom: 350px;
    left: 750px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 10px;
    left: 150px;
    bottom: 10px;
    filter: none;
  }
`;
const HtmlText = styled.div`
  font-weight: 900;
  color: ${colors.htmlColor};
  position: absolute;

  @media only screen and (min-width: 1200px) {
    font-size: 40px;
    filter: blur(3px);
    bottom: -34px;
    left: 200px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 55px;
    filter: blur(5px);
    bottom: -35px;
    left: 350px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 10px;
    left: 180px;
    bottom: 60px;
    filter: none;
  }
`;
const ReactImage = styled.img`
  position: absolute;
  @media only screen and (min-width: 1200px) {
    width: 90px;
    top: 90px;
    left: -15px;
  }
  @media only screen and (max-width: 1200px) {
    width: 142px;
    top: 150px;
    left: -30px;
  }
  @media only screen and (max-width: 600px) {
    width: 30px;
    left: 10px;
    top: 20px;
  }
`;
const SassImage = styled.img`
  position: absolute;

  @media only screen and (min-width: 1200px) {
    width: 90px;
    bottom: 50px;
    left: 30px;
  }
  @media only screen and (max-width: 1200px) {
    width: 142px;
    bottom: 20px;
    left: 100px;
  }
  @media only screen and (max-width: 600px) {
    width: 30px;
    left: 60px;
    top: 180px;
  }
`;
const Avatar = styled.img`
  position: relative;
  right: -220px;
  top: 200px;
  margin: auto;

  @media only screen and (min-width: 1200px) {
    width: 420px;
    margin-top: 90px;
  }
  @media only screen and (max-width: 1200px) {
    width: 630px;
    margin-top: 150px;
  }
  @media only screen and (max-width: 600px) {
    width: 50px;
  }
`;
const Javascript = styled.img`
  position: absolute;
  top: 400px;
  left: -70px;
  @media only screen and (min-width: 1200px) {
    width: 120px;
  }
  @media only screen and (max-width: 1200px) {
    width: 191px;
  }
  @media only screen and (max-width: 600px) {
    width: 50px;
    left: 10px;
    bottom: 0px;
  }
`;
const Html = styled.img`
  position: absolute;

  @media only screen and (min-width: 1200px) {
    width: 70px;
    bottom: 500px;
    left: -30px;
  }
  @media only screen and (max-width: 1200px) {
    width: 96px;
    bottom: 635px;
    left: -50px;
  }
  @media only screen and (max-width: 600px) {
    width: 50px;
    left: -20px;
    bottom: 300px;
  }
`;
const Css = styled.img`
  position: absolute;
  bottom: 200px;
  left: 50px;
  @media only screen and (min-width: 1200px) {
    width: 120px;
  }
  @media only screen and (max-width: 1200px) {
    width: 211px;
  }
  @media only screen and (max-width: 600px) {
    width: 50px;
    left: 10px;
    bottom: 435px;
  }
`;
const Line = styled.span`
  display: block;
  transition: background-color 0.3s ease-in-out;
  background-color: ${(props) =>
    props.propstheme === true ? `${colors.primary}` : `${colors.secondary}`};
  width: 100px;
  height: 2px;
`;
const Title = styled.h1`
  font-size: 40px;
  color: ${(props) =>
    props.propstheme === true ? ` ${colors.primary}` : `${colors.secondary}`};
`;
const Gradient = styled.span`
  background: ${colors.gradient};
  color: transparent;
  -webkit-background-clip: text;
`;
const Paragraph = styled.p`
  color: ${(props) =>
    props.propsTheme === true
      ? `${colors.paragraphColorDark}`
      : `${colors.paragraphColorWhite}`};
`;
function Header() {
  const { theme } = useContext(ThemeContext);
  const [animate, setAnimation] = useState();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setAnimation(true);
      } else {
        setAnimation(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Main propstheme={theme} id="home">
      <Text animate={animate}>
        <Line propstheme={theme}></Line>
        <Title propstheme={theme}>
          I’m Kabuzi Ntwali, a<Gradient> Front-end</Gradient> Developper
        </Title>
        <Paragraph propsTheme={theme}>
          A passionate Front-End Developer with expertise in crafting engaging
          and responsive user interfaces. I specialize in the powerful trio of
          HTML, CSS, and JavaScript also using React.js, to bring ideas to life
          on the web.
        </Paragraph>
        <Buttons to="#contact" primary theAnimation={animate}>
          Contact me
        </Buttons>
      </Text>
      <Graphics animate={animate}>
        <BigCircle propsTheme={theme}>
          <Javascript
            src={theme === true ? javascriptBlack : javascriptImage}
            alt=" javascript logo image"
          />
          <Html
            src={theme === true ? htmlBlack : htmlImage}
            alt="Html logo image"
          />
          <Css
            src={theme === true ? cssBlack : cssImage}
            alt="css logo image"
          />
        </BigCircle>
        <SmallCircle propsTheme={theme}>
          <JavascriptText>Javascript</JavascriptText>
          <SassText>Sass</SassText>
          <CssText>Css</CssText>
          <HtmlText>Html</HtmlText>
          <ReactImage
            src={theme === true ? reactColor : reactImage}
            alt=" logo of react, the framewark react.js"
          />
          <SassImage
            src={theme === true ? sassColor : sassImage}
            alt="logo of sass "
          />
        </SmallCircle>
        <Avatar
          src={theme ? avatarWhite : avatar}
          alt="man working on a computer, coding to be specific with a monitor displaying his work"
        />
      </Graphics>
    </Main>
  );
}
export default Header;
