import styled from "styled-components";
import colors from "./Colors";

const Buttons = styled.button`
  width: 150px;
  height: 50px;
  color: ${(props) => (props.theTheme ? `${colors.primary}` : `white`)};
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
      `}
  ${(props) =>
    props.gradient
      ? `background:${colors.gradient};
      color:${props.theTheme === true && `white`};
      `
      : `${colors.primaryPurpule}`};
`;

export default Buttons;
