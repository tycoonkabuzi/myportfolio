import Header from "../../Components/Header";
import styled from "styled-components";
import Nav from "../../Components/Nav";
import { useContext } from "react";
import { ThemeContext } from "../../utilities/context";
import { useEffect } from "react";
import About from "../../Components/About";
import Portfolio from "../../Components/Portfolio";
import Experience from "../../Components/Experience";
import Contact from "../../Components/Contact";
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
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </Main>
  );
}
export default Home;
