import styled from "styled-components";
import reactImage from "../../Assets/react.png";
import sassImage from "../../Assets/sass.png";
import avatar from "../../Assets/graphic.svg";
import javascriptImage from "../../Assets/javascript.png";
import htmlImage from "../../Assets/html.png";
import cssImage from "../../Assets/css.png";
const Main = styled.div`
  width: 100%;
  height: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 40% 60%;
  position: relative;
  overflow-x: hidden;
`;
const Text = styled.div`
  width: 450px;
  margin: auto;
`;
const Graphics = styled.div`
  height: 1000px;
`;
const BigCircle = styled.div`
  border: solid 1px #373a40;
  width: 1500px;
  height: 1500px;
  border-radius: 1500px;
  position: absolute;
  top: -300px;
`;
const SmallCircle = styled.div`
  border: solid 1px #373a40;
  width: 800px;
  height: 800px;
  border-radius: 800px;
  position: absolute;
  top: 400px;
  left: 300px;
`;
const JavascriptText = styled.div`
  font-size: 44px;
  font-weight: 900;
  color: #e6b419;
  filter: blur(5px);
  position: absolute;
  bottom: 350px;
  left: -120px;
`;
const SassText = styled.div`
  font-size: 55px;
  font-weight: 900;
  color: #ae69e0;
  filter: blur(5px);
  position: absolute;
  left: 650px;
  top: 80px;
`;
const CssText = styled.div`
  font-size: 55px;
  font-weight: 900;
  color: #619ae8;
  filter: blur(5px);
  position: absolute;
  bottom: 350px;
  left: 750px;
`;
const HtmlText = styled.div`
  font-size: 55px;
  font-weight: 900;
  color: #c1590e;
  filter: blur(5px);
  position: absolute;
  bottom: -35px;
  left: 350px;
`;
const ReactImage = styled.img`
  width: 142px;
  position: absolute;
  top: 150px;
  left: -30px;
`;
const SassImage = styled.img`
  width: 142px;
  position: absolute;
  bottom: 20px;
  left: 100px;
`;
const Avatar = styled.img`
  display: block;

  width: 650px;
  margin: auto;
  margin-top: 150px;
`;
const Javascript = styled.img`
  width: 191px;
  position: absolute;
  top: 400px;
  left: -70px;
`;
const Html = styled.img`
  position: absolute;
  width: 96px;
  bottom: 635px;
  left: -50px;
`;
const Css = styled.img`
  width: 211px;
  position: absolute;
  bottom: 200px;
  left: 50px;
`;
const Line = styled.span`
  background-color: white;
`;
const Title = styled.h1`
  font-size: 35px;
`;
const Gradient = styled.span`
  background: linear-gradient(to right, #b49263, #6e2d9f);
  color: transparent;
  -webkit-background-clip: text;
`;
const Paragraph = styled.p``;
const ContactButton = styled.button`
  width: 150px;
  height: 50px;
  color: white;
  background-color: #713c98;
  border: none;
  border-radius: 30px;
  &:hover {
    background-color: #8d49bd;
    cursor: pointer;
  }
`;
function Header() {
  return (
    <Main>
      <Text>
        <Line></Line>
        <Title>
          I’m Kabuzi Ntwali, a<Gradient> Front-end</Gradient> Developper
        </Title>
        <Paragraph>
          I am one one of the best developer in this generation where we do not
          have people patinated by this job which helped us to bring the best in
          us
        </Paragraph>
        <ContactButton>Contact me</ContactButton>
      </Text>
      <Graphics>
        <BigCircle>
          <Javascript src={javascriptImage} alt=" javascript logo image" />
          <Html src={htmlImage} alt="Html logo image" />
          <Css src={cssImage} alt="css logo image" />
          <SmallCircle>
            <Avatar
              src={avatar}
              alt="man working on a computer, coding to be specific with a monitor displaying his work"
            />
            <JavascriptText>Javascript</JavascriptText>
            <SassText>Sass</SassText>
            <CssText>Css</CssText>
            <HtmlText>Html</HtmlText>
            <ReactImage
              src={reactImage}
              alt=" logo of react, the framewark react.js"
            />
            <SassImage src={sassImage} alt="logo of sass " />
          </SmallCircle>
        </BigCircle>
      </Graphics>
    </Main>
  );
}
export default Header;
