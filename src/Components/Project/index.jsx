import colors from "../../utilities/style/Colors";
import SquareShape from "../../utilities/style/SquareShape";
import blackOpen from "../../Assets/blackOpen.png";
import whiteOpen from "../../Assets/whiteOpen.png";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../utilities/context";
import { useContext } from "react";

const fromRight = keyframes`
from{
  transform: translateX(700px) rotate(-12deg);
 
}
to{
transform: translateX(0);
}`;
const fromLeft = keyframes`
from{
  transform: translateX(-700px) rotate(12deg);
}
to{
transform: translateX(0);
}`;
const ProjectsText = styled.div`
  width: 80%;
  ${(props) =>
    props.theIndex % 2 === 0 && props.clicked === true
      ? css`
          animation: ${fromRight} 1s ease-in-out;
          order: 1;
        `
      : css`
          animation: ${fromLeft} 1s ease-in-out;
        `}
  @media only screen and (min-width: 992px) {
    margin: auto;
  }
`;
const ProjectsLayout = styled.div`
  margin: auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  gap: 5%;
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: auto;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 50% 50%;
  }
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
  ${(props) =>
    props.theIndex % 2 === 0 && props.clicked === true
      ? css`
          animation: ${fromLeft} 1s ease-in-out backwards;
          order: 1;
        `
      : css`
          animation: ${fromRight} 1s ease-in-out backwards;
        `}
  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    left: 10px;
    bottom: 40px;
    width: 300px;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    left: 10px;
    bottom: 50px;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    left: 10px;
    top: 20px;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const OpenProject = styled(Link)`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-decoration: none;
  gap: 15px;
  &:hover {
    border-bottom: 1px solid
      ${(props) =>
        props.theTheme === true ? `${colors.primary}` : `${colors.secondary}`};
    cursor: pointer;
    width: 157px;
    padding-bottom: 7px;
  }
`;
const PreviewIcon = styled.img`
  width: 20px;
`;
const TextPreview = styled.div`
  color: ${(props) =>
    props.theTheme === true ? `${colors.primary}` : `${colors.secondary}`};
`;
function Project({ index, title, description, picture, clicked, rank, link }) {
  const { theme } = useContext(ThemeContext);
  const theIndex = parseInt(index);
  return (
    <ProjectsLayout theIndex={theIndex}>
      <ProjectsText theIndex={theIndex} clicked={clicked}>
        <Rank> Project {rank} </Rank>
        <ProjectTitle theTheme={theme}>{title}</ProjectTitle>
        <ProjectDescription theTheme={theme}>{description}</ProjectDescription>
        <OpenProject theTheme={theme} to={link}>
          <TextPreview theTheme={theme}> Preview Project</TextPreview>
          <PreviewIcon src={theme === true ? blackOpen : whiteOpen} />
        </OpenProject>
      </ProjectsText>
      <SquareShape projectSquare theIndex={index}>
        <ProjectPicture
          theIndex={theIndex}
          clicked={clicked}
          alt="Toni market project Image"
          src={picture}
        />
      </SquareShape>
    </ProjectsLayout>
  );
}
export default Project;
