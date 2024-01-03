import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../context";
import { useContext } from "react";

const Style = createGlobalStyle`
    body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     background-color: ${(props) =>
       props.isDark === true ? `#eeeeee` : `#1f252f `};
    color: white;
    font-family: 'Poppins', sans-serif;
  }
`;
function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <Style isDark={theme} />;
}
export default GlobalStyle;
