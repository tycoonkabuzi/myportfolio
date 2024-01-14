import styled from "styled-components";
import project1 from "../../Assets/project1.jpg";
import SquareShape from "../../utilities/style/SquareShape";
import colors from "../../utilities/style/Colors";
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
`;
const LinkEl = styled.li`
  list-style: none;

  margin: auto;
`;
const Title = styled.h2`
  text-align: center;
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
const ProjectTitle = styled.h2``;
const ProjectDescription = styled.div``;
const ProjectPicture = styled.img`
  position: relative;
  width: 400px;
  left: 20px;
  bottom: 50px;
`;
function Portfolio() {
  return (
    <Main>
      <Title> PORTFOLIO</Title>
      <Links>
        <LinkEl>React Projects</LinkEl>
        <LinkEl> Vanila JS Projects</LinkEl>
        <LinkEl>Adobe XD designs</LinkEl>
      </Links>

      <ProjectsLayout>
        <ProjectsText>
          <Rank> PROJECT 1</Rank>
          <ProjectTitle> Toni Market</ProjectTitle>
          <ProjectDescription>
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
