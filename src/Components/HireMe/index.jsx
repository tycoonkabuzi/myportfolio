import styled from "styled-components";
import Buttons from "../../utilities/style/Buttons";
import image from "../../Assets/picature.jpg";
import colors from "../../utilities/style/Colors";

const Main = styled.div``;
const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  width: 350px;
  height: inherit;
  background-color: ${colors.primaryTinted};
  margin: auto;
  margin-top: 130px;
  border-radius: 10px;
`;
const Profile = styled.div``;
const Picture = styled.img`
  width: 100%;
`;
const Text = styled.div`
  width: 80%;
  margin: auto;
`;
const Name = styled.h3`
  text-align: center;
`;
const Title = styled.p`
  font-size: 13px;
  text-align: center;
`;
const Location = styled.h5`
  color: ${colors.primaryPurpule};
  text-align: center;

  margin-top: -20px;
`;
const Icon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  overflow: hidden;
  margin: auto;
`;
const ContainerButton = styled.div`
  width: 80%;
  margin: auto;
`;

function HireMe() {
  return (
    <Main>
      <Container>
        <Profile>
          <Icon>
            <Picture src={image} />
          </Icon>
          <Text>
            <Name> Kabuzi Ntwali</Name>
            <Location>Krakow, Poland</Location>
            <Title>Frontend developper, and designer</Title>
          </Text>
        </Profile>
        <ContainerButton>
          <Buttons
            to="https://github.com/tycoonkabuzi?tab=repositories"
            secondary
          >
            Git hub
          </Buttons>
          <Buttons
            to="https://www.linkedin.com/in/kabuzi-ntwali-509439103/"
            primary
          >
            Linkedin
          </Buttons>
          <Buttons to="https://twitter.com/Tycoonkabuzi" primary>
            Twiter
          </Buttons>
          <Buttons to="https://twitter.com/Tycoonkabuzi" primary>
            Instagram
          </Buttons>
        </ContainerButton>
      </Container>
    </Main>
  );
}
export default HireMe;
