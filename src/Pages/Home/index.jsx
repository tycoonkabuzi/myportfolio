import Header from "../../Components/Header";
import styled from "styled-components";
import Nav from "../../Components/Nav";
import { useEffect, useState } from "react";
const Main = styled.div`
  background-color: red;
`;
function Home() {
  const [theme, setTheme] = useState(false);
  const time = new Date();
  const hours = time.getHours();

  useEffect(() => {
    if (hours >= 8 && hours < 16) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, [hours]);
  return (
    <Main>
      <Nav theme={theme} setTheme={setTheme} />
      <Header theme={theme} setTheme={setTheme} />
    </Main>
  );
}
export default Home;
