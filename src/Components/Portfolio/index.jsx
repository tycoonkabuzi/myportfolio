import styled from "styled-components";
import project1 from "../../Assets/project1.jpg";
import SquareShape from "../../utilities/style/SquareShape";
import colors from "../../utilities/style/Colors";
import { ThemeContext } from "../../utilities/context";
import { useContext } from "react";
const Main = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 150px;
`;
const Links = styled.ul`
  display: flex;
  width: 50%;
  margin: auto;
  margin-top: 50px;
  color: ${(props) =>
    props.theTheme === true
      ? ` ${colors.paragraphColorDark}`
      : `${colors.paragraphColorWhite}`};
`;
const LinkEl = styled.li`
  list-style: none;

  margin: auto;
`;
const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theTheme === true && ` ${colors.primary}`};
`;
const ProjectsText = styled.div``;
const ProjectsLayout = styled.div`
  margin-top: 100px;
  gap: 10%;
  display: grid;
  grid-template-columns: 50% 60%;
  align-items: center;
`;
const Rank = styled.h2`
  font-weight: 200;
  color: ${colors.primaryPurpuleHover};
`;
const ProjectTitle = styled.h2`
  color: ${(props) =>
    props.theTheme === true
      ? ` ${colors.paragraphColorDark}`
      : `${colors.paragraphColorWhite}`};
`;
const ProjectDescription = styled.div`
  color: ${(props) =>
    props.theTheme === true
      ? ` ${colors.paragraphColorDark}`
      : `${colors.paragraphColorWhite}`};
`;
const ProjectPicture = styled.img`
  position: relative;
  width: 400px;
  left: 20px;
  bottom: 50px;
  border-radius: 15px;
`;
function Portfolio() {
  const { theme } = useContext(ThemeContext);
  return (
    <Main>
      <Title theTheme={theme}> PORTFOLIO</Title>
      <Links theTheme={theme}>
        <LinkEl>React Projects</LinkEl>
        <LinkEl> Vanila JS Projects</LinkEl>
        <LinkEl>Adobe XD designs</LinkEl>
      </Links>

      <ProjectsLayout>
        <ProjectsText>
          <Rank> PROJECT 1</Rank>
          <ProjectTitle theTheme={theme}> Toni Market</ProjectTitle>
          <ProjectDescription theTheme={theme}>
            It seems like there is a small issue in your styled components
            related to passing the theme prop. In your ContainerText and
            MainText styled components, you are trying to use the theTheme prop,
            but you haven't passed it to these components.
          </ProjectDescription>
        </ProjectsText>
        <SquareShape projectSquare>
          <ProjectPicture alt="Toni market project Image" src={project1} />
        </SquareShape>
      </ProjectsLayout>
    </Main>
  );
}
export default Portfolio;
