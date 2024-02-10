import styled, { css, keyframes } from "styled-components";
import colors from "../../utilities/style/Colors";
import picture from "../../Assets/picature.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../utilities/context";
import Buttons from "../../utilities/style/Buttons";
import SquareShape from "../../utilities/style/SquareShape";
import { useState } from "react";
import { useEffect } from "react";

const zoomIn = keyframes`
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
`;

const zoomOut = keyframes`
  from{
     transform: scale(1);
  }
  to{
    transform: scale(0);
   
  }
`;
const Main = styled.div`
  padding-top: 120px;
  width: 75%;
  margin: auto;
  display: grid;
`;

const ContainerText = styled.div`
  @media only screen and (max-width: 600px) {
    order: 1;
  }
`;
const Picture = styled.img`
  width: 100%;
  position: relative;
  left: -70px;
  bottom: 150px;
  border-radius: 15px;
  @media only screen and (max-width: 600px) {
    left: -20px;
    bottom: 40px;
  }
`;
const Title = styled.h2`
  color: ${(props) =>
    props.theTheme === true ? `${colors.primary}` : `white`};
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;
const MainText = styled.p`
  color: gray;
  color: ${(props) =>
    props.theTheme === true
      ? `${colors.paragraphColorDark}`
      : `${colors.paragraphColorWhite}`};
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 50px;
  ${(props) =>
    props.theAnimation === true
      ? css`
          animation: ${zoomIn} 0.6s ease-in-out both;
        `
      : css`
          animation: ${zoomOut} 0.6s ease-in-out both;
        `}
  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 350px;
`;
const ColorFullText = styled.span`
  color: red;
`;
function About() {
  const [animation, setAnimation] = useState(false);
  const [textAbout, setTextAbout] = useState(
    "Hello! I'm Kabuzi Ntwali, a passionate junior front-end developer with a keen interest in creating engaging and user-friendly web experiences. I am enthusiastic about leveraging my skills in HTML,CSS, and JavaScript to contribute to innovative projects and bring creative ideas to life."
  );
  const [newText, setNewText] = useState("");
  function handleTextReplace(theText) {
    if (animation === true) {
      const theNewText = theText.slice(0, 3);
      let replaced = theText.replace(theNewText, "");
      setNewText(theNewText);
      setTextAbout(replaced);
    } else {
    }
  }
  useEffect(() => {
    function handleAnimation() {
      if (window.scrollY > 1) {
        setAnimation(true);
      } else if (window.scrollY < 1200) {
        setAnimation(false);
      }
    }
    window.addEventListener(
      "scroll",
      handleAnimation,
      handleTextReplace(textAbout)
    );
    return () => {
      window.removeEventListener("scroll", handleAnimation);
    };
  }, []);
  const { theme } = useContext(ThemeContext);
  return (
    <Main id="about">
      <Container theAnimation={animation}>
        <SquareShape profileSquare>
          <Picture alt="profile picture" src={picture} />
        </SquareShape>

        <ContainerText>
          <Title theTheme={theme}> ABOUT ME</Title>
          <MainText theTheme={theme}>
            <ColorFullText>{newText}</ColorFullText> {textAbout}
          </MainText>
          <ButtonContainer>
            <Buttons theAnimation={!animation} gradient theTheme={theme}>
              Hire me
            </Buttons>
            <Buttons theAnimation={!animation} secondary theTheme={theme}>
              Resume
            </Buttons>
          </ButtonContainer>
        </ContainerText>
      </Container>
    </Main>
  );
}
export default About;
