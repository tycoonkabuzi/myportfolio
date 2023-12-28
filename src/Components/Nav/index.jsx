import styled from "styled-components";
import moon from "../../Assets/moon.png";
import sun from "../../Assets/sun.png";
const Name = "<Kabuzi_Ntwali/>";
const Main = styled.div`
  color: white;
  height: 60px;
  position: absolute;
  width: 100%;
  z-index: 1;
  display: grid;
  grid-template-columns: 50% 30% 20%;
  justify-content: center;
  justify-items: center;
  align-items: center;
  top: 50px;
`;
const Logo = styled.h3`
  display: block;
  width: 500px;
  text-align: left;
`;
const MainLinks = styled.ul`
  width: 300px;

  margin: auto;
`;
const Links = styled.li`
  list-style: none;
  display: inline;
  margin-left: 50px;
  color: #a2a2a2;
  &:hover {
    color: #ae69e0;
    cursor: pointer;
  }
`;
const ThemeChanger = styled.div`
  width: 80px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 40px;
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 40px;
`;

const Sun = styled.img`
  width: 30px;
  position: relative;
  left: 40px;
  top: 4px;
`;
const Moon = styled.img`
  position: relative;
  left: 0px;
  width: 30px;
  top: -35px;
`;
function Nav() {
  return (
    <Main>
      <Logo>{Name}</Logo>
      <MainLinks>
        <Links>Home</Links>
        <Links>About</Links>
        <Links>Projects</Links>
      </MainLinks>
      <ThemeChanger>
        <Circle>
          <Sun src={sun} alt=" small icon of the sun" />
        </Circle>
        <Moon src={moon} alt="small icon of the moon" />
      </ThemeChanger>
    </Main>
  );
}
export default Nav;
