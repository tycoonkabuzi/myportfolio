import styled from "styled-components";
import colors from "./Colors";
const Buttons = styled.button`
  width: 150px;
  height: 50px;
  color: white;
  background-color: ${(props) =>
    props.primary ? `${colors.primaryPurpule}` : `transparent`};
  border: none;
  border-radius: 20px;
  margin-top: 20px;
  &:hover {
    background-color: ${colors.primaryPurpuleHover};
    cursor: pointer;
  }
  ${(props) =>
    props.secondary &&
    `background-color:transparent;
      border:2px solid ${colors.primaryPurpule};
      color:${(props) => (props.theTheme === true ? `blue` : `blue`)};`}
  ${(props) =>
    props.gradient
      ? `background:${colors.gradient};
      `
      : `${colors.primaryPurpule}`};
`;

export default Buttons;
