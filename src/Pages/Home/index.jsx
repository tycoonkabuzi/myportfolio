import Header from "../../Components/Header";
import styled from "styled-components";
import Nav from "../../Components/Nav";
import { useContext } from "react";
import { ThemeContext } from "../../utilities/context";
import { useEffect } from "react";
const Main = styled.div``;
function Home() {
  const time = new Date();
  const hours = time.getHours();
  const { setTheme } = useContext(ThemeContext);
  useEffect(() => {
    if (hours >= 8 && hours < 16) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, [hours, setTheme]);
  return (
    <Main>
      <Nav />
      <Header />
    </Main>
  );
}
export default Home;
