import styled from "styled-components";
import JavascriptIcon from "../../Assets/javascript.png";
import cssIcon from "../../Assets/css.png";
import htmlIcon from "../../Assets/html.png";
import reactIcon from "../../Assets/react.png";
import bootstrap from "../../Assets/bootstrap.png";
import sassIcon from "../../Assets/sass.png";
import adobeXD from "../../Assets/xdwhite.png";
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
`;
function Experience() {
  return (
    <Main>
      <Title> EXPERIENCE</Title>

      <Container>
        <ItemContainer>
          <Item>
            <PictureSkill src={JavascriptIcon} />
            <ElementName>Javascript</ElementName>
          </Item>
          <Item>
            <PictureSkill src={htmlIcon} />
            <ElementName>Html</ElementName>
          </Item>

          <Item>
            <PictureSkill src={cssIcon} />
            <ElementName>Css</ElementName>
          </Item>

          <Item>
            <PictureSkill src={bootstrap} />
            <ElementName>Bootstrap</ElementName>
          </Item>
          <Item>
            <PictureSkill src={reactIcon} />
            <ElementName>React</ElementName>
          </Item>
          <Item>
            <PictureSkill src={sassIcon} />
            <ElementName>Sass</ElementName>
          </Item>
          <Item>
            <PictureSkill src={adobeXD} />
            <ElementName>Adobe Xd</ElementName>
          </Item>
        </ItemContainer>
      </Container>
    </Main>
  );
}
export default Experience;
