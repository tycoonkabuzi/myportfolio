import { createGlobalStyle } from "styled-components";
import colors from "./Colors";
import { ThemeContext } from "../context";
import { useContext } from "react";

const Style = createGlobalStyle`
    body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     background-color: ${(props) =>
       props.isDark === true ? `${colors.secondary}` : `${colors.primary} `};
    color: white;
    font-family: 'Poppins', sans-serif;
  }
`;
function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <Style isDark={theme} />;
}
export default GlobalStyle;
