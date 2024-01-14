import styled from "styled-components";
import colors from "../../utilities/style/Colors";
import picture from "../../Assets/picature.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../utilities/context";
import Buttons from "../../utilities/style/Buttons";
import SquareShape from "../../utilities/style/SquareShape";
const Main = styled.div`
  width: 75%;
  margin: auto;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 50px;
`;

const ContainerText = styled.div``;
const Picture = styled.img`
  width: 26%;
  position: absolute;
  left: 120px;
  bottom: -720px;
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

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <Main>
      <SquareShape profileSquare>
        <Picture alt="profile picture" src={picture} />
      </SquareShape>

      <ContainerText>
        <Title theTheme={theme}> ABOUT ME</Title>
        <MainText theTheme={theme}>
          Hello! I'm Kabuzi Ntwali, a passionate junior front-end developer with
          a keen interest in creating engaging and user-friendly web
          experiences. I am enthusiastic about leveraging my skills in HTML,
          CSS, and JavaScript to contribute to innovative projects and bring
          creative ideas to life.
        </MainText>
        <Buttons gradient>Hire me</Buttons>
        <Buttons secondary theTheme={theme}>
          Resume
        </Buttons>
      </ContainerText>
    </Main>
  );
}
export default About;
