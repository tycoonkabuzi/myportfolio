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

  @media only screen and (max-width: 600px) {
    grid-template-columns: 80% 20%;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    grid-template-columns: 80% 20%;
  }
  @media only screen and (min-width: 992px) {
    grid-template-columns: 60% 40%;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 50% 50%;
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
`;
const BigCircle = styled.div`
  border: solid 1px
    ${(props) =>
      props.propstheme === true
        ? `${colors.circleWhite}`
        : `${colors.circleDark}`};
  animation: ${Spin} ease-in-out 5s infinite running;
  border-radius: 1500px;
  position: absolute;

  @media only screen and (max-width: 600px) {
    width: 600px;
    height: 600px;
    top: 80px;
    left: -50px;
  }
  @media only screen and (min-width: 600px) {
    width: 800px;
    height: 800px;
    top: 80px;
    left: -50px;
  }
  @media only screen and (min-width: 992px) {
    width: 1500px;
    height: 1500px;
    top: -200px;
  }
  @media only screen and (min-width: 1200px) {
    width: 1200px;
    height: 1200px;
    top: -200px;
  }
`;
const SmallCircle = styled.div`
  border: solid 1px
    ${(props) =>
      props.propstheme === true
        ? `${colors.circleWhite}`
        : `${colors.circleDark}`};
  border-radius: 800px;
  position: absolute;
  top: 400px;
  animation: ${ReversSpin} ease-in-out infinite 4s running;

  @media only screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
    left: 50px;
    top: 300px;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 400px;
    height: 400px;
    left: 90px;
    top: 300px;
  }
  @media only screen and (min-width: 992px) {
    width: 500px;
    height: 500px;
    left: 200px;
  }
  @media only screen and (min-width: 1200px) {
    width: 500px;
    height: 500px;
    right: 20px;
    top: 200px;
  }
`;
const JavascriptText = styled.div`
  font-size: 44px;
  font-weight: 900;
  color: ${colors.javascriptColor};
  position: absolute;

  @media only screen and (max-width: 600px) {
    font-size: 10px;
    left: -10px;
    bottom: 40px;
    filter: none;
  }
  @media only screen and (min-width: 600px) {
    font-size: 13px;
    left: -5px;
    bottom: 80px;
    filter: none;
  }
  @media only screen and (min-width: 992px) {
    font-size: 20px;
    left: -5px;
    bottom: 80px;
    filter: blur(2px);
  }
  @media only screen and (min-width: 1200px) {
    font-size: 30px;
    bottom: 200px;
    filter: blur(3px);
    left: -90px;
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

  @media only screen and (max-width: 600px) {
    font-size: 10px;
    right: 0px;
    left: -10px;
    filter: none;
  }
  @media only screen and (min-width: 600px) {
    font-size: 15px;
    left: -25px;
    top: 200px;
    filter: none;
  }
  @media only screen and (min-width: 992px) {
    font-size: 20px;
    left: -25px;
    top: 300px;
    filter: blur(2px);
  }
  @media only screen and (min-width: 1200px) {
    font-size: 40px;
    filter: blur(3px);
    left: 400px;
    top: 50px;
  }
`;
const CssText = styled.div`
  font-weight: 900;
  color: ${colors.cssColor};
  position: absolute;
  bottom: 350px;
  left: 750px;

  @media only screen and (max-width: 600px) {
    font-size: 10px;
    left: 150px;
    bottom: 10px;
    filter: none;
  }
  @media only screen and (min-width: 600px) {
    font-size: 13px;
    left: -10px;
    top: 130px;
    filter: none;
  }
  @media only screen and (min-width: 992px) {
    font-size: 20px;
    left: -10px;
    top: 200px;
    filter: blur(2px);
  }
  @media only screen and (min-width: 1200px) {
    filter: blur(3px);
    font-size: 40px;
    bottom: 200px;
    left: 450px;
  }
`;
const HtmlText = styled.div`
  font-weight: 900;
  color: ${colors.htmlColor};
  position: absolute;

  @media only screen and (max-width: 600px) {
    font-size: 10px;
    left: 180px;
    bottom: 60px;
    filter: none;
  }
  @media only screen and (min-width: 600px) {
    font-size: 13px;
    left: 5px;
    top: 80px;
    filter: none;
  }
  @media only screen and (min-width: 992px) {
    font-size: 20px;
    left: 5px;
    top: 100px;
    filter: blur(2px);
  }
  @media only screen and (min-width: 1200px) {
    font-size: 40px;
    filter: blur(3px);
    top: -35px;
    left: 200px;
  }
`;
const ReactImage = styled.img`
  position: absolute;

  @media only screen and (max-width: 600px) {
    width: 30px;
    left: 10px;
    top: 20px;
  }

  @media only screen and (min-width: 600px) {
    width: 30px;
    left: 60px;
    top: 20px;
  }
  @media only screen and (min-width: 992px) {
    width: 60px;
    left: 80px;
    top: 10px;
  }
  @media only screen and (min-width: 1200px) {
    width: 90px;
    top: 90px;
    left: -15px;
  }
`;
const SassImage = styled.img`
  position: absolute;

  @media only screen and (max-width: 600px) {
    width: 30px;
    left: 60px;
    top: 180px;
  }
  @media only screen and (min-width: 600px) {
    width: 30px;
    left: 100px;
    top: 360px;
  }
  @media only screen and (min-width: 992px) {
    width: 60px;
    left: 120px;
    top: 440px;
  }

  @media only screen and (min-width: 1200px) {
    width: 90px;
    bottom: 40px;
    left: 170px;
  }
`;
const Avatar = styled.img`
  position: relative;
  right: -220px;
  top: 200px;
  margin: auto;

  @media only screen and (max-width: 600px) {
    width: 50px;
  }

  @media only screen and (min-width: 992px) {
    width: 300px;
    top: 300px;
    left: 250px;
  }
  @media only screen and (min-width: 1200px) {
    position: relative;
    left: 300px;
    top: 350px;
    margin: auto;
  }
`;
const Javascript = styled.img`
  position: absolute;

  @media only screen and (max-width: 600px) {
    width: 50px;
    left: 34px;
    bottom: 100px;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 70px;
    left: 54px;
    bottom: 100px;
  }
  @media only screen and (min-width: 992px) {
    width: 100px;
    top: 300px;
    left: 50px;
  }
  @media only screen and (min-width: 1200px) {
    width: 120px;
    top: 400px;
    left: -70px;
  }
`;
const Html = styled.img`
  position: absolute;

  @media only screen and (max-width: 600px) {
    width: 50px;
    left: -20px;
    bottom: 300px;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 70px;
    left: 50px;
    top: 100px;
  }
  @media only screen and (min-width: 992px) {
    width: 100px;
    top: 700px;
    left: -50px;
  }
  @media only screen and (min-width: 1200px) {
    width: 70px;
    bottom: 450px;
    left: -30px;
  }
`;
const Css = styled.img`
  position: absolute;
  bottom: 200px;
  left: 50px;

  @media only screen and (max-width: 600px) {
    width: 50px;
    left: 10px;
    bottom: 435px;
  }
  @media only screen and (min-width: 600px) {
    width: 70px;
    left: -34px;
    bottom: 335px;
  }
  @media only screen and (min-width: 992px) {
    width: 100px;
    bottom: 375px;
    left: 0px;
  }
  @media only screen and (min-width: 1200px) {
    width: 120px;
    position: absolute;
    bottom: 200px;
    left: 50px;
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
