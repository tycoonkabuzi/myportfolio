import styled from "styled-components";
import Database from "../../theData/database";
import colors from "../../utilities/style/Colors";
import { ThemeContext } from "../../utilities/context";
import { useContext } from "react";
import Project from "../Project";
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
const ContainerItem = styled.div`
  width: 90%;
  margin: auto;
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
      <ContainerItem>
        {Database.map((element) => (
          <Project
            index={element.id}
            title={element.title}
            description={element.description}
            picture={element.projectImage}
          />
        ))}
      </ContainerItem>
    </Main>
  );
}
export default Portfolio;
