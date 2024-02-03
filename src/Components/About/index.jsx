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
  width: 75%;
  margin: auto;
  display: grid;
  ${(props) =>
    props.theAnimation === true
      ? css`
          animation: ${zoomIn} 0.6s ease-in-out both;
        `
      : css`
          animation: ${zoomOut} 0.6s ease-in-out both;
        `}
`;

const ContainerText = styled.div``;
const Picture = styled.img`
  width: 100%;
  position: relative;
  left: -70px;
  bottom: 150px;
  border-radius: 15px;
`;
const Title = styled.h2`
  color: ${(props) =>
    props.theTheme === true ? `${colors.primary}` : `white`};
`;
const MainText = styled.p`
  color: ${(props) =>
    props.theTheme === true
      ? `${colors.paragraphColorDark}`
      : `${colors.paragraphColorWhite}`};
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 50px;
`;
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 350px;
`;

function About() {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    function handleAnimation() {
      if (window.scrollY > 1300) {
        setAnimation(false);
      } else if (window.scrollY < 1001) {
        setAnimation(true);
      }
    }
    window.addEventListener("scroll", handleAnimation);
    return () => {
      window.removeEventListener("scroll", handleAnimation);
    };
  }, []);
  const { theme } = useContext(ThemeContext);
  return (
    <Main theAnimation={animation}>
      <Container>
        <SquareShape profileSquare>
          <Picture alt="profile picture" src={picture} />
        </SquareShape>

        <ContainerText>
          <Title theTheme={theme}> ABOUT ME</Title>
          <MainText theTheme={theme}>
            Hello! I'm Kabuzi Ntwali, a passionate junior front-end developer
            with a keen interest in creating engaging and user-friendly web
            experiences. I am enthusiastic about leveraging my skills in HTML,
            CSS, and JavaScript to contribute to innovative projects and bring
            creative ideas to life.
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
