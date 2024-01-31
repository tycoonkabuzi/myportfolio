import styled from "styled-components";
import JavascriptIcon from "../../Assets/javascript.png";
import JavascriptBlack from "../../Assets/jsblack.png";
import cssIcon from "../../Assets/css.png";
import cssBlack from "../../Assets/cssblack.png";
import htmlIcon from "../../Assets/html.png";
import htmlBlack from "../../Assets/htmlblack.png";
import reactIcon from "../../Assets/react.png";
import reactColor from "../../Assets/reactColor.png";
import bootstrap from "../../Assets/bootstrap.png";
import sassIcon from "../../Assets/sass.png";
import sassColor from "../../Assets/sassColor.png";
import adobeXD from "../../Assets/xdwhite.png";
import adobeXDBlack from "../../Assets/xdblack.png";
import { ThemeContext } from "../../utilities/context";
import { useContext } from "react";
import colors from "../../utilities/style/Colors";
const Main = styled.div`
  margin-top: 200px;
  width: 75%;
  margin: auto;
  padding-top: 200px;
`;
const Container = styled.div``;
const Item = styled.div`
  width: 35%;
  margin: auto;
`;
const Title = styled.h2`
  text-align: center;
  padding-bottom: 100px;
  color: ${(props) => (props.theme === true ? `${colors.primary}` : `white`)};
`;
const PictureSkill = styled.img`
  width: 100%;
`;
const ElementName = styled.h3`
  text-align: center;
`;
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  color: ${(props) =>
    props.theme === true ? `${colors.paragraphColorDark}` : `white`};
`;
function Experience() {
  const { theme } = useContext(ThemeContext);
  return (
    <Main>
      <Title theme={theme}> EXPERIENCE</Title>

      <Container>
        <ItemContainer theme={theme}>
          <Item>
            <PictureSkill src={theme ? JavascriptBlack : JavascriptIcon} />
            <ElementName>Javascript</ElementName>
          </Item>
          <Item>
            <PictureSkill src={theme ? htmlBlack : htmlIcon} />
            <ElementName>Html</ElementName>
          </Item>

          <Item>
            <PictureSkill src={theme ? cssBlack : cssIcon} />
            <ElementName>Css</ElementName>
          </Item>

          <Item>
            <PictureSkill src={bootstrap} />
            <ElementName>Bootstrap</ElementName>
          </Item>
          <Item>
            <PictureSkill src={theme ? reactColor : reactIcon} />
            <ElementName>React</ElementName>
          </Item>
          <Item>
            <PictureSkill src={theme ? sassColor : sassIcon} />
            <ElementName>Sass</ElementName>
          </Item>
          <Item>
            <PictureSkill src={theme ? adobeXDBlack : adobeXD} />
            <ElementName>Adobe Xd</ElementName>
          </Item>
        </ItemContainer>
      </Container>
    </Main>
  );
}
export default Experience;
