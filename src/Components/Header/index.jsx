import { useContext } from "react";
import { ThemeContext } from "../../utilities/context";
import styled from "styled-components";
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
const Main = styled.div`
  width: 100%;
  transition: background-color 0.3s ease-in-out;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
  position: relative;
  overflow-x: hidden;
  justify-content: space-around;
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 47% 53%;
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 40% 60%;
    height: 1000px;
  }
`;
const Text = styled.div`
  width: 75%;
  margin: auto;
`;
const Graphics = styled.div`
  height: 1000px;
  @media only screen and (min-width: 1200px) {
  }
`;
const BigCircle = styled.div`
  border: solid 1px
    ${(props) => (props.propsTheme === true ? `#dadada` : `#373a40`)};
  border-radius: 1500px;
  position: absolute;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
    height: 1200px;
    top: -200px;
    left: 700px;
  }
  @media only screen and (max-width: 1200px) {
    width: 1500px;
    height: 1500px;
    top: -300px;
  }
`;
const SmallCircle = styled.div`
  border: solid 1px
    ${(props) => (props.propstheme === true ? `#dadada` : `#373a40`)};
  border-radius: 800px;
  position: absolute;
  top: 400px;
  @media only screen and (min-width: 1200px) {
    width: 500px;
    height: 500px;
    left: 230px;
  }
  @media only screen and (max-width: 1200px) {
    width: 800px;
    height: 800px;

    left: 300px;
  }
`;
const JavascriptText = styled.div`
  font-size: 44px;
  font-weight: 900;
  color: #e6b419;

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
`;
const SassText = styled.div`
  font-size: 55px;
  font-weight: 900;
  color: #ae69e0;
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
`;
const CssText = styled.div`
  font-weight: 900;
  color: #619ae8;

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
`;
const HtmlText = styled.div`
  font-weight: 900;
  color: #c1590e;
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
`;
const Avatar = styled.img`
  display: block;
  margin: auto;

  @media only screen and (min-width: 1200px) {
    width: 450px;
    margin-top: 90px;
  }
  @media only screen and (max-width: 1200px) {
    width: 650px;
    margin-top: 150px;
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
`;
const Line = styled.span`
  display: block;
  transition: background-color 0.3s ease-in-out;
  background-color: ${(props) =>
    props.propstheme === true ? `#1f252f` : `white`};
  width: 100px;
  height: 2px;
`;
const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => (props.propstheme === true ? ` #1f252f` : `white`)};
`;
const Gradient = styled.span`
  background: linear-gradient(to right, #b49263, #6e2d9f);
  color: transparent;
  -webkit-background-clip: text;
`;
const Paragraph = styled.p`
  color: #8c8c8c;
`;
const ContactButton = styled.button`
  width: 150px;
  height: 50px;
  color: ${(props) => (props.propstheme === true ? `#ffffff` : ``)};
  background-color: #713c98;
  border: none;
  border-radius: 20px;
  margin-top: 20px;
  &:hover {
    background-color: #8d49bd;
    cursor: pointer;
  }
`;
function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <Main propstheme={theme}>
      <Text>
        <Line propstheme={theme}></Line>
        <Title propstheme={theme}>
          I’m Kabuzi Ntwali, a<Gradient> Front-end</Gradient> Developper
        </Title>
        <Paragraph>
          I am one one of the best developer in this generation where we do not
          have people patinated by this job which helped us to bring the best in
          us
        </Paragraph>
        <ContactButton propstheme>Contact me</ContactButton>
      </Text>
      <Graphics>
        <BigCircle propstheme={theme}>
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
          <SmallCircle propsTheme={theme}>
            <Avatar
              src={theme ? avatarWhite : avatar}
              alt="man working on a computer, coding to be specific with a monitor displaying his work"
            />
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
        </BigCircle>
      </Graphics>
    </Main>
  );
}
export default Header;
