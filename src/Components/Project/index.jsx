import colors from "../../utilities/style/Colors";
import SquareShape from "../../utilities/style/SquareShape";
import styled, { css, keyframes } from "styled-components";
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
  @media only screen and (min-width: 992px) {
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
    bottom: 50px;
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
`;
function Project({ index, title, description, picture, clicked, price }) {
  const { theme } = useContext(ThemeContext);
  const theIndex = parseInt(index);
  return (
    <ProjectsLayout theIndex={theIndex}>
      <ProjectsText theIndex={theIndex} clicked={clicked}>
        <Rank> Project {theIndex} </Rank>
        <ProjectTitle theTheme={theme}>{title}</ProjectTitle>
        <ProjectDescription theTheme={theme}>{description}</ProjectDescription>
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
