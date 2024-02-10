import styled from "styled-components";
import Database from "../../theData/database";
import colors from "../../utilities/style/Colors";
import { ThemeContext } from "../../utilities/context";
import { useContext } from "react";
import Project from "../Project";
import { useState } from "react";
const Main = styled.div`
  width: 80%;
  margin: auto;

  padding-top: 150px;
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
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    flex-wrap: wrap;
  }
`;
const LinkEl = styled.li`
  list-style: none;
  margin: auto;
  &:hover {
    color: ${colors.primaryPurpule};
    cursor: pointer;
  }
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
  const [filtered, setFiltered] = useState(
    Database.filter((item) => item.category === "React")
  );
  const [clicked, setClicked] = useState(false);
  function handleCategory(theCategory) {
    const filtered = Database.filter((item) => item.category === theCategory);
    setClicked(!clicked);
    setFiltered(filtered);
  }
  return (
    <Main id="portfolio">
      <Title theTheme={theme}> PORTFOLIO</Title>
      <Links theTheme={theme}>
        <LinkEl onClick={() => handleCategory("React")}>React Projects</LinkEl>
        <LinkEl onClick={() => handleCategory("Js")}>Vanila JS Projects</LinkEl>
        <LinkEl onClick={() => handleCategory("Xd")}>Adobe XD designs</LinkEl>
      </Links>
      <ContainerItem>
        {filtered.map((element) => (
          <Project
            key={element.id}
            index={element.id}
            title={element.title}
            description={element.description}
            picture={element.projectImage}
            clicked={clicked}
          />
        ))}
      </ContainerItem>
    </Main>
  );
}
export default Portfolio;
