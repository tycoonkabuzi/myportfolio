import colors from "../../utilities/style/Colors";
import SquareShape from "../../utilities/style/SquareShape";
import styled from "styled-components";
import { ThemeContext } from "../../utilities/context";
import { useContext } from "react";

const ProjectsText = styled.div`
  width: 80%;
  order: ${(props) => (props.theIndex % 2 === 0 ? 1 : "")};
`;
const ProjectsLayout = styled.div`
  margin: auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  gap: 5%;
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
function Project({ index, title, description, picture }) {
  const { theme } = useContext(ThemeContext);
  const theIndex = parseInt(index);
  return (
    <ProjectsLayout theIndex={theIndex}>
      <ProjectsText theIndex={theIndex}>
        <Rank> Project {theIndex} </Rank>
        <ProjectTitle theTheme={theme}>{title}</ProjectTitle>
        <ProjectDescription theTheme={theme}>{description}</ProjectDescription>
      </ProjectsText>
      <SquareShape projectSquare>
        <ProjectPicture alt="Toni market project Image" src={picture} />
      </SquareShape>
    </ProjectsLayout>
  );
}
export default Project;
